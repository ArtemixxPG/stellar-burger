import React from 'react';

import styles from './modal-content-ingredient.module.scss'
import ModalContentIngredientNutritionType
    from "./modal-content-ingredient-nutrition-type/modal-content-ingredient-nutrition-type";
import {useSelector} from "react-redux";




const ModalContentIngredient = () => {


    const {name, image, nutrients} = useSelector((store)=>{
        return{
            name: store.currentIngredient.name,
            image: store.currentIngredient.imageLarge,
            nutrients: store.currentIngredient.nutrients
        }
    })


    return (
        <section className={styles.modalIngredient}>
           <div className={styles.image}><img src={image}/></div>
             <span className={`text text_type_main-medium pt-4 pb-8 ${styles.modalIngredientName}`}>{name}</span>
            <div className={`pb-15 ${styles.modalIngredientNutrition}`}>
                <ModalContentIngredientNutritionType header={'Каллории, ккал'} value={nutrients.calories}/>
                <ModalContentIngredientNutritionType header={'Белки, г'} value={nutrients.proteins}/>
                <ModalContentIngredientNutritionType header={'Жиры, г'} value={nutrients.fat}/>
                <ModalContentIngredientNutritionType header={'Углеводы, г'} value={nutrients.carbohydrates}/>
            </div>
        </section>
    );
};



export default ModalContentIngredient;