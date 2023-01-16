import React from 'react';

import styles from './modal-content-ingredient.module.scss'
import Glitch from "../../glitch-effect/glitch";
import PropTypes, {shape} from "prop-types";

const nutritionPropTypes = PropTypes.shape( {
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    fat:PropTypes.number.isRequired,
}
)

const ModalContentIngredient = (props) => {
    return (
        <section className={styles.modalIngredient}>
           <div className={styles.image}><img src={props.image}/></div>
             <span className={`text text_type_main-medium pt-4 pb-8 ${styles.modalIngredientName}`}>{props.name}</span>
            <div className={`pb-15 ${styles.modalIngredientNutrition}`}>
                <div className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
                    <span>Каллории, ккал</span>
                    <span>{props.nutritions.calories}</span>
                </div>
                <div className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
                    <span>Белки, г </span>
                    <span>{props.nutritions.proteins}</span>
                </div>
                <div className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
                    <span>Жиры, г</span>
                    <span>{props.nutritions.fat}</span>
                </div>
                <div className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
                    <span>Углеводы, г</span>
                    <span>{props.nutritions.carbohydrates}</span>
                </div>
            </div>
        </section>
    );
};

ModalContentIngredient.propTypes = {
    nutritions: PropTypes.objectOf(nutritionPropTypes).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ModalContentIngredient;