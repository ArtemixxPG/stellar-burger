import styles from './order-details.module.scss'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Icon from "../icon/icon";

interface IOrderIngredientDetails{
    image?:string
    name?:string
    value?: number
    price?:number
}
const OrderDetails = ({image, name, value, price}:IOrderIngredientDetails) => {
    return (
        <section className={`pr-6 ${styles.wrapper}`}>
            <Icon url={image}/>
            <p className={`text_type_main-medium ${styles.name}`}>{name}</p>
            <p className={`text_type_main-medium `}>{`${value} x ${price}`}</p>
            <CurrencyIcon type='primary'/>
        </section>
    );
};

export default OrderDetails;