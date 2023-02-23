import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCookie, setCookie} from "../../utils/cookie";
import {query, queryGET, SUCCESS_REFRESH_TOKEN, SUCCESS_REFRESH_USER} from "../../services/actions/user-actions";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";
import {useNavigate} from "react-router-dom";

const useAuth = () => {

    const dispatch = useDispatch();

    const token = getCookie('token');
    const auth = getCookie('auth');

    const [login, setLogin] = useState(false);

    useEffect(() => {

        if (auth) {
            dispatch(queryGET(SUCCESS_REFRESH_USER, URL_GET_USER, auth))

        } else {
            dispatch(query(SUCCESS_REFRESH_TOKEN, URL_GET_TOKEN, {token: token}))
        }
    }, [auth, token]);


};

export default useAuth;