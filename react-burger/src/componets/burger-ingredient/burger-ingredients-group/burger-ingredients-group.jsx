import PropTypes from "prop-types";

import styles from './burger-ingredients-group.module.scss'
import BurgerIngredientsItem from "../burger-ingredients-item/burger-ingredients-item";
import {hashCode} from "../../../utils/utils";

const BurgerIngredientsGroup = (props) => {


    const listIngredients = props.listIngredients.map((item, index) => {
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
                                   image={item.image}
                                   imageLarge={item.image_large}
                                   price={item.price}
                                   name={item.name}
                                   nutritions={{
                                       calories: item.calories,
                                       proteins: item.proteins,
                                       fat: item.fat,
                                       carbohydrates: item.carbohydrates
                                   }}
            />
        )
    })


    return (
        <section className={styles.groupContent}>
            <div className={`text text_type_main-medium pb-6 ${styles.groupHeader}`}>
                {props.header}
            </div>
            <div className={styles.groupList}>
                {listIngredients}
            </div>
        </section>
    );
};


export default BurgerIngredientsGroup;

BurgerIngredientsGroup.propTypes = {
    header: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.element)
}