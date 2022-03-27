import * as actionType from "../ActionType"

export const  fetchProduct = () => (dispatch) => {
    dispatch({type : actionType.FETCH_PRODUCT})
}

export const retriedProduct = (data) => (dispatch) => {
    console.log(data)
    dispatch({ type: actionType.RETRIEVED_PRODUCT, payload: data})
}

export const addProduct = (data) => (dispatch) => {
    dispatch({type: actionType.ADD_PRODUCT , payload:data})   //Request
}

export const addedProduct = (data) => (dispatch) => {
    console.log(data)
    dispatch({ type: actionType.ADDED_PRODUCT, payload: data})
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch({type : actionType.DELETE_PRODUCT, payload: id})
}

export const deletedProduct = (data) => (dispatch) => {
    dispatch({ type: actionType.DELETED_PRODUCT , payload: data })
}
export const updateProduct = (data) => (dispatch) => {
    dispatch({ type:  actionType.UPDATE_PRODUCT, payload: data })
}

export const updatedProduct = (data) => (dispatch) => {
    dispatch({ type:  actionType.UPDATED_PRODUCT, payload: data })
}