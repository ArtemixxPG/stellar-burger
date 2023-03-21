import {TIngredient} from "../../../utils/prop-types-constants";

import styles from './order.module.scss'

interface IOrder {
    ingredients: Array<TIngredient>
}

const orderNumber = '#26255'
const orderName = 'Order Name'

const Order = ({ingredients}: IOrder) => {
    return (
        <section className={styles.wrapper}>
            <p>{orderNumber}</p>
            <p>{orderName}</p>
        </section>
    );
};

export default Order;

