import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {checkResponse} from "../../utils/utils";

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_REQUEST_INGREDIENTS = 'SET_INGREDIENTS'
export const ERROR_REQUEST_INGREDIENTS = 'ERROR_REQUEST_INGREDIENTS'

export const getIngredients = () => dispatch => {

    dispatch({type: REQUEST_INGREDIENTS})

    fetch(URL_GET_INGREDIENTS)
        .then(res => checkResponse(res))
        .then(data => data?.success ? data : data.then(err => Promise.reject(err)))
        .then(ingredients => dispatch({type: SUCCESS_REQUEST_INGREDIENTS, payload: ingredients.data}))
        .catch(err => {
            dispatch({type: ERROR_REQUEST_INGREDIENTS})
        })

}