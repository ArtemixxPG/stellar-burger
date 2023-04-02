import {IError, IOrder} from "../../utils/prop-types-constants";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IOrderState {
    order: IOrder
    error: IError
    hasLoading: boolean
}

interface IOrderPayload {
    order: {
        number: number
    }
    name: string
}

const initialState: IOrderState = {
    order: {
        order_id: 0,
        name: ''
    },
    error: {
        message: '',
        hasError: false
    },
    hasLoading: false
}





const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        orderSuccess(state, action: PayloadAction<IOrderPayload>){
            state.order.order_id = action.payload.order.number
            state.order.name = action.payload.name
            state.error = initialState.error
            state.hasLoading = false
        },
        orderRequest(state){
            state.error = initialState.error
            state.hasLoading = true
        },
        orderRequestError(state, action: PayloadAction<string>){
            state.error = {
                message: action.payload,
                hasError: true
            }
            state.hasLoading = false
        }
    }
})

export const orderReducer = orderSlice.reducer
export const {orderSuccess, orderRequest, orderRequestError} = orderSlice.actions
export type TOrderActionsTypes = ReturnType<typeof orderSuccess> | ReturnType<typeof orderRequest> |
    ReturnType<typeof orderRequestError>