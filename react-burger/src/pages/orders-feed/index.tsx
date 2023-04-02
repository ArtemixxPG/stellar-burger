import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import useSocket from "../../custom-hooks/socket/use-socket";
import OrderFeed from "../../componets/order-feed/orders-feed";
import {memo, useMemo} from "react";

import styles from './orders-feed-page.module.scss'
import {ORDERS_ALL, SOCKET_ORDER_ALL_URL} from "../../utils/URL";
import {IStatisticOrders} from "../../utils/prop-types-constants";
import OrdersStatistic from "../../componets/orders-statistic/orders-statistic";
import MainPreloader from "../../componets/preloader/main-preloader/main-preloader";

const ORDERS_SHOW = 6

const OrderFeedPage = () => {
    const {ordersListSelector} = useSelector()
    const orderList = ordersListSelector.ordersList.orders
    const totalAll = ordersListSelector.ordersList.total
    const totalDay = ordersListSelector.ordersList.totalToday
    useSocket(SOCKET_ORDER_ALL_URL)

    const ordersDoneNames = useMemo(() => orderList?.filter(el => el.status === 'done').map(el => el.number), [orderList])
    const ordersCookNames = useMemo(() => orderList?.filter(el => el.status === 'cook').map(el => el.number), [orderList])

    const ordersDone: IStatisticOrders = {
        firstOrders: ordersDoneNames.slice(0, ORDERS_SHOW),
        secondOrders: ordersDoneNames.slice(ORDERS_SHOW, 2 * ORDERS_SHOW)
    }
    const ordersCook: IStatisticOrders = {
        firstOrders: ordersCookNames.slice(0, ORDERS_SHOW),
        secondOrders: ordersCookNames.slice(ORDERS_SHOW, 2 * ORDERS_SHOW)
    }


    return (
        <>
            {orderList.length === 0 ? (
                    <MainPreloader/>)
                : (
                    <main className={`text text_type_main-large ${styles.wrapper}`}>

                        <section className={styles.container}>
                            <h2 className={styles.header}>Лента заказов</h2>

                            <OrderFeed link={ORDERS_ALL} orderList={orderList}/>
                            <OrdersStatistic
                                ordersDone={ordersDone} ordersWork={ordersCook}
                                totalAll={totalAll}
                                totalToday={totalDay}/>
                        </section>
                    </main>
                )}
        </>
    );
};

export default memo(OrderFeedPage);