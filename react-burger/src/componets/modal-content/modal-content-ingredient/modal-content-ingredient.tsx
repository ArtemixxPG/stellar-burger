
import styles from './modal-content-ingredient.module.scss'
import Nutrition
    from "./modal-content-ingredient-nutrition-type/nutrition";
import {useParams} from "react-router-dom";
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";

const ModalContentIngredient = () => {

    const {id} = useParams();

    const {itemIngredientsSelector} = useSelector()

    const {name, image, nutrients} = itemIngredientsSelector(id)


    return (

        <section className={styles.modalIngredient}>
            <div className={styles.image}><img alt='NO IMAGE' src={image}/></div>
            <span className={`text text_type_main-medium pt-4 pb-8 ${styles.modalIngredientName}`}>{name}</span>
            <div className={`pb-15 ${styles.modalIngredientNutrition}`}>
                <Nutrition header={'Каллории, ккал'} value={nutrients.calories}/>
                <Nutrition header={'Белки, г'} value={nutrients.proteins}/>
                <Nutrition header={'Жиры, г'} value={nutrients.fat}/>
                <Nutrition header={'Углеводы, г'} value={nutrients.carbohydrates}/>
            </div>
        </section>

    );
};


export default ModalContentIngredient;