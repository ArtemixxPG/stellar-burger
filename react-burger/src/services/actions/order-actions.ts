import {URL_ORDER} from "../../utils/URL";
import {request} from "../../utils/utils";
import {TIngredient} from "../../utils/prop-types-constants";
import {AppDispatch, AppThunk} from "../reducers/root/root-reducer";
import {orderRequest, orderRequestError, orderSuccess} from "../reducers/order-reducer";


type TRequestBody = {
    ingredients: Array<TIngredient>
}

export const orderPost:AppThunk = ({ingredients}:TRequestBody) => async (dispatch: AppDispatch) => {
    dispatch(orderRequest())
    await request(URL_ORDER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(ingredients)
    }).then(data =>
        dispatch(orderSuccess(data))
    ).catch(err =>
        dispatch(orderRequestError(err.message)))

}