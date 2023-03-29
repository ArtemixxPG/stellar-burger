import {request} from "../../utils/utils";
import {AppThunk, AppDispatch} from "../reducers/root/root-reducer";
import {TUserActions, userRequest, userRequestError} from "../reducers/user-reducer";

type TUserResponseOptions = {
    successUserAction: TUserActions
    url: string
    values? : any,
    token? : string
}


export const requestUser:AppThunk = ( {successUserAction, url, values, token}: TUserResponseOptions) =>
    async (dispatch: AppDispatch) => {

    dispatch(userRequest())

    await request(url, {
        method: token ? (url.includes('logout') ? 'POST' : (values ? 'PATCH' : 'GET')) : 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json;charset=utf-8',
        }, body: JSON.stringify(values)
    })
        .then(data => dispatch(successUserAction(data)))
        .catch(err => dispatch(userRequestError(err.message)))

}
