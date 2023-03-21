import {URL_ORDER} from "../../utils/URL";
import {request} from "../../utils/utils";
import {TIngredient} from "../../utils/prop-types-constants";
import {createAction} from "@reduxjs/toolkit";
import {AppThunk, TDispatch} from "../reducers/root/root-reducer";
import {orderActions} from "../reducers/order-reducer";

export const REQUEST_ORDER = 'REQUEST_ORDER';
export const SUCCESS_REQUEST_ORDER = 'SUCCESS_REQUEST_ORDER'
export const FAILURE_REQUEST_ORDER = 'FAILURE_REQUEST_ORDER'
export const RESET_ORDER = 'RESET_ORDER'

export const requestOrder = createAction(REQUEST_ORDER)
export const errorOrder = createAction<string>(FAILURE_REQUEST_ORDER)

export type TOrderExtraActions = ReturnType<typeof requestOrder> | ReturnType<typeof errorOrder>

type TRequestBody = {
    ingredients: Array<TIngredient>
}

export const orderPost = (requestBody:TRequestBody):AppThunk => async (dispatch: TDispatch) => {
    dispatch(requestOrder)
    await request(URL_ORDER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(requestBody)
    }).then(data =>
        dispatch(orderActions.successOrder(data))
    ).catch(err =>
        dispatch(errorOrder(err.message)))

}