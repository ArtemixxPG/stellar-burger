import {useEffect, useState} from 'react';
import AppHeader from "../app-header/app-header";
import useFetchList from "../../custom-hooks/use-fetch-list";
import Modal from "../modal/modal";

import styles from './home.module.scss'
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const url = 'https://norma.nomoreparties.space/api/ingredients'

const ingredientTypes = {
    buns: 'bun',
    mains: 'main',
    sauces: 'sauce'
}

const Home = () => {

    const [listIngredients, loading, error] = useFetchList(url)
    const [typeIngredients, setTypeIngredients] = useState({
        buns:[

        ],
        mains:[],
        sauces:[]
    })


    useEffect(()=>{
        let buns = listIngredients.filter(item => item.type.includes(ingredientTypes.buns))
        let mains = listIngredients.filter(item => item.type.includes(ingredientTypes.mains))
        let sauces = listIngredients.filter(item => item.type.includes(ingredientTypes.sauces))

        setTypeIngredients(
            {
                buns: buns,
                mains: mains,
                sauces: sauces
            }
        )
    },[JSON.stringify(listIngredients), url])


    return (
        <main className={styles.app}>
            <header className={styles.navbar}>
                <AppHeader/>
            </header>
                <section className={styles.container}>
                    <h2 className={`text text_type_main-large ${styles.cyber_title}`}>Соберите бургер</h2>
                <BurgerIngredient buns={typeIngredients.buns}
                                  mains={typeIngredients.mains}
                                  sauces={typeIngredients.sauces}/>
                    <BurgerConstructor image={typeIngredients.buns} mains={typeIngredients.mains}/>
                </section>

        </main>
    );
};

export default Home;