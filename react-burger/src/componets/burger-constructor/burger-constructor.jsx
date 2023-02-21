import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useCallback, useMemo, useState} from "react";
import Modal from "../modal/modal";
import ModalContentOrderComplete from "../modal-content/modal-content-order-complete/modal-content-order-complete";
import {calculateTotalPrice, hashCode, isUser} from "../../utils/utils";

import styles from './burger-constructor.module.scss'

import {useDispatch, useSelector} from "react-redux";
import Skeleton from "../skeleton/burger-constructor-skeleton/skeleton";
import {useDrop} from "react-dnd";
import {ADD_BUN, ADD_INGREDIENT} from "../../services/actions/selected-ingedients-actions";
import BurgerConstructorItem from "./burger-cunstructor-item/burger-constructor-item";
import {RESET_ORDER, orderPost} from "../../services/actions/order-actions";
import {INGREDIENT_TYPES} from "../../utils/constants";
import OrderPreloader from "../preloader/order-preloader/order-preloader";
import {Link, useLocation, useNavigate} from "react-router-dom";


const BurgerConstructor = () => {

    const location = useLocation();

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()
    const user = useSelector(store => store.user.user)
    const navigate = useNavigate()

    const {buns, sauces, mains} = useSelector(store => store.ingredients.types)
    const {hasLoading, selectedBun, selectedIngredients} = useSelector(store => store.selectedIngredients)



    const resetOrder = () => {
        dispatch({type: RESET_ORDER})
    }

    const [{isHover}, dropTarget] = useDrop({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }), drop(id) {
            setIngredient(id)
        }
    });





    const setIngredient = useCallback( (id) => {
        const ingredients = [...buns, ...sauces, ...mains]
        const ingredient = ingredients.find(item => item._id === id.id)
        ingredient.type === INGREDIENT_TYPES.BUNS ? dispatch({type: ADD_BUN, payload: ingredient})
            : dispatch({type: ADD_INGREDIENT, payload: {id: hashCode(ingredient._id), ...ingredient}})
    }, [buns, sauces, mains])

    const constructor = useCallback( selectedIngredients.map((item, index) => {
        return (
            <section key={item.id}>

                <BurgerConstructorItem id={item.id} name={item.name}
                                       index={index}
                                       image={item.image_mobile}
                                       price={item.price}/>
            </section>
        )
    }), [buns, sauces, mains, selectedIngredients])

    const completeBurger = useCallback(() => {
        dispatch(orderPost({ingredients: [...selectedIngredients.map(item => item._id), selectedBun._id]}))
    }, [selectedIngredients, selectedBun, dispatch])

    const handleOpenModal = useCallback(() => {
        isUser(user) ?
                completeBurger()
    : navigate('/login')

    }, [user, selectedBun, selectedIngredients, completeBurger, navigate])

    useMemo(() => {
        setTotalPrice(calculateTotalPrice(selectedBun, selectedIngredients))
    }, [selectedBun, selectedIngredients])


    return (
        <div className={styles.constructorContainer}>
            <div ref={dropTarget}
                 className={`${styles.constructorArea} ${isHover ? styles.constructorArea_isHover : ''}`}>


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
                            {constructor}</div>)
                        : (<div className={styles.constructorList_skeleton}><Skeleton name='Выбирете ингредиент!'/>
                        </div>)
                    }
                </div>
                <div className={styles.ban}>
                    {selectedBun ?
                        (<ConstructorElement type='bottom' isLocked={true} text={`${selectedBun.name} (низ)`}
                                             thumbnail={selectedBun.image_mobile}
                                             price={selectedBun.price}/>) : (
                            <Skeleton type='bottom' name='Выбирете булку!'/>)}
                </div>
            </div>
            <div className={styles.constructorBottom}>
                <div className={styles.price}>
                    <span className={`text text_type_digits-medium`}>{totalPrice}</span>
                    <CurrencyIcon type={"primary"}/>
                </div>

                <Button onClick={handleOpenModal} htmlType={'button'} type='primary' size='large'> <Link
                    to={`order`}
                    state={{ background: location }}
                    className={styles.link}
                >Оформить
                    заказ </Link></Button>

            </div>
            <>

            </>
        </div>
    );
};


export default BurgerConstructor;