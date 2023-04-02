import React from 'react';
import useSocket from "../../custom-hooks/socket/use-socket";
import {getCookie} from "../../utils/cookie";

import styles from './orders-feed-user-page.module.scss';
import UserSidebar from "../../componets/user-sidebar/user-sidebar";
import OrdersFeed from "../../componets/order-feed/orders-feed";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import {WebsocketStatus} from "../../utils/constants";
import MainPreloader from "../../componets/preloader/main-preloader/main-preloader";
import {USER_ORDERS} from "../../utils/URL";

const OrdersFeedUserPage = () => {

    const token = getCookie('auth').split(' ')[1]

    useSocket(`?token=${token}`)

    const {ordersListSelector} = useSelector()

    const orders = ordersListSelector.ordersList.orders

    const statusSocket = ordersListSelector.status

    return (
        <>
            {statusSocket === WebsocketStatus.OFFLINE || statusSocket === WebsocketStatus.CONNECTING ? (
                <MainPreloader/>) : (
                <main className={`mt-30 ${styles.wrapper}`}>
                    <section className={`pl-3 ${styles.content}`}>
                        <div className={`mr-15 ${styles.menu}`}>
                            <UserSidebar primaryIndex={1}/>
                        </div>
                        <OrdersFeed link={USER_ORDERS} orderList={orders} status={true}/>
                    </section>
                </main>
            )
            }
        </>
    );
};

export default OrdersFeedUserPage;