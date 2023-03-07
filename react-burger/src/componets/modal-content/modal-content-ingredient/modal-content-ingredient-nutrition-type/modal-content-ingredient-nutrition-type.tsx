import styles from './modal-content-ingredient-nutrition-type.module.scss'
import {FC} from "react";


interface IModalContentIngredientNutrition {
    header: string
    value: number
}
const ModalContentIngredientNutritionType:FC<IModalContentIngredientNutrition> = ({header, value}) => {
    return (
        <section
            className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
            <span>{header}</span>
            <span>{value}</span>
        </section>
    );
};



export default ModalContentIngredientNutritionType;