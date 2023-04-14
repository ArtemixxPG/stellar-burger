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

export const sentRequest = async ({url, values, navigate, path}: TRequestBody) => {
    try {

        const response: Response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }, body: JSON.stringify(values)
        })
        if (response.ok) {
            const json = await response.json()
            json && json?.success ? navigate(path) : json.then((err: Error) => Promise.reject(err))
        } else {

        }


    } catch (error: any) {
        throw new Error(error.message as string)
    }
}