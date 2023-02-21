import {
    ERROR_REQUEST_USER, EXPIRED_TOKEN,
    REQUEST_USER, SUCCESS_REFRESH_TOKEN,
    SUCCESS_REFRESH_USER, SUCCESS_REQUEST_LOGIN_USER, SUCCESS_REQUEST_LOGOUT_USER,
    SUCCESS_REQUEST_REGISTER_USER
} from "../actions/user-actions";
import {setCookie} from "../../utils/cookie";

const user ={
    email: '',
    name: ''
}

const initialState = {
    user,
     accessToken: '',
     accessTokenExpiration: true,
     hasLoading: false,
     hasError: false
 }

 export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER:
            return {
                ...state,
                hasLoading: true,
                hasError: false
            }
        case ERROR_REQUEST_USER:
            return {
                ...state,
                hasLoading: false,
                hasError: true
            }
        case SUCCESS_REQUEST_REGISTER_USER:
            case SUCCESS_REQUEST_LOGIN_USER:
            setCookie('token', action.payload.refreshToken);
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
            }
        case SUCCESS_REFRESH_USER: {
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: action.payload.user,
                accessTokenExpiration: false
            }
        }

        case SUCCESS_REQUEST_LOGOUT_USER:
            setCookie('token', '');
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: user,
                accessToken: '',
                accessTokenExpiration: true
            }
        case EXPIRED_TOKEN:
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                accessTokenExpiration: true
            }
        case SUCCESS_REFRESH_TOKEN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                accessTokenExpiration: false
            }
        default:
            return state
    }
 }