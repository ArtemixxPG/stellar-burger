import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useCallback, useMemo, useState} from "react";
import {calculateTotalPrice, hashCode, log} from "../../utils/utils";

import styles from './burger-constructor.module.scss'

import Skeleton from "../skeleton/burger-constructor-skeleton/skeleton";
import {useDrop} from "react-dnd";
import {orderPost} from "../../services/actions/order-actions";
import {INGREDIENT_TYPES} from "../../utils/constants";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {getCookie} from "../../utils/cookie";
import {useDispatch} from "../../custom-hooks/redux/dipatch/use-dispatch";
import {
    useSelector
} from "../../custom-hooks/redux/selectors/use-selectors";
import BurgerListItem from "./burger-list-item/burger-list-item";
import {addBun, addIngredient} from "../../services/reducers/selected-ingredients-reducers";


const BurgerConstructor = () => {

    const location = useLocation();

    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {ingredientsSelector, selectedIngredientsSelector} = useSelector()

    const {buns, sauces, mains} = ingredientsSelector.types
    const {selectedBun, selectedIngredients} = selectedIngredientsSelector


    const [{isHover}, dropTarget] = useDrop<{ id: string }, void, { isHover: boolean }>({
        accept: 'ingredient',
        collect: monitor => ({
            isHover: monitor.isOver()
        }), drop(id) {
            setIngredient(id)
        }
    });


    const setIngredient = useCallback((id: { id: string }) => {
        const ingredients = [...buns, ...sauces, ...mains]
        const ingredient = ingredients.find(item => item._id === id.id)
        ingredient ? ingredient.type === INGREDIENT_TYPES.BUNS ? dispatch(addBun(ingredient))
            : dispatch(addIngredient({id: hashCode(ingredient._id), ...ingredient})) : log(ingredient)
    }, [buns, sauces, mains, dispatch])


    const completeBurger = useCallback(() => {
        if (selectedIngredients.length > 0) {
            dispatch(orderPost({ingredients: [...selectedIngredients.map(item => item._id), selectedBun?._id, selectedBun?._id]}))
        }
    }, [selectedIngredients, selectedBun, dispatch])

    const handleOpenModal = useCallback(() => {
        getCookie('token') ?
            completeBurger()
            : navigate('/login')

    }, [completeBurger, navigate])


    useMemo(() => {
        setTotalPrice(calculateTotalPrice(selectedBun, selectedIngredients))
    }, [selectedBun, selectedIngredients])


    return (
        <div className={styles.constructorContainer}>
            <div id = 'drop-area' ref={dropTarget}
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
                        (<ul className={styles.constructorList_container}>
                            <BurgerListItem/>
                        </ul>)
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
                    state={{background: location}}
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