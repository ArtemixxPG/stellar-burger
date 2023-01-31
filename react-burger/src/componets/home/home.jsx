import AppHeader from "../app-header/app-header";
import useFetchList from "../../custom-hooks/use-fetch-list";

import styles from './home.module.scss'
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {useSelector} from "react-redux";
import MainPreloader from "../preloader/main-preloader/main-preloader";


const Home = () => {

    const hasLoading = useSelector(store => store.ingredients.hasLoading)
    useFetchList()

    return (
        <>
        {hasLoading ? (<MainPreloader/>) :
        (<main className={styles.app}>
            <header className={styles.navbar}>
                <AppHeader/>
            </header>
            <section className={styles.container}>
                <h2 className={`text text_type_main-large ${styles.cyber_title}`}>Соберите бургер</h2>
                <DndProvider backend={HTML5Backend}>
                <BurgerIngredient/>
                <BurgerConstructor/>
                </DndProvider>
            </section>

        </main>)
    }
        </>
    );
};

export default Home;