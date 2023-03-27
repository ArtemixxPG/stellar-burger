
import {setCookie} from "../../utils/cookie";
import {IPayloadUser, IUser, IUserState} from "../../utils/prop-types-constants";
import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";

const user: IUser = {
    email: '',
    name: ''
}

const initialState: IUserState = {
    user,
    hasLoading: false,
    error: {
        message: '',
        hasError: false
    },
    isLogIn: false
}

const userSlice = createSlice({
    name:'user-reducer',
    initialState,
    reducers: {
        userSuccess(state, action:PayloadAction<IPayloadUser>){
            setCookie('token', action.payload.refreshToken)
            setCookie('auth', action.payload.accessToken)
            state.hasLoading = false
            state.error = initialState.error
            state.user = action.payload.user
            state.isLogIn = true
        },
        userLogout (state) {
            setCookie('token', '')
            setCookie('auth', '')
            state.hasLoading = false
            state.error = initialState.error
            state.user = user
            state.isLogIn = false
        },
        userRequest (state) {
            state.hasLoading = false
            state.error = initialState.error
        },
        userRequestError(state, action:PayloadAction<string>){
            setCookie('token', '')
            setCookie('auth', '')
            state.user = user
            state.hasLoading = false
            state.error =  {
                message: action.payload,
                hasError: true
            }
        }
    },
})




export const {userSuccess, userLogout, userRequest, userRequestError} = userSlice.actions
export const userReducer = userSlice.reducer
export type TUserActionsTypes = ReturnType<typeof userSuccess> | ReturnType<typeof userLogout> |
    ReturnType<typeof userRequest> | ReturnType<typeof userRequestError>

export type TUserActions = typeof userSuccess | typeof userLogout