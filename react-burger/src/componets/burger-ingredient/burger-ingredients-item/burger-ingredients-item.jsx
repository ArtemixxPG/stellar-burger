import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-item.module.scss'
import Modal from "../../modal/modal";
import ModalContentIngredient from "../../modal-content/modal-content-ingredient/modal-content-ingredient";
import {useState} from "react";
import PropTypes from "prop-types";
import {Nutritions} from "../../../utils/prop-types-constants";



const BurgerIngredientsItem = ({name, image, imageLarge, price, nutritions}) => {


    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)


    return (
        <section className={styles.burgerItemContent}>
            <img onClick={()=>setOpen(true)} className={`ml-4 pb-1 ${styles.burgerItemImage}`} src={image} />
            <div className={styles.burgerItemPrice}>
                <span>{price}</span>
                <CurrencyIcon type={'primary'}/>
            </div>
            <span className={`text text_type_main-default pb-1 ${styles.burgerItemName}`}>{name}</span>
            {count ? <Counter count={count} size="default" /> : null}
            {open &&(<Modal header='Детали ингредиента' open={open} setOpen={setOpen}>
            <ModalContentIngredient  image={imageLarge} name={name} nutritions={nutritions}/>
        </Modal>)}
        </section>
    );
};

BurgerIngredientsItem.propTypes = {
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageLarge: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nutritions: Nutritions.isRequired
}

export default BurgerIngredientsItem;