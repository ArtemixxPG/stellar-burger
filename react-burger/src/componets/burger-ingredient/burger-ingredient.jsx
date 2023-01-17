import {useState} from 'react';
import useObserverScroll from "../../custom-hooks/use-observer-scroll";
import usePortalScroll from "../../custom-hooks/use-portal-scroll";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import {Link} from 'react-scroll'

import styles from './burger-ingredient.module.scss'
import {hashCode} from "../../utils/utils";
import PropTypes from "prop-types";
import BurgerTab from "../burger-tab/burger-tab";

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired
});

const BurgerIngredient = (props) => {

    const [currentTab, setCurrentTab] = useState('bun')

    return (
        <section className={`pt-5 ${styles.ingredients}`}>
            <div className={`pb-10 ${styles.subMenu}`}>
                <BurgerTab header={'Булки'} currentTab={currentTab} setCurrentTab={setCurrentTab} to={'buns'}
                           containerID={'ingredients-group'} value={'bun'}/>
                <BurgerTab header={'Соусы'} currentTab={currentTab} setCurrentTab={setCurrentTab} to={'sauces'}
                           containerID={'ingredients-group'} value={'sauce'}/>
                <BurgerTab header={'Начинки'} currentTab={currentTab} setCurrentTab={setCurrentTab} to={'mains'}
                           containerID={'ingredients-group'} value={'main'}/>
            </div>
            <div className={`pt-5 ${styles.ingredientsGroup}`}>
                <div id='ingredients-group' className={`pt-5 ${styles.ingredientsGroup_list}`}>
                    <div id='buns'>
                        <BurgerIngredientsGroup className='ingredientsGroup' header='Булки'
                                                listIngredients={props.buns}/>
                    </div>
                    <div id='sauces'>
                        <BurgerIngredientsGroup className='ingredientsGroup' header='Соусы'
                                                listIngredients={props.sauces}/>
                    </div>
                    <div id='mains'>
                        <BurgerIngredientsGroup className='ingredientsGroup' header='Начинки'
                                                listIngredients={props.mains}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

BurgerIngredient.propTypes = {
    buns: PropTypes.arrayOf(ingredientPropTypes),
    sauces: PropTypes.arrayOf(ingredientPropTypes),
    main: PropTypes.arrayOf(ingredientPropTypes)
}

export default BurgerIngredient;