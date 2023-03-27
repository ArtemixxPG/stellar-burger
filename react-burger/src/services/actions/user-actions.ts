import {request} from "../../utils/utils";
import {AppThunk, TDispatch} from "../reducers/root/root-reducer";
import {TUserActions, userRequest, userRequestError} from "../reducers/user-reducer";

type TUserResponseOptions = {
    successUserAction: TUserActions
    url: string
    body? : any,
    token? : string
}


export const requestUser:AppThunk = ( {successUserAction, url, body, token}: TUserResponseOptions) => async (dispatch: TDispatch) => {

    dispatch(userRequest())

    await request(url, {
        method: token ? (body ? 'PATCH' : 'GET') : 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(body)
    })
        .then(data => dispatch(successUserAction(data)))
        .catch(err => dispatch(userRequestError(err.message)))

}

export const queryGET = ({successUserAction, url, token}:TUserResponseOptions) => async (dispatch: (arg: { type: string; payload?: any; }) => void) => {

    dispatch(userRequest())

    await request(url, {
        method:  'GET',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }
    })
        .then(data => dispatch(successUserAction(data)))
        .catch(err => dispatch(userRequestError(err.message)))

}