import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-item.module.scss'
import Modal from "../../modal/modal";
import ModalContentIngredient from "../../modal-content/modal-content-ingredient/modal-content-ingredient";
import {memo, useMemo, useState} from "react";
import {IngredientPropTypes, Nutritions} from "../../../utils/prop-types-constants";
import {useDispatch, useSelector} from "react-redux";
import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../../../services/actions/current-ingredient-actions";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";



const BurgerIngredientsItem = ({ingredient}) => {

    const location = useLocation()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)
    const {selectedBun, selectedIngredients} = useSelector(store => store.selectedIngredients)

    const [{ isDrag }, drag] = useDrag({
        type: "ingredient",
        item: { id: ingredient._id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const count = useMemo(() => {
       return  ingredient.type === 'bun' ? selectedBun?._id === ingredient._id ? 2 : 0  :
           selectedIngredients.filter(item => item._id === ingredient._id).length
    },[ingredient, selectedIngredients, selectedBun] );

    const handleOpenModal = () => {
        dispatch({type: SET_CURRENT_INGREDIENT, payload: ingredient})
    }



    return (
        <section className={` ${styles.burgerItemContent} ${isDrag? styles.burgerItemContent_drag : ''}`}>
            <Link
                to={`ingredient/${ingredient._id}`}
                state={{ background: location }}
                className={styles.link}
                onClick={handleOpenModal}
            >
            <img ref={drag} className={`ml-4 pb-1 ${styles.burgerItemImage}`} src={ingredient.image} />
            <div className={`text text_type_main-small ${styles.burgerItemPrice}`}>
                <span>{ingredient.price}</span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={`text text_type_main-default pb-1 ${styles.burgerItemName}`}>{ingredient.name}</span>

            </Link>
            {count ? <Counter count={count} size="default" /> : null}
        </section>
    );
};

BurgerIngredientsItem.propTypes = {
   ingredient: IngredientPropTypes.isRequired
}

export default memo(BurgerIngredientsItem);