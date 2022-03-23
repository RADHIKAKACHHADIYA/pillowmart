import * as ActionType from "../ActionType";

const initialValue = {
    product: [],
    errorMsg: '',
    isLoading: false
}

export const ProductReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionType.RETRIEVED_PRODUCT:
            return {
                ...state,
                product: action.payload,
                errorMsg: '',
                isLoading: false
            }
            case ActionType.ADDED_PRODUCT:
                return {
                    ...state,
                    patients: state.product.concat(action.payload),
                    errorMsg: '',
                    isLoading: false
                }
        default:
            return state;
    }
}