import styles from './modal-content-order-complete.module.scss'
import img from '../../../images/done.png'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {TStore} from "../../../services/reducers/root/root-reducer";
import {TIngredient} from "../../../utils/prop-types-constants";
import {orderSelector, selectedIngredientsSelector} from "../../../custom-hooks/redux/selectors/use-selectors";

const ModalContentOrderComplete = () => {

    const [fail, setFailContentModal] = useState(false)
    const {selectedBun, selectedIngredients} = selectedIngredientsSelector
    const hasLoading = orderSelector.hasLoading
    const order = orderSelector.order.order_id
    const name = orderSelector.order.name

    useEffect(
        () => {
            selectedBun && selectedIngredients.length > 0
            && selectedIngredients.filter((item:TIngredient) => item.type === 'main').length > 0
            && selectedIngredients.filter((item:TIngredient) => item.type === 'sauce').length > 0 ?
                setFailContentModal(false) :
                setFailContentModal(true)
        },
        [selectedBun, selectedIngredients]
    );


    return (
        <>
            {fail ? (<section>
                <div className={`p-25 ${styles.fail}`}>
                    <span className='text text_type_main-large'>* *</span>
                    <span className='text text_type_main-large'> | </span>
                    <span className='pb-8 text text_type_main-large'>  ⏜  </span>
                    <span className={`text text_type_main-large ${styles.text}`}> Для того, чтобы мы отправили заказ на орбитальную станцию, в бургере должны быть
                    БУЛКА, СОУС и НАЧИНКА (добавьте в бургер хотя бы по одному ингредиенту из каждой группы)!
                    Мы ещё терпим веганов, но традиционную форму бургера нарушать нельзя! </span>
                </div>
            </section>) : (
                <section className={`pl-25 pr-25 ${styles.orderContent}`}>
                    { hasLoading? (<div className={`pt-9 pb-15 ${styles.id}`}>
                            <span className='pb-8 text text_type_digits-large'>#####</span>
                            <span className='text text_type_main-default'>Ожидайте!</span>
                            <span className={`text text_type_main-default pt-8 ${styles.header}`}>Ваш заказ оформляется!</span>
                        </div>) :
                        (<div className={`pt-9 pb-15 ${styles.id}`}>
                            <span className='pb-8 text text_type_digits-large'>{order}</span>
                            <span className='text text_type_main-default'>Индификатор заказа</span>
                            <span className={`text text_type_main-default pt-8 ${styles.header}`}>{name}</span>
                        </div>)
                    }
                    <div className={styles.done}>
                        <img src={img}/>
                    </div>
                    <div className={`pt-15 pb-30 ${styles.otherInfo}`}>
                        <span className='pb-2 text text_type_main-small'>Ваш заказ начали готовить</span>
                        <span className='text text_type_main-small text_color_inactive'>Дождитесь ожидания готовности на орбитальной станции</span>
                    </div>
                </section>)}
        </>
    );

};


export default ModalContentOrderComplete;