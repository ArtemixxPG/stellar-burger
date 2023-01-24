import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import Modal from "../modal/modal";
import ModalContentOrderComplete from "../modal-content/modal-content-order-complete/modal-content-order-complete";
import {hashCode, summaryOrder} from "../../utils/utils";

import styles from './burger-constructor.module.scss'
import PropTypes from "prop-types";
import {IngredientPropTypes} from "../../utils/prop-types-constants";
import {useIngredients} from "../../custom-hooks/use-ingredients";
import usePost from "../../custom-hooks/use-post";
import {URL_POST} from "../../utils/URL";


const BurgerConstructor = (props) => {

    const {selectedIngredients, dispatchSelectedIngredients} =  useIngredients()

    const [open, setOpen] = useState(false)

    const [result, setData, setSending] = usePost(null, URL_POST)
    const [orderSum, setOrderSum] = useState(0)


    const constructor = selectedIngredients.stuff.map((item) => {

            if (selectedIngredients.stuff.length!==0) {
                return (
                    <section key={hashCode(item.name)} className={styles.constructorItem}>
                        <DragIcon type="primary"/>
                        <ConstructorElement text={item.name} thumbnail={item.image_mobile} price={item.price}/>
                    </section>
                )
            }
    })

    useEffect(() => {
        let result = summaryOrder(selectedIngredients)
        setData(result.listIds)
        setOrderSum(result.sum)
    }, [JSON.stringify(selectedIngredients.bun), JSON.stringify(selectedIngredients.stuff)])

    const handleOpenModal = () => {
        setSending(true)
        setOpen(true)
    }

    return (
        <div className={styles.constructorContainer}>
            <div className={styles.constructorArea}>
                <div className={styles.ban}>
                    <ConstructorElement type='top' isLocked={true} text={`${selectedIngredients.bun.name} (верх)`}
                                        thumbnail={selectedIngredients.bun.image_mobile}
                                        price={selectedIngredients.bun.price}/>
                </div>
                <div className={styles.constructorList}>
                    <div className={styles.constructorList_container}>
                        {constructor}
                    </div>
                </div>
                <div className={styles.ban}>
                    <ConstructorElement type='bottom' isLocked={true} text={`${selectedIngredients.bun.name} (низ)`}
                                        thumbnail={selectedIngredients.bun.image_mobile}
                                        price={selectedIngredients.bun.price}/>
                </div>
            </div>
            <div className={styles.constructorBottom}>
                <div className={styles.price}>
                    <span className={`text text_type_digits-medium`}>{orderSum}</span>
                    <CurrencyIcon type={"primary"}/>
                </div>
                <Button onClick={handleOpenModal} htmlType={'button'} type='primary' size='large'>Оформить
                    заказ</Button>
            </div>
            {open && (<Modal open={open} setOpen={setOpen}>
                <ModalContentOrderComplete order={result.message}/>
            </Modal>)}
        </div>
    );
};

BurgerConstructor.propTypes = {
    mains: PropTypes.arrayOf(IngredientPropTypes),

}

export default BurgerConstructor;