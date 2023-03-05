import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {checkResponse, request} from "../../utils/utils";

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_REQUEST_INGREDIENTS = 'SET_INGREDIENTS'
export const ERROR_REQUEST_INGREDIENTS = 'ERROR_REQUEST_INGREDIENTS'

export const getIngredients = () => async dispatch => {
    dispatch({type: REQUEST_INGREDIENTS})
    await request(URL_GET_INGREDIENTS).then(
        data => dispatch({type: SUCCESS_REQUEST_INGREDIENTS, payload: data.data})
    ).catch(error => dispatch({type: ERROR_REQUEST_INGREDIENTS, payload: error.message}))
}