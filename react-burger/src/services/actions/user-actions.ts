import {request} from "../../utils/utils";
import {
    AppDispatch,
    AppThunk,
} from "../reducers/root/root-reducer";
import {
    userLogout, userRefresh,
    userRequest,
    userRequestError,
    userSuccess
} from "../reducers/user-reducer";
import {IUserRequestData, TResponseUser} from "../../utils/prop-types-constants";


type TUserResponseOptions = {
    success: boolean
    url: string
    values? : IUserRequestData,
    token? : string
}


export const requestUser:AppThunk = ( {success, url, values, token}: TUserResponseOptions) =>
    async (dispatch: AppDispatch) => {

    dispatch(userRequest())

    await request<TResponseUser>(url, {
        method: token ? (url.includes('logout') ? 'POST' : (values ? 'PATCH' : 'GET')) : 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(values)
    })
        .then(data  => success ? (url.includes('user') ? dispatch(userRefresh(data)) :
            dispatch(userSuccess(data))) : dispatch(userLogout()))
        .catch(err => dispatch(userRequestError(err.message)))

}
