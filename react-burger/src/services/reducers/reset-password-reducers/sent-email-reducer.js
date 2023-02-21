import {
    FAILURE_REQUEST_EMAIL,
    REQUEST_EMAIL, RESET_EMAIL,
    SUCCESS_REQUEST_EMAIL
} from "../../actions/reset-password-actions/sent-email-actions";

const initialState = {
    successEmail: false,
    hasError: false,
    hasLoading: false,
    errorMessage: ''
}

export const sentEmailReducer = (state = initialState, action) => {

    switch (action.type) {

        case REQUEST_EMAIL:
            return {
                ...state,
                hasLoading: true,
                hasError: false
            }
        case SUCCESS_REQUEST_EMAIL:
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                successEmail: true
            }
        case FAILURE_REQUEST_EMAIL:
            return {
                ...state,
                hasError: true,
                hasLoading: false,
                errorMessage: action.payload
            }
        case RESET_EMAIL:
            return {
                ...state,
                completeReset: false
            }
        default:
            return state

    }

}