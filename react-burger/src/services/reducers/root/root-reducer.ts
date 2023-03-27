import {Action, ActionCreator, combineReducers, configureStore, createAction, ThunkAction} from "@reduxjs/toolkit";
import {
    ingredientsReducer,
    ingredientsRequest, ingredientsRequestError,
    ingredientsSuccess,
} from "../ingredients-reducer";
import {orderReducer, orderRequest, orderRequestError, orderSuccess} from "../order-reducer";
import {
    addBun,
    addIngredient,
    removeBun, removeIngredient,
    selectedIngredientsReducer, setIngredients
} from "../selected-ingedients-reducers";
import {userLogout, userReducer, userRequest, userRequestError, userSuccess} from "../user-reducer";
import thunk from "redux-thunk";
import {Dispatch} from "redux";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    selectedIngredients: selectedIngredientsReducer,
    user: userReducer
})

export type TUserActionsTypes = (ReturnType<typeof userSuccess>) | ReturnType<typeof userLogout> |
    ReturnType<typeof userRequest> | ReturnType<typeof userRequestError>
type TIngredientsActionsTypes = ReturnType<typeof ingredientsSuccess> | ReturnType<typeof ingredientsRequest> |
    ReturnType<typeof ingredientsRequestError>
type TOrderActionsTypes = ReturnType<typeof orderSuccess> | ReturnType<typeof orderRequest> |
    ReturnType<typeof orderRequestError>
type TSelectedIngredientsActionsTypes = ReturnType<typeof removeBun> | ReturnType<typeof addIngredient>
    | ReturnType<typeof removeIngredient> | ReturnType<typeof addBun> | ReturnType<typeof setIngredients>

export const store = configureStore({reducer: rootReducer, middleware: [thunk], devTools: true});

export type TStore = typeof store
const action = createAction('REQUEST')
export type TApplicationActions = ReturnType<typeof action>

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
    >;

export type TDispatch = Dispatch<TApplicationActions>

