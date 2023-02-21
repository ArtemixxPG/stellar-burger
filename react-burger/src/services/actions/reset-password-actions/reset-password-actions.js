import {URL_RESET_PASSWORD} from "../../../utils/URL";
import {checkResponse} from "../../../utils/utils";

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
export const SUCCESS_REQUEST_RESET_PASSWORD = 'SUCCESS_REQUEST_RESET_PASSWORD'
export const FAILURE_REQUEST_RESET_PASSWORD = 'FAILURE_REQUEST_RESET_PASSWORD'

export const resetPassword = (body, path) => async navigate => {


    try {
        const response = await fetch(URL_RESET_PASSWORD, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        })
        const json = await checkResponse(response)
        json?.success ? navigate(path) : json.then(err => Promise.reject(err))
    } catch (e) {
        console.log(e)
    }
}