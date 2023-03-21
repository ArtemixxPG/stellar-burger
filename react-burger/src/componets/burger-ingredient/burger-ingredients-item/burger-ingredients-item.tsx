import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-item.module.scss'
import {FC, memo, useMemo} from "react";
import {TIngredient} from "../../../utils/prop-types-constants";
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";
import {TStore} from "../../../services/reducers/root/root-reducer";


interface IBurgerIngredientsItem {
    ingredient: TIngredient;
}

const BurgerIngredientsItem:FC<IBurgerIngredientsItem> = ({ingredient}) => {

    const location = useLocation()

    const {selectedBun, selectedIngredients} = useSelector((store:TStore) => store.selectedIngredients)

    const [{isDrag}, drag] = useDrag({
        type: "ingredient",
        item: {id: ingredient._id},
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const count = useMemo(() => {
        return ingredient.type === 'bun' ? selectedBun?._id === ingredient._id ? 2 : 0 :
            selectedIngredients.filter( (item: TIngredient) => item._id === ingredient._id).length
    }, [ingredient, selectedIngredients, selectedBun]);




    return (
        <section className={` ${styles.burgerItemContent} ${isDrag ? styles.burgerItemContent_drag : ''}`}>
            <Link
                to={`ingredient/${ingredient._id}`}
                state={{background: location}}
                className={styles.link}
            >
                <img alt='NO IMAGE' ref={drag} className={`ml-4 pb-1 ${styles.burgerItemImage}`} src={ingredient.image}/>
                <div className={`text text_type_main-small ${styles.burgerItemPrice}`}>
                    <span>{ingredient.price}</span>
                    <CurrencyIcon type={'primary'}/>
                </div>
                <span className={`text text_type_main-default pb-1 ${styles.burgerItemName}`}>{ingredient.name}</span>

            </Link>
            {count ? <Counter count={count} size="default"/> : null}
        </section>
    );
};



export default memo(BurgerIngredientsItem);