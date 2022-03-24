import * as actionType from "../ActionType"

export const  fetchProduct = () => (dispatch) => {
    dispatch({type : actionType.FETCH_PRODUCT})
}
export const addProduct = (data) => (dispatch) => {
    dispatch({type: actionType.ADD_PRODUCT , payload:data})   //Request
}
export const addedpatients = (data) => (dispatch) => {
    console.log(data)
    dispatch({ type: actionType.ADDED_PRODUCT, payload: data})
}
