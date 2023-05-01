import {

    initialState, orderRequest, orderRequestError, orderSuccess
} from "./order-reducer";
import {orderReducer} from "./order-reducer";

const data = {
    "name": "Краторный метеоритный бургер",
    "order": {
        "number": 6257
    }
}


describe('test-order-reducer', () => {


        it('test-initial-state', () => {
            expect(orderReducer(undefined, {type: null})).toEqual(
                initialState
            )
        });

        it('test-success', () => {
            expect(orderReducer(initialState, orderSuccess(data))).toEqual(
                {
                    order: {
                        order_id: 6257,
                        name:  "Краторный метеоритный бургер"
                    },
                    error: {
                        message: '',
                        hasError: false
                    },
                    hasLoading: false
                }
            )
        });

        it('test-request', () => {
            expect(orderReducer(initialState, orderRequest())).toEqual(
                {
                    order: {
                        order_id: 0,
                        name: ''
                    },
                    error: {
                        message: '',
                        hasError: false
                    },
                    hasLoading: true
                }
            )
        });

        it('test-failure', () => {
            expect(orderReducer(initialState, orderRequestError('Error!'))).toEqual(
                {
                    order: {
                        order_id: 0,
                        name: ''
                    },
                    error: {

                        message: 'Error!',
                        hasError: true
                    },
                    hasLoading: false
                }
            )
        });

    }
)