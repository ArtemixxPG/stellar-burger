import {AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {ingredientsActions, ingredientsReducer} from "../ingredients-reducer";
import {orderActions, orderReducer} from "../order-reducer";
import {selectedIngredientsReducer} from "../selected-ingedients-reducers";
import {userReducer} from "../user-reducer";
import {ingredientsExtraAction} from "../../actions/ingedients-actions";
import {store} from "../../../index";
import {TOrderExtraActions} from "../../actions/order-actions";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    selectedIngredients: selectedIngredientsReducer,
    user: userReducer
})



export type TStore = ReturnType<typeof rootReducer>
export type TActions = ReturnType<typeof ingredientsActions.ingredientsSuccess> |
    ingredientsExtraAction |
    ReturnType<typeof orderActions.successOrder> | TOrderExtraActions
export type TDispatch = ReturnType<typeof store.dispatch>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    TStore,
    never,
    TActions
    >