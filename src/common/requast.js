import axios from "axios";
import { api } from "../url/baseApi";

export const axiosInstance = axios.create ({
    baseURL : api,
    timeout : 3000
})
export const sentRequest = (config) => {
    return axiosInstance.request(config)
}
export const getRequest = (path) => {
    return sentRequest({
        url : path,
        method : 'get'
    });
}

export const addRequest = (path) => {
    return sentRequest({
        url : path,
        method : 'post'
    })
}