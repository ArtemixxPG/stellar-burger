import styles from './orders-status.module.scss'


interface IOrderStatus{
    header: string;
    firstOrders?: Array<string>
    secondOrders?: Array<string>
    color?: string
}

const OrdersStatus = ({header, firstOrders, secondOrders, color}:IOrderStatus) => {

    const firstShow = firstOrders?.map(el => <li key={el} className={styles.listItem}>{el}</li>)
    const secondShow = secondOrders?.map(el => <li key={el} className={styles.listItem}>{el}</li>)

    return (
        <section className={styles.wrapper}>
            <h2 className={`pb-6 text text_type_main-medium ${styles.header}`}>{header}</h2>

            <div style={{color}} className={`text text_type_digits-default ${styles.listArea}`}>
                <ul className={styles.list}>
                {firstShow}
                </ul>
                <ul className={styles.list}>
                {secondShow}
                </ul>
            </div>

        </section>
    );
};

export default OrdersStatus;