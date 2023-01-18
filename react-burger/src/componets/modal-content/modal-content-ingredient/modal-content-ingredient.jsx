import React from 'react';

import styles from './modal-content-ingredient.module.scss'
import PropTypes from "prop-types";
import ModalContentIngredientNutritionType
    from "./modal-content-ingredient-nutrition-type/modal-content-ingredient-nutrition-type";
import {Nutritions} from "../../../utils/prop-types-constants";




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
    nutritions: Nutritions.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default ModalContentIngredient;