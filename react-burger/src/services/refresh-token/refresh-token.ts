import {request} from "../../utils/utils";
import {setCookie} from "../../utils/cookie";

export const refreshTokens = async (url:string, token:string) => {
    await request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, body: JSON.stringify({token})
    }).then(data => {
        setCookie('auth', data.successToken)
        setCookie('token', data.refreshToken)
    }).then(err => Promise.reject(err))
}