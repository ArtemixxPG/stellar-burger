import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getCookie, setCookie} from "../../utils/cookie";
import {query, queryGET, SUCCESS_REFRESH_TOKEN, SUCCESS_REFRESH_USER} from "../../services/actions/user-actions";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";



const useAuth = () => {

    const dispatch = useDispatch();

    const token = getCookie('token');
    const auth = getCookie('auth');



    useEffect(() => {

        if (auth) {
            //@ts-ignore
            dispatch(queryGET(SUCCESS_REFRESH_USER, URL_GET_USER, auth))

        } else {
            //@ts-ignore
            dispatch(query(SUCCESS_REFRESH_TOKEN, URL_GET_TOKEN, {token: token}))
        }
    }, [auth, token]);


};

export default useAuth;