import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {checkResponse} from "../../utils/utils";

export const REQUEST_USER = 'REQUEST_USER'
export const SUCCESS_REQUEST_REGISTER_USER = 'SUCCESS_REQUEST_REGISTER_USER'

export const SUCCESS_REFRESH_USER = 'SUCCESS_REFRESH_USER'

export const SUCCESS_REQUEST_LOGIN_USER = 'SUCCESS_REQUEST_LOGIN_USER'

export const SUCCESS_REQUEST_LOGOUT_USER = 'SUCCESS_REQUEST_LOGOUT_USER'

export const EXPIRED_TOKEN = 'EXPIRED_TOKEN'

export const SUCCESS_REFRESH_TOKEN = 'SUCCESS_REFRESH_TOKEN'

export const ERROR_REQUEST_USER = 'ERROR_REQUEST_LOGOUT_USER'

export const query = (successUserAction, url, body, token) => async dispatch => {

    dispatch({type: REQUEST_USER})

    try {
        const response = await fetch(url, {
            method: token ? body ? 'PATCH' : 'GET' : 'POST',
            headers: {
                'authorization': token,
                'Content-Type': 'application/json;charset=utf-8',
            }, body: JSON.stringify(body)
        })
        const json = await checkResponse(response)
        const data = json?.success ? json : token? ()=>{
            dispatch({type: EXPIRED_TOKEN})
            json.then(err => Promise.reject(err))} : json.then(err => Promise.reject(err))
        dispatch({type: successUserAction, payload: data})
    } catch(err) {
        dispatch({type: ERROR_REQUEST_USER})
    }

}