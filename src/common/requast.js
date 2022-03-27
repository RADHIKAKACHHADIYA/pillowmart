import axios from "axios";
import { api } from "../url/baseApi";

export const axiosInstance = axios.create ({
    baseURL : api,
    timeout : 3000
})
export const sendRequest = (config) => {
    return axiosInstance.request(config)
}
export const getRequest = (path) => {
    return sendRequest({
        url : path,
        method : 'get'
    });
}

export const addRequest = (path , data) => {
    return sendRequest({
        url : path,
        method : 'post',
        // data: JSON.stringify(data),
        // headers: {
        //     "Content-Type": "application/json"
        // }
    })
}
export const deleteRequest = (path , id) => {
    return sendRequest({
        url : path + id,
        method : 'delete',
    })
}
export const updateRequest = (path, data) => {
    return sendRequest({
        url: path + data.id,
        method: 'put',
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}