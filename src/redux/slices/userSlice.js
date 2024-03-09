import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFindCoach, apiGetListCompanyGb, apiGetListDistrict, apiGetListNews, apiGetListProvince, apiLogin } from "../../api/services";

const initialState = {
    result: [],
    options: [],
    listCompany: [],
    newsFeed: [],
    loading: false
};

export const requestFindCoach = createAsyncThunk("/global/find-coach", async (props) => {
    const res = await apiFindCoach(props)
    return res.data
})

const loadDistrict = async (value) => {
  const res = await apiGetListDistrict(value)
  return res.data.data.map(d => ({
    value: d.id,
    label: d.district
}))
}

export const requestLoadOption = createAsyncThunk("/global/options", async () => {
    const res = await apiGetListProvince()
    const listP = res.data.data.map((p) => ({
      value: p.id,
      label: p.province
  }))

  const tmp = await Promise.all(listP.map(async (p) => ({
    ...p,
    children: await loadDistrict(p.value)
  })))

  return tmp
})

export const requestLoadCompany = createAsyncThunk("/global/get-list-company", async () => {
  const res = await apiGetListCompanyGb()

  return res.data.data
})

export const requestLoadNewsFeed = createAsyncThunk("/global/get-news-feed", async() => {
  const res = await apiGetListNews()
  // console.log("sopn", res.data.data.content)
  return res.data.data.content
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder.addCase(requestFindCoach.fulfilled, (state, action) => {
        state.result = action.payload.data
      })
      builder.addCase(requestLoadOption.pending, (state) => {
        state.loading = true
      })
      builder.addCase(requestLoadOption.fulfilled, (state, action) => {
        state.loading = false
        state.options = action.payload
      })
      builder.addCase(requestLoadCompany.fulfilled, (state, action) => {
        state.loading = false
        state.listCompany = action.payload
      })
      builder.addCase(requestLoadNewsFeed.fulfilled, (state, action) => {
        state.loading = false
        state.newsFeed = action.payload
      })
    }
});
export const userState = (state) => state.userState;

export default userSlice.reducer;