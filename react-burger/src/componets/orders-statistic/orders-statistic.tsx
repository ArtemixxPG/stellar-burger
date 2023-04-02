import {IStatisticOrders} from "../../utils/prop-types-constants";

import styles from './orders-statistic.module.scss'
import OrdersStatus from "./orders-status/orders-status";
import Statistic from "./statistic/statistic";

interface IOrdersStatistic{
    ordersDone?: IStatisticOrders
    ordersWork?: IStatisticOrders
    totalAll: number
    totalToday: number
}

const OrdersStatistic = ({ordersDone, ordersWork, totalAll, totalToday}:IOrdersStatistic) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
            <div className={`pb-15 ${styles.lists}`}>
                <OrdersStatus color='#00cccc' header={'Готовы:'} firstOrders={ordersDone?.firstOrders}
                              secondOrders={ordersDone?.secondOrders}/>
                <OrdersStatus header={'В работе:'} firstOrders={ordersWork?.firstOrders}
                              secondOrders={ordersWork?.secondOrders}/>
            </div>
            <div className={styles.statistic}>
            <Statistic  header={'Выполнено за всё время:'} total={totalAll}/>
            <Statistic header={'Выполнено за сегодня:'} total={totalToday}/>
            </div>
                </div>
        </section>
    );
};

export default OrdersStatistic;