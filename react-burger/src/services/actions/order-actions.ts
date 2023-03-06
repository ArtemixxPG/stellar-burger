import {URL_ORDER} from "../../utils/URL";
import {checkResponse, request} from "../../utils/utils";
import {ERROR_REQUEST_INGREDIENTS, SUCCESS_REQUEST_INGREDIENTS} from "./ingedients-actions";

export const REQUEST_ORDER = 'REQUEST_ORDER';
export const SUCCESS_REQUEST_ORDER = 'SUCCESS_REQUEST_ORDER'
export const FAILURE_REQUEST_ORDER = 'FAILURE_REQUEST_ORDER'
export const RESET_ORDER = 'RESET_ORDER'

//@ts-ignore
export const orderPost = (requestBody) => async dispatch => {
    dispatch({type: REQUEST_ORDER})
    await request(URL_ORDER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(requestBody)
    }).then(data =>
        dispatch({type: SUCCESS_REQUEST_ORDER, payload: data})
    ).catch(err =>
        dispatch({type: FAILURE_REQUEST_ORDER, payload: err.message}))

}