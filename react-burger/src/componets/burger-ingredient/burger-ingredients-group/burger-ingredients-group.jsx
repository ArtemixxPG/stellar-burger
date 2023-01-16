import PropTypes from "prop-types";

import styles from './burger-ingredients-group.module.scss'

const BurgerIngredientsGroup = (props) => {





    return (
        <section className={styles.group_content}>
           <div className={`text text_type_main-medium pb-6 ${styles.group_header}`}>
               {props.header}
           </div>
            <div className={styles.group_list}>
                {props.list}
            </div>
        </section>
    );
};



export default BurgerIngredientsGroup;

BurgerIngredientsGroup.propTypes = {
    header: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.element)
}