import {useDispatch} from "../redux/dipatch/use-dispatch";
import {useEffect} from "react";
import {orderListConnect, orderListDisconnect} from "../../services/reducers/list-order-reducer";
import {BASE_SOCKET_URL} from "../../utils/URL";


const useSocket = (endpoint: string) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(orderListConnect(BASE_SOCKET_URL + endpoint))
        return () => {
            dispatch(orderListDisconnect())
        }
    }, [dispatch])
};

export default useSocket;