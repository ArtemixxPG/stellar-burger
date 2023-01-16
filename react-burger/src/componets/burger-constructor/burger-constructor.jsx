import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import Modal from "../modal/modal";
import ModalContentOrderComplete from "../modal-content/modal-content-order-complete/modal-content-order-complete";
import {hashCode} from "../../utils/utils";

import styles from './burger-constructor.module.scss'
import PropTypes from "prop-types";

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    fat:PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v:PropTypes.number.isRequired
});

const BurgerConstructor = (props) => {

    const [open, setOpen] = useState(false)


    const constructor =  props.mains.map((item, index)=>{
        return (
        <section key={hashCode(item.name)} className={styles.constructorItem}>
            <DragIcon type="primary" />
            <ConstructorElement text={item.name} thumbnail={item.image_mobile} price={item.price}/>
        </section>
        )
    })



    return (
        <div className={styles.constructorContainer}>
            <div className={styles.constructorArea}>
                <div className={styles.ban}>
            <ConstructorElement type='top' isLocked={true} text='Краторная булка N-200i (верх)' thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'} price={200}/>
                </div>
                <div className={styles.constructorList}>
                    <div className={styles.constructorList_container}>
            {constructor}
                </div>
                </div>
                <div className={styles.ban}>
            <ConstructorElement type='bottom' isLocked={true} text='Краторная булка N-200i (низ)' thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'} price={200}/>
                </div>
            </div>
            <div className={styles.constructorBottom}>
                <div className={styles.price}>
                <span className={`text text_type_digits-medium`}>1275</span>
                <CurrencyIcon type={"primary"}/>
                </div>
                <Button onClick={()=>setOpen(true)} htmlType={'button'} type='primary' size='large'>Оформить заказ</Button>
            </div>
            {open && (<Modal header = ' ' open={open} setOpen={setOpen}>
                <ModalContentOrderComplete/>
            </Modal>)}
        </div>
    );
};

BurgerConstructor.propTypes = {
    mains: PropTypes.arrayOf(ingredientPropTypes),

}

export default BurgerConstructor;