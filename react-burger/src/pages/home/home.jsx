import AppHeader from "../../componets/app-header/app-header";
import useFetchList from "../../custom-hooks/use-fetch-list";

import styles from './home.module.scss'
import BurgerIngredient from "../../componets/burger-ingredient/burger-ingredient";
import BurgerConstructor from "../../componets/burger-constructor/burger-constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {useSelector} from "react-redux";
import MainPreloader from "../../componets/preloader/main-preloader/main-preloader";


const Home = () => {



    return (
        <>

        <main className={styles.app}>
            <section className={styles.container}>
                <h2 className={`text text_type_main-large ${styles.cyber_title}`}>Соберите бургер</h2>
                <DndProvider backend={HTML5Backend}>
                <BurgerIngredient/>
                <BurgerConstructor/>
                </DndProvider>
            </section>

        </main>

        </>
    );
};

export default Home;