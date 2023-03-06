import {URL_SENT_EMAIL} from "../../utils/URL";
import {checkResponse} from "../../utils/utils";

//@ts-ignore
export const sentRequest = async (url, body, navigate, path) => {
    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }, body: JSON.stringify(body)
        })
        const json = await checkResponse(response)
        //@ts-ignore
        json?.success ? navigate(path) : json.then(err => Promise.reject(err))

    } catch (error) {
        console.log(error)
    }
}