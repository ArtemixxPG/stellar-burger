import {
    ERROR_REQUEST_USER, EXPIRED_TOKEN,
    REQUEST_USER, SUCCESS_REFRESH_TOKEN,
    SUCCESS_REFRESH_USER, SUCCESS_REQUEST_LOGIN_USER, SUCCESS_REQUEST_LOGOUT_USER,
    SUCCESS_REQUEST_REGISTER_USER
} from "../actions/user-actions";
import {setCookie} from "../../utils/cookie";

const user = {
    email: '',
    name: ''
}

const initialState = {
    user,
    hasLoading: false,
    hasError: false,
    isLogIn: false
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
            setCookie('token', action.payload.refreshToken, {expires: 1200});
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: action.payload.user,
                isLogIn: true,
            }
        case SUCCESS_REFRESH_USER: {
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: action.payload.user,
                isLogIn: true,
            }
        }

        case SUCCESS_REQUEST_LOGOUT_USER:
            setCookie('token', '');
            setCookie('auth', '')
            return {
                ...state,
                hasLoading: false,
                hasError: false,
                user: user,
                isLogIn: false,
                accessTokenExpiration: true
            }
        case SUCCESS_REFRESH_TOKEN:
            setCookie('token', action.payload.refreshToken);
            setCookie('auth', action.payload.accessToken, {expires: 1200});

        default:
            return state
    }
}