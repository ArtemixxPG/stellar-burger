import {memo, useMemo} from 'react';
import {calculateTotalPriceOrder, findIngredients, replaceStatus} from "../../../utils/utils";
import {useParams} from "react-router-dom";
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";

import styles from './modal-content-order.module.scss'
import OrderIngredientDetails from "./order-ingredient-details/order-ingredient-details";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";


const ModalContentOrder = () => {

    const {number} = useParams()

    const {ordersListSelector, ingredientsSelector} = useSelector()
    const {buns, sauces, mains} = ingredientsSelector.types


    const order = useMemo(() => ordersListSelector.ordersList.orders.find(order => order.number.toString() === number),
        [ordersListSelector.ordersList])

    const ingredients = useMemo(() =>
            findIngredients(order?.ingredients, [...sauces, ...mains, ...buns]),
        [order?.ingredients, sauces, mains, buns])

    const totalPrice = useMemo(() => calculateTotalPriceOrder(ingredients), [ingredients])

    const accIngredients = useMemo(() => {
        let array: Array<number> = []
        ingredients.forEach((item) => {
            array = [...array, ingredients.filter(el => el?._id === item?._id).length]
        })
        return array
    }, [ingredients])
    const showIngredients = useMemo(() => {
        return [...new Set(ingredients)]
    }, [ingredients])

    const status = useMemo(() => replaceStatus(order?.status), [order])

    const orderIngredients = useMemo(() => showIngredients.map((element, index) => {
        return (
            <OrderIngredientDetails key={index} image={element?.image_mobile} name={element?.name}
                                    value={accIngredients[index]} price={element?.price}/>
        )
    }), [showIngredients, accIngredients])

    return (
        <section className={`${styles.wrapper}`}>
            <div className={`pb-10 ${styles.header}`}>
                <h2 className={`text text_type_main-medium`}>{`#${order?.number}`}</h2>
            </div>
            <div className={`pb-6 ${styles.description}`}>
                <h2 className={`pb-3 text text_type_main-large`}>{order?.name}</h2>
                <h3 style={{color: order?.status === 'done' ? '#00cccc' : order?.status === 'canceled' ? 'red' : 'white'}}
                    className={`pb-15 text text_type_main-small`}>
                    {status}</h3>
                <h2 className={`text text_type_main-large`}>Состав:</h2>
            </div>
            <div className={styles.listArea}>
                <ul className={styles.listArea_list}>
                    {orderIngredients}
                </ul>
            </div>
            <div className={`pb-2 ${styles.footer}`}>
                <FormattedDate className={`text_color_inactive`} date={new Date(order ? order.createdAt : Date.now())}/>
                <div className={styles.price}>
                    <p className={`text text_type_main-small`}>{totalPrice}</p>
                    <CurrencyIcon type='primary'/>
                </div>
            </div>
        </section>
    );
};

export default memo(ModalContentOrder);