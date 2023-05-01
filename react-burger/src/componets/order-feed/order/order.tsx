import {ICurrentOrder} from "../../../utils/prop-types-constants";

import styles from './order.module.scss'
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";
import {calculateTotalPriceOrder, findIngredients, replaceBun, replaceStatus} from "../../../utils/utils";
import ListIcon from "./list-icon/list/list-icon";
import {FormattedDate, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useMemo} from "react";
import {Link, useLocation} from "react-router-dom";

interface IOrder {
    order: ICurrentOrder
    status?: boolean
    link: string
}



const Order = ({order, link, status = false}: IOrder) => {

    const location = useLocation()

    const {ingredientsSelector} = useSelector()
    const {sauces, mains, buns} = ingredientsSelector.types

    const orderIngredients = useMemo(() =>
            findIngredients(order.ingredients, [...sauces, ...mains, ...buns]),
        [order.ingredients, sauces, mains, buns])

    const orderIngredientsShow = useMemo(() =>
        replaceBun(orderIngredients), [orderIngredients])

    const statusRu = useMemo(() => replaceStatus(order.status), [order.status])

    const totalPrice = useMemo(() => calculateTotalPriceOrder(orderIngredients), [orderIngredients])

    return (
        <Link className={styles.link} to={`${link}/${order.number}`}
              state={{background: location}}>
        <section className={`${styles.wrapper}`}>
            <div className={`p-6 ${styles.header}`}>
                <p className={`text text_type_digits-default`}>{`#${order.number}`}</p>

                <FormattedDate className={`text text_type_main-small text_color_inactive`}
                               date={new Date(order.createdAt)}/>
            </div>

            <p className={`p-6 text text_type_main-medium`}>{order.name}</p>
            {status ?  (<p className={`pl-6 ${order.status === 'done' ? styles.status_done :
                order.status === 'cancel' ? styles.status_cancel : styles.status_cook}`}>{statusRu}</p>): null}
            <div className={`p-6 ${styles.footer}`}>
                <ListIcon ingredients={orderIngredientsShow}/>
                <div className={styles.price}>
                    <p className='text text_type_digits-default'>{totalPrice}</p>
                <CurrencyIcon type="primary"/>
                </div>
            </div>
        </section>
        </Link>
    );
};

export default Order;

