import {ActionCreatorWithoutPayload, ActionCreatorWithPayload, Middleware} from "@reduxjs/toolkit";
import {RootState} from "../reducers/root/root-reducer";

export type TWsActions = {
    wsConnect: ActionCreatorWithPayload<string>
    wsConnecting: ActionCreatorWithoutPayload
    wsDisconnect: ActionCreatorWithoutPayload
    wsSendMessage?: ActionCreatorWithPayload<any>
    wsOpen: ActionCreatorWithoutPayload
    wsClose: ActionCreatorWithoutPayload
    wsMessage: ActionCreatorWithPayload<any>
    wsError: ActionCreatorWithPayload<string>
}


export const createSocket = (wsActions:TWsActions): Middleware<{}, RootState> => {
    return store => {
        let socket: WebSocket | null = null

        return next => action => {
            const {dispatch} = store
            const {wsConnect, wsConnecting, wsOpen, wsClose, wsMessage, wsSendMessage, wsError, wsDisconnect} = wsActions
            if(wsConnect.match(action)) {
                socket = new WebSocket(action.payload)
                dispatch(wsConnecting())
            }
            if(socket){
                socket.onopen = event => dispatch(wsOpen())
                socket.onclose = event => dispatch(wsClose())
                socket.onmessage = event => {
                    const data = JSON.parse(event.data)
                    const {success, ...restParsedData} = data
                    dispatch(wsMessage(restParsedData))
                }

                socket.onerror = event => dispatch(wsError(`Error: ${event}`))

                if(wsDisconnect.match(action)) {
                    socket.close()
                    dispatch(wsClose())
                }

            }

            next(action)
        }
    }
}
