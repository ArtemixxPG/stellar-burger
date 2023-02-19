import PropTypes from "prop-types";

import styles from './burger-ingredients-group.module.scss'
import BurgerIngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import {hashCode} from "../../../utils/utils";
import {IngredientPropTypes} from "../../../utils/prop-types-constants";

const BurgerIngredientsGroup = ({header, listIngredients}) => {


    const ingredients = listIngredients.map((item, index) => {
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
                                   ingredient={item}
            />
        )
    })


    return (
        <section className={styles.groupContent}>
            <div className={`text text_type_main-medium pb-6 ${styles.groupHeader}`}>
                {header}
            </div>
            <div className={styles.groupList}>
                {ingredients}
            </div>
        </section>
    );
};


export default BurgerIngredientsGroup;

BurgerIngredientsGroup.propTypes = {
    header: PropTypes.string,
    listIngredients: PropTypes.arrayOf(IngredientPropTypes)
}