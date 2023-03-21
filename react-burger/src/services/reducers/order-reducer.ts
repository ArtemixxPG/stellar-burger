import {
    RESET_ORDER,
    FAILURE_REQUEST_ORDER,
    REQUEST_ORDER,
    SUCCESS_REQUEST_ORDER,
    requestOrder, errorOrder
} from "../actions/order-actions";
import {IError, IOrder} from "../../utils/prop-types-constants";
import {CaseReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

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


const successOrder: CaseReducer<IOrderState, PayloadAction<IOrderPayload>> = (state, action) =>{
    state.order.order_id = action.payload.order.number
    state.order.name = action.payload.name
    state.error = initialState.error
    state.hasLoading = false
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        successOrder
    },
    extraReducers: (builder) => {
        builder.addCase(requestOrder, (state)=>{
            return {
                ...state,
                error: initialState.error,
                hasLoading: true
            }
        })
        builder.addCase(errorOrder, (state, action) => {
            return {
                ...state,
                error: {
                    message: action.payload,
                    hasError: true
                },
                hasLoading: false
            }
        })
    }
})

export const orderReducer = orderSlice.reducer
export const orderActions = orderSlice.actions