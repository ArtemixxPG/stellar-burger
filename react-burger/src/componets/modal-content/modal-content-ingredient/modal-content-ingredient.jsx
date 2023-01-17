import React from 'react';

import styles from './modal-content-ingredient.module.scss'
import Glitch from "../../glitch-effect/glitch";
import PropTypes, {shape} from "prop-types";
import ModalContentIngredientNutritionType
    from "./modal-content-ingredient-nutrition-type/modal-content-ingredient-nutrition-type";




const ModalContentIngredient = (props) => {


    return (
        <section className={styles.modalIngredient}>
           <div className={styles.image}><img src={props.image}/></div>
             <span className={`text text_type_main-medium pt-4 pb-8 ${styles.modalIngredientName}`}>{props.name}</span>
            <div className={`pb-15 ${styles.modalIngredientNutrition}`}>
                <ModalContentIngredientNutritionType header={'Каллории, ккал'} value={props.nutritions.calories}/>
                <ModalContentIngredientNutritionType header={'Белки, г'} value={props.nutritions.proteins}/>
                <ModalContentIngredientNutritionType header={'Жиры, г'} value={props.nutritions.fat}/>
                <ModalContentIngredientNutritionType header={'Углеводы, г'} value={props.nutritions.carbohydrates}/>
            </div>
        </section>
    );
};

ModalContentIngredient.propTypes = {
    nutritions: PropTypes.shape({
        proteins: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        fat:PropTypes.number.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ModalContentIngredient;