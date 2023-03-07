import {checkResponse} from "../../utils/utils";
import {NavigateFunction} from "react-router-dom";

type TInput = {
    password?: string
    token?: string
    email?: string
}

type TRequestBody = {
    url: string
    values: TInput
    navigate: NavigateFunction
    path: string
}

export const sentRequest = async ({url, values, navigate, path} : TRequestBody) => {
    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }, body: JSON.stringify(values)
        })
        const json = await checkResponse(response)

        json?.success ? navigate(path) : json.then((err: any) => Promise.reject(err))

    } catch (error) {
        console.log(error)
    }
}