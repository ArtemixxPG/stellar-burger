import {useState} from 'react';
import BurgerIngredientsGroup from "./burger-ingredients-group/burger-ingredients-group";
import styles from './burger-ingredient.module.scss'
import BurgerTab from "../burger-tab/burger-tab";
import {useSelector} from "react-redux";
import {TStore} from "../../services/reducers/root/root-reducer";


const BurgerIngredient = () => {

    const {buns, sauces, mains} = useSelector((store: TStore) => store.ingredients.types)

    const [currentTab, setCurrentTab] = useState<string>('bun')

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
                    <div id='buns' className={styles.ingredientsGroup}>
                        <BurgerIngredientsGroup  header='Булки'
                                                listIngredients={buns}/>
                    </div>
                    <div id='sauces' className={styles.ingredientsGroup}>
                        <BurgerIngredientsGroup  header='Соусы'
                                                listIngredients={sauces}/>
                    </div>
                    <div id='mains' className={styles.ingredientsGroup}>
                        <BurgerIngredientsGroup header='Начинки'
                                                listIngredients={mains}/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default BurgerIngredient;