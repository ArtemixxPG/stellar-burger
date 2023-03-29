import {useEffect} from 'react';
import {getCookie} from "../../utils/cookie";
import {URL_GET_TOKEN, URL_GET_USER} from "../../utils/URL";
import {refreshTokens} from "../../services/refresh-token/refresh-token";
import {userRefresh as successUserAction} from "../../services/reducers/user-reducer";
import {requestUser} from "../../services/actions/user-actions";
import {useDispatch} from "../redux/dipatch/use-dispatch";


const useAuth = () => {

    const dispatch = useDispatch();

    const token = getCookie('token');
    const auth = getCookie('auth');


    useEffect(() => {

        if (auth) {
            dispatch(requestUser({successUserAction, url: URL_GET_USER,  token: auth}))

        } else {
           refreshTokens(URL_GET_TOKEN,  token).then()
        }
    }, [auth, token, dispatch]);


};

export default useAuth;