import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { ActionCreator } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import {
    ingredientsReducer,
    TIngredientsActionsTypes,
} from "../ingredients-reducer";
import {orderReducer, TOrderActionsTypes} from "../order-reducer";
import {
    selectedIngredientsReducer,  TSelectedIngredientsActionsTypes
} from "../selected-ingedients-reducers";
import {
    TUserActionsTypes,
    userReducer,
} from "../user-reducer";
import {
    orderListClose,
    orderListConnect,
    orderListConnecting,
    orderListDisconnect, orderListError, orderListMessage,
    orderListOpen,
    orderListReducer, TOrderListActionTypes
} from "../list-order-reducer";
import {createSocket, TWsActions} from "../../middleware/socket";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    selectedIngredients: selectedIngredientsReducer,
    user: userReducer,
    ordersList: orderListReducer
})

const wsActions : TWsActions = {
    wsConnect: orderListConnect,
    wsDisconnect: orderListDisconnect,
    wsConnecting: orderListConnecting,
    wsOpen: orderListOpen,
    wsClose:orderListClose,
    wsError:orderListError,
    wsMessage:orderListMessage,
}


export type RootState = ReturnType<typeof rootReducer>

const socket = createSocket(wsActions)

export const store = configureStore({reducer: rootReducer, middleware: [thunk, socket], devTools: true});

export type TStore = typeof store
export type TActions = TUserActionsTypes | TOrderActionsTypes | TSelectedIngredientsActionsTypes |
    TIngredientsActionsTypes | TOrderListActionTypes



type TApplicationActions = TActions


export type AppThunk<TReturn = void> =
    ActionCreator<ThunkAction<TReturn,  RootState, unknown, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch | AppThunk;


export type TDispatchAll = () => AppDispatch | AppThunk
