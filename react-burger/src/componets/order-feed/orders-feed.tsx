import styles from './order-feed.module.scss'
import {ICurrentOrder} from "../../utils/prop-types-constants";
import Order from "./order/order";

interface IOrders {
    orderList: Array<ICurrentOrder>
    status?: boolean
    link: string
}
const OrdersFeed = ({orderList, link, status = false}:IOrders) => {

    const orders = orderList.map((item) => {
        return (<Order key={item.number} link={link} order={item} status={status}/>)
    })

    return (
        <section className={styles.wrapper}>
            <div className={styles.group}>
                <div className={`pr-2 ${styles.group_list}`}>
            {orders}
                </div>
            </div>
        </section>
    );
};

export default OrdersFeed;