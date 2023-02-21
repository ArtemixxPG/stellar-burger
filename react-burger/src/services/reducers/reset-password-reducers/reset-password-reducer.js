import {
    FAILURE_REQUEST_RESET_PASSWORD,
    REQUEST_RESET_PASSWORD, RESET_PASSWORD,
    SUCCESS_REQUEST_RESET_PASSWORD
} from "../../actions/reset-password-actions/reset-password-actions";

const initialState = {
    completeReset: false,
    hasError: false,
    hasLoading: false,
    errorMessage: ''
}

export const resetPasswordReducer = (state = initialState, action) => {

    switch (action.type) {

        case REQUEST_RESET_PASSWORD:
            return {
                ...state,
                hasLoading: true,
                hasError: false
            }
        case SUCCESS_REQUEST_RESET_PASSWORD:
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                completeReset: true
            }
        case FAILURE_REQUEST_RESET_PASSWORD:
            return {
                ...state,
                hasError: true,
                hasLoading: false,
                errorMessage: action.payload
            }
        case RESET_PASSWORD:
            return {
                ...state,
                completeReset: false
            }
        default:
            return state

    }

}