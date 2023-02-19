import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {checkResponse} from "../../utils/utils";

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_REQUEST_INGREDIENTS = 'SET_INGREDIENTS'
export const ERROR_REQUEST_INGREDIENTS = 'ERROR_REQUEST_INGREDIENTS'

export const getIngredients = () => async dispatch => {

    dispatch({type: REQUEST_INGREDIENTS})

    try {
        const response = await fetch(URL_GET_INGREDIENTS)
        const json = await checkResponse(response)
        const data = json?.success ? json : json.then(err => Promise.reject(err))
        dispatch({type: SUCCESS_REQUEST_INGREDIENTS, payload: data.data})
    } catch(err) {
        dispatch({type: ERROR_REQUEST_INGREDIENTS})
    }

}