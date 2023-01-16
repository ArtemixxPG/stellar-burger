import {useState} from 'react';
import useObserverScroll from "../../custom-hooks/use-observer-scroll";
import usePortalScroll from "../../custom-hooks/use-portal-scroll";
import BurgerIngredientsItem from "./burger-ingredients-item/burger-ingredients-item";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import { Link } from 'react-scroll'

import styles from './burger-ingredient.module.scss'
import {hashCode} from "../../utils/utils";
import PropTypes from "prop-types";

const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    fat:PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v:PropTypes.number.isRequired
});

const BurgerIngredient = (props) => {

    const [currentTab, setCurrentTab] = useState('bun')


    const listBuns = props.buns.map((item, index)=>{
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
            image={item.image}
            imageLarge={item.image_large}
            price={item.price}
            name={item.name}
            nutritions={{
                calories: item.calories,
                proteins: item.proteins,
                fat: item.fat,
                carbohydrates: item.carbohydrates
            }}
            />
        )})

    const listMains = props.mains.map((item, index)=>{
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
                                   image={item.image}
                                   imageLarge={item.image_large}
                                   price={item.price}
                                   name={item.name}
                                   nutritions={{
                                       calories: item.calories,
                                       proteins: item.proteins,
                                       fat: item.fat,
                                       carbohydrates: item.carbohydrates
                                   }}
            />
        )})

    const listSauces = props.sauces.map((item, index)=>{
        return (
            <BurgerIngredientsItem key={hashCode(item.name)}
                                   image={item.image}
                                   imageLarge={item.image_large}
                                   price={item.price}
                                   name={item.name}
                                   nutritions={{
                                       calories: item.calories,
                                       proteins: item.proteins,
                                       fat: item.fat,
                                       carbohydrates: item.carbohydrates
                                   }}
            />
        )})

    const handleChangeTab = (e) => {
        setCurrentTab(e)
    }

    return (
        <section className={`pt-5 ${styles.ingredients}`}>
            <div  className={`pb-10 ${styles.subMenu}`}>

                <Link
                    to={`buns`}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-20}
                    containerId="ingredients-group"
                    onSetActive={() => setCurrentTab('bun')}>
                    <Tab className='tab-ingrdient' value="bun" active={currentTab === 'bun'} onClick={handleChangeTab}>
                        Булки
                    </Tab>
                </Link>
                <Link
                    to={`sauces`}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-20}
                    containerId="ingredients-group"
                    onSetActive={() => setCurrentTab('sauce')}>
                    <Tab className='tab-ingrdient' value="sauce" active={currentTab === 'sauce'} onClick={handleChangeTab}>
                        Соусы
                    </Tab>
                </Link>
                <Link
                    to={`mains`}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-20}
                    containerId="ingredients-group"
                    onSetActive={() => setCurrentTab('main')}>
                    <Tab  className='tab-ingrdient' value="main" active={currentTab === 'main'} onClick={handleChangeTab}>
                        Начинки
                    </Tab>
                </Link>
            </div>
            <div className={`pt-5 ${styles.ingredientsGroup}`}>

            <div id='ingredients-group'   className={`pt-5 ${styles.ingredientsGroup_list}`}>
                <div id='buns'>
                <BurgerIngredientsGroup  className='ingredientsGroup' header='Булки' list={listBuns} />
                </div>
                <div id='sauces'>
                <BurgerIngredientsGroup  className='ingredientsGroup' header='Соусы' list={listSauces} />
            </div>
                <div id='mains'>
                <BurgerIngredientsGroup className='ingredientsGroup' header='Начинки' list={listMains} />
                    </div>
            </div>
                <div></div>
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