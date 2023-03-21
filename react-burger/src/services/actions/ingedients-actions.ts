import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {request} from "../../utils/utils";
import {createAction} from "@reduxjs/toolkit";
import {ingredientsActions} from "../reducers/ingredients-reducer";
import {AppThunk, TDispatch} from "../reducers/root/root-reducer";

export const REQUEST_INGREDIENTS = 'REQUEST_INGREDIENTS'
export const SUCCESS_REQUEST_INGREDIENTS = 'SET_INGREDIENTS'
export const ERROR_REQUEST_INGREDIENTS = 'ERROR_REQUEST_INGREDIENTS'

export const ingredientsRequest = createAction(REQUEST_INGREDIENTS)
export const ingredientsError = createAction<string>(ERROR_REQUEST_INGREDIENTS)

export type ingredientsExtraAction = ReturnType<typeof ingredientsRequest> | ReturnType<typeof ingredientsError>

export const getIngredients = ():AppThunk => async (dispatch:TDispatch) => {
    dispatch(ingredientsRequest)
    await request(URL_GET_INGREDIENTS).then(
        data => dispatch(ingredientsActions.ingredientsSuccess(data.data))
    ).catch(error => dispatch( ingredientsError(error.message)))
}