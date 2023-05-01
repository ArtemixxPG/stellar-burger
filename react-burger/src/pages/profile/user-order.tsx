import React from 'react';
import {USER_ORDERS} from "../../utils/URL";
import OrdersFeed from "../../componets/order-feed/orders-feed";
import {getCookie} from "../../utils/cookie";
import useSocket from "../../custom-hooks/socket/use-socket";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import {WebsocketStatus} from "../../utils/constants";
import MainPreloader from "../../componets/preloader/main-preloader/main-preloader";

const UserOrder = () => {

    const token = getCookie('auth').split(' ')[1]

    useSocket(`?token=${token}`)

    const {ordersListSelector} = useSelector()

    const orders = ordersListSelector.ordersList.orders.slice().reverse()

    const statusSocket = ordersListSelector.status

    return (
        <>
            {statusSocket === WebsocketStatus.OFFLINE || statusSocket === WebsocketStatus.CONNECTING ? (<MainPreloader/>) :
                (<OrdersFeed link={USER_ORDERS} orderList={orders} status={true}/>)
            }
        </>
    );
};

export default UserOrder;