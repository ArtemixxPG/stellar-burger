
import styles from './modal-content-ingredient.module.scss'
import ModalContentIngredientNutritionType
    from "./modal-content-ingredient-nutrition-type/modal-content-ingredient-nutrition-type";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {TStore} from "../../../services/reducers/root/root-reducer";
import {itemIngredientsSelector} from "../../../custom-hooks/redux/selectors/use-selectors";

const ModalContentIngredient = () => {

    const {id} = useParams();


    const {name, image, nutrients} = itemIngredientsSelector(id)


    return (

        <section className={styles.modalIngredient}>
            <div className={styles.image}><img alt='NO IMAGE' src={image}/></div>
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