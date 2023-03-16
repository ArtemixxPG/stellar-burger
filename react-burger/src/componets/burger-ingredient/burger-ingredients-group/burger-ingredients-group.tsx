import styles from './burger-ingredients-group.module.scss'
import BurgerIngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import {hashCode} from "../../../utils/utils";
import {TIngredient} from "../../../utils/prop-types-constants";
import {FC} from "react";

interface IBurgerIngredientsGroup {
    header: string;
    listIngredients: Array<TIngredient>;
}

const BurgerIngredientsGroup:FC<IBurgerIngredientsGroup> = ({header, listIngredients}) => {


    const ingredients = listIngredients.map((item) => {
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
                                   ingredient={item}
            />
        )
    })


    return (
        <li className={styles.content}>
            <h3 className={`text text_type_main-medium pb-6 ${styles.header}`}>
                {header}
            </h3>
            <ul className={styles.list}>
                {ingredients}
            </ul>
        </li>
    );
};


export default BurgerIngredientsGroup;

