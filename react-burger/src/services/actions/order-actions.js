import {URL_POST} from "../../utils/URL";
import {checkResponse} from "../../utils/utils";

export const REQUEST_ORDER = 'REQUEST_ORDER';
export  const SUCCESS_REQUEST_ORDER = 'SUCCESS_REQUEST_ORDER'
export const FAILURE_REQUEST_ORDER = 'FAILURE_REQUEST_ORDER'
export const CLEAR_ORDER = 'CLEAR_ORDER'

export const orderPost = (requestBody) => dispatch => {
    dispatch({type: REQUEST_ORDER})
    fetch(URL_POST, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
    }, body: JSON.stringify(requestBody)})
        .then(res => checkResponse(res))
        .then(data => data?.success ? data : dispatch({type:FAILURE_REQUEST_ORDER}))
        .then(result => dispatch({type:SUCCESS_REQUEST_ORDER, payload: result}))
        .catch(err => {dispatch({type:FAILURE_REQUEST_ORDER})})
}