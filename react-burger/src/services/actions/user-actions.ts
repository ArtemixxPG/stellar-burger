import {request} from "../../utils/utils";
import {AppThunk, TDispatch} from "../reducers/root/root-reducer";

export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_REQUEST_REGISTER_USER = 'SUCCESS_REQUEST_REGISTER_USER'

export const SUCCESS_REFRESH_USER = 'SUCCESS_REFRESH_USER'

export const SUCCESS_REQUEST_LOGIN_USER = 'SUCCESS_REQUEST_LOGIN_USER'

export const SUCCESS_REQUEST_LOGOUT_USER = 'SUCCESS_REQUEST_LOGOUT_USER'

export const EXPIRED_TOKEN = 'EXPIRED_TOKEN'

export const SUCCESS_REFRESH_TOKEN = 'SUCCESS_REFRESH_TOKEN'

export const ERROR_REQUEST_USER = 'ERROR_REQUEST_LOGOUT_USER'

type TUserResponseOptions = {
    successUserAction: string
    url: string
    body? : any,
    token? : string
}


export const query = ({successUserAction, url, body, token}: TUserResponseOptions):AppThunk => async (dispatch: TDispatch) => {

    dispatch({type: REQUEST_USER})

    await request(url, {
        method: token ? body ? 'PATCH' : 'GET' : 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(body)
    })
        .then(data => dispatch({type: successUserAction, payload: data}))
        .catch(err => dispatch({type: ERROR_REQUEST_USER, payload: err.message}))

}

export const queryGET = ({successUserAction, url, token}:TUserResponseOptions) => async (dispatch: (arg: { type: string; payload?: any; }) => void) => {

    dispatch({type: REQUEST_USER})

    await request(url, {
        method:  'GET',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
        .then(data => dispatch({type: successUserAction, payload: data}))
        .catch(err => dispatch({type: ERROR_REQUEST_USER, payload: err.message}))

}