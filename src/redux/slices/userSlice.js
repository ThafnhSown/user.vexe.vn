import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFindCoach, apiGetListCompanyGb, apiGetListDistrict, apiGetListNews, apiGetListProvince, apiGetPointList, apiLogin } from "../../api/services";

const initialState = {
    result: [],
    options: [],
    listCompany: [],
    newsFeed: [],
    search: {},
    loading: false
};

export const requestFindCoach = createAsyncThunk("/global/find-coach", async (props) => {
    const res = await apiFindCoach(props)
    return res.data
})

export const requestLoadOption = createAsyncThunk("/global/list-point", async() => {
  const res = await apiGetPointList()
  const options = res.data.data.map((tmp) => ({
    value: tmp.province.provinceId,
    label: tmp.province.province,
    children: tmp.districtList.map(d => ({
      value: d.districtId,
      label: d.district
    }))
  }))

  return options
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
        setCurrentSearch: (state, action) => {
            state.search = action.payload
        }
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

export const {
  setCurrentSearch
} = userSlice.actions


export default userSlice.reducer;