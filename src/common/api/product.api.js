import { addRequest, deleteRequest, getRequest } from "../requast"

export const fetchProductRequast = () => {
    return getRequest("users/") 
}

export const addProductData = (data) => {
    return addRequest("users/", data)
}
export const deleteProductData = (id) => {
    return deleteRequest("users/" , id)
}


