import PropTypes from "prop-types";

import styles from './modal-content-ingredient-nutrition-type.module.scss'

const ModalContentIngredientNutritionType = (props) => {
    return (
        <section
            className={`text text_type_digits-small text text_type_main-small text_color_inactive ${styles.nutrition}`}>
            <span>{props.header}</span>
            <span>{props.value}</span>
        </section>
    );
};

ModalContentIngredientNutritionType.propTypes = {
    header: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default ModalContentIngredientNutritionType;