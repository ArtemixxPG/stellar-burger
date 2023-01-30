import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import Modal from "../modal/modal";
import ModalContentOrderComplete from "../modal-content/modal-content-order-complete/modal-content-order-complete";
import {hashCode, summaryOrder} from "../../utils/utils";

import styles from './burger-constructor.module.scss'

import {useDispatch, useSelector} from "react-redux";
import Skeleton from "../skeleton/burger-constructor-skeleton/skeleton";
import {useDrop} from "react-dnd";
import {ADD_BUN, ADD_INGREDIENT, SET_TOTAL_PRICE} from "../../services/actions/selected-ingedients-actions";
import BurgerConstructorItem from "./burger-cunstructor-item/burger-constructor-item";
import {CLEAR_ORDER, orderPost} from "../../services/actions/order-actions";


const BurgerConstructor = () => {


     const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    const [failContentModal, setFailContentModal] = useState(false)

    const {buns, sauces, mains} = useSelector (store => store.ingredients.types)


    const {selectedBun, selectedIngredients, totalPrice} = useSelector(store => store.selectedIngredients)
    const {order, name} = useSelector(store => store.order)

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }), drop(id){
            setIngredient(id)
        }
    });



     useEffect(()=>{
         dispatch({type: SET_TOTAL_PRICE})
     }, [selectedBun, selectedIngredients, dispatch])

     const setIngredient = (id) => {
         const ingredients = [...buns, ...sauces, ...mains]
         const ingredient = ingredients.find(item=> item._id === id.id)
         ingredient.type === 'bun' ? dispatch({type: ADD_BUN, payload: ingredient})
             : dispatch({type: ADD_INGREDIENT, payload: {id: hashCode(ingredient._id), ...ingredient}})
     }

    const constructor = selectedIngredients.map((item, index) => {
                return (
                    <section key={item.id}>

                       <BurgerConstructorItem id={item.id} name={item.name}
                                              index={index}
                                              image={item.image_mobile}
                                              price={item.price}/>
                       </section>
                )
    })


    const handleOpenModal = () => {
        setOpen(true)
        selectedBun && selectedIngredients.length > 0
        && selectedIngredients.filter(item => item.type === 'main').length > 0
        && selectedIngredients.filter(item => item.type === 'sauce').length > 0?
        completeBurger() :
            setFailContentModal(true)
    }

    const completeBurger = () => {
        dispatch(orderPost({ingredients: [...selectedIngredients.map(item => item._id), selectedBun._id]}))
        setFailContentModal(false)
    }

    const closeModal = () => {
         setOpen(false)
        dispatch({type: CLEAR_ORDER})
    }

    return (
        <div className={styles.constructorContainer}>
            <div ref={dropTarget} className={`${styles.constructorArea} ${isHover? styles.constructorArea_isHover : ''}`}>


                    <div className={styles.ban}>
                        {selectedBun ?
                            (<ConstructorElement type='top' isLocked={true} text={`${selectedBun.name} (верх)`}
                                            thumbnail={selectedBun.image_mobile}
                                            price={selectedBun.price}/>) :
                            (<Skeleton type='top' name='Выбирете булку!'/>)
                        }
                    </div>
                    <div className={styles.constructorList}>
                            {selectedIngredients.length > 0 ?
                                (<div className={styles.constructorList_container}>
                                    {constructor}</div> )
                                    : (<div className={styles.constructorList_skeleton}><Skeleton name='Выбирете ингредиент!'/></div>)
                            }
                    </div>
                    <div className={styles.ban}>
                        {selectedBun ?
                            (<ConstructorElement type='bottom' isLocked={true} text={`${selectedBun.name} (низ)`}
                                                 thumbnail={selectedBun.image_mobile}
                                                 price={selectedBun.price}/>):(<Skeleton type='bottom' name='Выбирете булку!'/>)}
                    </div>
                </div>
                <div className={styles.constructorBottom}>
                    <div className={styles.price}>
                        <span className={`text text_type_digits-medium`}>{totalPrice}</span>
                        <CurrencyIcon type={"primary"}/>
                    </div>
                    <Button onClick={handleOpenModal}  htmlType={'button'} type='primary' size='large'>Оформить
                        заказ</Button>
                </div>
                {open && (<Modal  close={closeModal}>
                    <ModalContentOrderComplete fail={failContentModal} header={name} order={order}/>
                </Modal>)}
            </div>
            );
            };


            export default BurgerConstructor;