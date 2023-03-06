import {RESET_ORDER, FAILURE_REQUEST_ORDER, REQUEST_ORDER, SUCCESS_REQUEST_ORDER} from "../actions/order-actions";

const initialState = {
    order: 0,
    name: '',
    hasError: false,
    hasLoading: false
}
//@ts-ignore
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ORDER:
            return {
                ...state,
                hasError: false,
                hasLoading: true
            }
        case SUCCESS_REQUEST_ORDER:
            return {
                ...state,
                hasError: false,
                hasLoading: false,
                order: action.payload.order.number,
                name: action.payload.name
            }
        case RESET_ORDER:
            return {
                ...state,
                order: 0
            }
        case FAILURE_REQUEST_ORDER: {
            return {
                ...state,
                hasError: true,
                hasLoading: false
            }
        }

        default:
            return state
    }
}