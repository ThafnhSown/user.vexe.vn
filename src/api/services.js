import EndPoint from "../common/endpoints";
import { ApiAdminConfig, ApiConfig } from "./config";

export const apiLogin = async (payload) => {
    return ApiConfig(EndPoint.LOGIN, payload)
}

//admin
export const apiGetListNews = async () => {
    return ApiConfig(EndPoint.LIST_NEWS, undefined, "GET")
}

export const apiCreateNewsFeed = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_NEWS, props)
}

export const apiCreateMediaContent = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_MEDIA, props)
}

export const apiGetMediaContent = async (type) => {
    return ApiConfig(`${EndPoint.LIST_MEDIA_CONTENT}?type=${type}`, undefined, "GET")
}

export const apiGetListCompany = async() => {
    return ApiAdminConfig(EndPoint.LIST_COMPANY, undefined,"GET")
}

export const apiCreateCompany = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_COMPANY, props)
}

//global
export const apiGetListProvince = async () => {
    return ApiConfig(EndPoint.LIST_PROVINCE, undefined, "GET")
}

export const apiGetListDistrict = async (p) => {
    return ApiConfig(`${EndPoint.LIST_DISTRICT}?provinceId=${p}`, undefined, "GET")
}

export const apiGetPointList = async () => {
    return ApiConfig("/global/get-point-list", undefined, "GET")
}

export const apiGetLocation = async (p) => {
    return ApiConfig(`/global/get-location?locationId=${p}`, undefined, "GET")
}

export const apiGetCoaches = async () => {
    return ApiConfig("/global/get-coaches", undefined, "GET")
}

export const apiGetListCompanyGb = async () => {
    return ApiConfig("/global/get-company-list", undefined, "GET")
}

export const apiOrderCoach = async (props) => {
    return ApiConfig("/global/order-coach", props)
}

//manage

export const apiCreateStaff = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_STAFF, props)
}

export const apiGetStaff = async (id) => {
    return ApiAdminConfig(`${EndPoint.LIST_STAFF}?companyId=${id}`, undefined, "GET")
}

export const apiDelStaff = async (props) => {
    return ApiAdminConfig(EndPoint.DEL_STAFF, props)
}

export const apiUpdateCompany = async (props) => {
    return ApiAdminConfig(EndPoint.UPDATE_COMPANY, props)
}

export const apiGetCompanyInfo = async () => {
    return ApiAdminConfig(EndPoint.GET_COMPANY_INFO, undefined, "GET")
}

export const apiCreateCoachRoute = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_ROUTE, props)
}

export const apiGetListRoute = async (companyId) => {
    return ApiAdminConfig(`${EndPoint.LIST_ROUTE}?companyId=${companyId}`, undefined, "GET")
}

export const apiAddPointToRoute = async(props) => {
    return ApiAdminConfig(EndPoint.ADD_POINT_TO_ROUTE, props)
}

export const apiGetRouteDetail = async (id) => {
    return ApiAdminConfig(`${EndPoint.GET_ROUTE_DETAIL}?coachRouteId=${id}`, undefined, "GET")
}

export const apiDeleteRoute = async (props) => {
    return ApiAdminConfig(EndPoint.DELETE_ROUTE, props)
}

export const apiCreateOffice = async(props) => {
    return ApiAdminConfig(EndPoint.CREATE_OFFICE, props)
}

export const apiListOffice = async (companyId) => {
    return ApiAdminConfig(`${EndPoint.LIST_OFFICE}?companyId=${companyId}`, undefined, "GET")
}

export const apiDeleteOffice = async(props) => {
    return ApiAdminConfig(EndPoint.DEL_OFFICE, props)
}

export const apiCreateCoach = async(props) => {
    return ApiAdminConfig(EndPoint.CREATE_COACH, props)
}

export const apiCreateSchedule = async(props) => {
    return ApiAdminConfig(EndPoint.CREATE_SCHEDULE, props)
}

export const apiListSchedule = async(id) => {
    return ApiAdminConfig(`${EndPoint.LIST_SCHEDULE}?coachRouteId=${id}`, undefined, "GET")
}

export const apiCreateSection = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_SECTION, props)
}

export const apiGetSection = async (id) => {
    return ApiAdminConfig(`${EndPoint.LIST_SECTION}?coachScheduleId=${id}`, undefined, "GET")
}

export const apiCreateTravelPath = async (props) => {
    return ApiAdminConfig(EndPoint.CREATE_TP, props)
}

export const apiGetTravelPathList = async (id) => {
    return ApiAdminConfig(`${EndPoint.GET_TP}?companyId=${id}`, undefined, "GET")
}

export const apiFindCoach = async (props) => {
    return ApiConfig(EndPoint.FIND_COACH, props)
}