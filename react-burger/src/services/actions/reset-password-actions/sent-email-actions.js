import {URL_POST, URL_SENT_EMAIL} from "../../../utils/URL";
import {checkResponse} from "../../../utils/utils";

export const RESET_EMAIL = 'RESET_EMAIL';
export const REQUEST_EMAIL = 'REQUEST_EMAIL';
export const SUCCESS_REQUEST_EMAIL = 'SUCCESS_REQUEST_EMAIL'
export const FAILURE_REQUEST_EMAIL = 'FAILURE_REQUEST_EMAIL'

export const sentEmail = (body, e) => async dispatch => {
    e.preventDefault()
    dispatch({type: REQUEST_EMAIL})

    try {

        const response = await fetch(URL_SENT_EMAIL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }, body: JSON.stringify(body)
        })
        const json = await checkResponse(response)
        const data = json?.success ? json : json.then(err => Promise.reject(err))
        dispatch({type: SUCCESS_REQUEST_EMAIL, payload: data})
    } catch (error) {
        dispatch({type: FAILURE_REQUEST_EMAIL, payload: error.message})
    }
}