import { addRequest, deleteRequest, getRequest, updateRequest } from "../requast"

export const fetchProductRequast = () => {
    return getRequest("users/") 
}

export const addProductData = (data) => {
    return addRequest("users/", data)
}
export const deleteProductData = (id) => {
    return deleteRequest("users/" , id)
}

export const updateProductRequest = (data) => {
    return updateRequest('users/' ,data)
}
