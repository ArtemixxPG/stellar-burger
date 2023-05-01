import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IError, IOrderList} from "../../utils/prop-types-constants";
import {WebsocketStatus} from "../../utils/constants";


interface IOrderListState {
    ordersList: IOrderList,
    error: IError,
    status: WebsocketStatus
}

export const orderList: IOrderList = {
    orders: [],
    total: 0,
    totalToday: 0
}

export const initialState: IOrderListState = {
    ordersList: orderList,
    error: {
        message: '',
        hasError: false
    },
    status: WebsocketStatus.OFFLINE
}

const orderListSlice = createSlice({
    name: 'order-list',
    initialState,
    reducers: {
        orderListConnect(state, action: PayloadAction<string>){
            state.status = WebsocketStatus.ONLINE
        },
        orderListDisconnect(state){
            state.status = WebsocketStatus.OFFLINE
        },
        orderListConnecting(state) {
            state.error = initialState.error
            state.status = WebsocketStatus.CONNECTING
        },
        orderListOpen(state) {
            state.error = initialState.error
            state.status = WebsocketStatus.ONLINE
        },
        orderListClose(state){
          state.error = initialState.error
          state.status = WebsocketStatus.OFFLINE
        },
        orderListMessage(state, action: PayloadAction<IOrderList>) {
            state.error = initialState.error
            state.ordersList = action.payload
            state.status = WebsocketStatus.ONLINE
        },
        orderListError(state, action: PayloadAction<string>) {
            state.error = {
                message: action.payload,
                hasError: true
            }
        }
    }
})

export const {orderListConnect, orderListDisconnect, orderListConnecting, orderListOpen, orderListClose, orderListMessage, orderListError} = orderListSlice.actions
export const orderListReducer = orderListSlice.reducer

export type TOrderListActionTypes = ReturnType<typeof orderListConnecting> | ReturnType<typeof orderListOpen> |
    ReturnType<typeof orderListClose> | ReturnType<typeof orderListMessage> |  ReturnType<typeof orderListError> |
    ReturnType<typeof orderListConnect> |  ReturnType<typeof orderListDisconnect>