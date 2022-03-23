import { addRequest, getRequest } from "../requast"

export const fetchProductRequast = () => {
    return getRequest("users/") 
}

export const addProductData = () => {
    return addRequest("users/")
}

