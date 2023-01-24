import {useState} from 'react';
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";


import styles from './burger-ingredient.module.scss'
import PropTypes from "prop-types";
import BurgerTab from "../burger-tab/burger-tab";
import {IngredientPropTypes} from "../../utils/prop-types-constants";



const BurgerIngredient = ({buns, sauces, mains}) => {

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
                                                listIngredients={buns}/>
                    </div>
                    <div id='sauces'>
                        <BurgerIngredientsGroup className='ingredientsGroup' header='Соусы'
                                                listIngredients={sauces}/>
                    </div>
                    <div id='mains'>
                        <BurgerIngredientsGroup className='ingredientsGroup' header='Начинки'
                                                listIngredients={mains}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

BurgerIngredient.propTypes = {
    buns: PropTypes.arrayOf(IngredientPropTypes),
    sauces: PropTypes.arrayOf(IngredientPropTypes),
    mains: PropTypes.arrayOf(IngredientPropTypes)
}

export default BurgerIngredient;