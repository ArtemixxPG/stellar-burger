import {URL_GET_INGREDIENTS} from "../../utils/URL";

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_REQUEST_INGREDIENTS = 'SET_INGREDIENTS'
export const ERROR_REQUEST_INGREDIENTS = 'ERROR_REQUEST_INGREDIENTS'

export const getIngredients = () => dispatch => {
    dispatch({type: REQUEST_INGREDIENTS})

    fetch(URL_GET_INGREDIENTS)
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                return data.data
            } else {
                dispatch({type: ERROR_REQUEST_INGREDIENTS})
            }
        })
        .then(ingredients => dispatch({type: SUCCESS_REQUEST_INGREDIENTS, payload: ingredients}))
        .catch(err => {
            dispatch({type: ERROR_REQUEST_INGREDIENTS})
        })

}