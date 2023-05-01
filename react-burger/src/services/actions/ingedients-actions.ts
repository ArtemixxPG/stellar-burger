import {URL_GET_INGREDIENTS} from "../../utils/URL";
import {request} from "../../utils/utils";
import {AppDispatch, AppThunk} from "../reducers/root/root-reducer";
import {ingredientsRequest, ingredientsSuccess, ingredientsRequestError} from "../reducers/ingredients-reducer";
import {TResponseIngredient} from "../../utils/prop-types-constants";

export const getIngredients:AppThunk = () => async (dispatch:AppDispatch) => {
    dispatch(ingredientsRequest())
    await request<TResponseIngredient>(URL_GET_INGREDIENTS).then(
        (data) => dispatch(ingredientsSuccess(data.data))
    ).catch(error => dispatch( ingredientsRequestError(error.message)))
}