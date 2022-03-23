import * as actionType from "../ActionType"

export const  fetchProduct = () => (dispatch) => {
    dispatch({type : actionType.FETCH_PRODUCT})
}
export const addProduct = (data) => (dispatch) => {
    dispatch({type: actionType.ADD_PRODUCT , payload:data})
}
export const addedpatients = (data) => (dispatch) => {
    dispatch({ type: actionType.ADDED_PRODUCT, payload: data})
}
