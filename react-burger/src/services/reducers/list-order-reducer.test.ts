import {
    initialState,
    orderList, orderListClose, orderListConnect,
    orderListConnecting, orderListDisconnect, orderListError,
    orderListMessage,
    orderListOpen,
    orderListReducer
} from "./list-order-reducer";
import {IOrderList} from "../../utils/prop-types-constants";
import {WebsocketStatus} from "../../utils/constants";


const data: IOrderList = {
    orders: [
        {
            "ingredients": [
                "60d3463f7034a000269f45e9",
                "60d3463f7034a000269f45e7"
            ],
            "_id": "ishisi13445",
            "name": "order_1",
            "status": "done",
            "number": "1",
            "createdAt": "2021-06-23T20:11:01.403Z",
            "updatedAt": "2021-06-23T20:11:01.406Z"
        },
        {
            "ingredients": [
                "60d3463f7034a000269f45e9"
            ],
            "_id": "",
            "name": "order_3",
            "status": "done",
            "number": "3",
            "createdAt": "2021-06-23T20:13:23.654Z",
            "updatedAt": "2021-06-23T20:13:23.657Z"
        }
    ],
    total: 2,
    totalToday: 2
}

describe('test-list-order-reducer', () => {

        it('test-initial-state', () => {
            expect(orderListReducer(undefined, {type: null})).toEqual(
                initialState
            )
        });

        it('test-success', () => {
            expect(orderListReducer(initialState, orderListMessage(data))).toEqual(
                {
                    ordersList: data,
                    error: {
                        message: '',
                        hasError: false
                    },
                    status: WebsocketStatus.ONLINE
                }
            )
        });

        it('test-connecting', () => {
            expect(orderListReducer(initialState, orderListConnecting())).toEqual(
                {
                    ordersList: orderList,
                    error: {
                        message: '',
                        hasError: false
                    },
                    status: WebsocketStatus.CONNECTING
                }
            )
        });

    it('test-open', () => {
        expect(orderListReducer(initialState, orderListOpen())).toEqual(
            {
                ordersList: orderList,
                error: {
                    message: '',
                    hasError: false
                },
                status: WebsocketStatus.ONLINE
            }
        )
    });

    it('test-offline', () => {
        expect(orderListReducer(initialState, orderListClose())).toEqual(
            {
                ordersList: orderList,
                error: {
                    message: '',
                    hasError: false
                },
                status: WebsocketStatus.OFFLINE
            }
        )
    });

    it('test-connect', () => {
        expect(orderListReducer(initialState, orderListConnect())).toEqual(
            {
                ordersList: orderList,
                error: {
                    message: '',
                    hasError: false
                },
                status: WebsocketStatus.ONLINE
            }
        )
    });

    it('test-disconnect', () => {
        expect(orderListReducer(initialState, orderListDisconnect())).toEqual(
            {
                ordersList: orderList,
                error: {
                    message: '',
                    hasError: false
                },
                status: WebsocketStatus.OFFLINE
            }
        )
    });

        it('test-failure', () => {
            expect(orderListReducer(initialState, orderListError('Error!'))).toEqual(
                {
                    ordersList: orderList,
                    error: {
                        message: 'Error!',
                        hasError: true
                    },
                    status: WebsocketStatus.OFFLINE
                }
            )
        });

    }
)