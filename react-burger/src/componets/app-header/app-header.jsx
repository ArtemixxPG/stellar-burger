import {useState} from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header.module.scss'
import HeaderMenuItem from "../header-menu-item/header-menu-item";
import Glitch from "../glitch-effect/glitch";


const typeHeaderMenuItem = {
    constructor: 'constructor',
    listOrder: 'listOrder',
    account: 'account'
}


const AppHeader = () => {

    const [activeClassButton, setActiveClassButton] = useState({
        constructor: 'text_type_main-default text_color_inactive',
        listOrder: 'text_type_main-default text_color_inactive',
        account: 'text_type_main-default text_color_inactive'
    })

    return (
        <div className={`pt-4 pb-4 ${styles.header}`}>
            <div className={styles.leftMenu}>
                <HeaderMenuItem  activeClass={activeClassButton}
                                 setActiveClass={setActiveClassButton}
                                 type={typeHeaderMenuItem.constructor} inActiveIcon={<BurgerIcon type="secondary"/>}
                                 activeIcon={<BurgerIcon type="primary"/>} menuItemName={'Конструктор'}/>
                <HeaderMenuItem  activeClass={activeClassButton}
                                 setActiveClass={setActiveClassButton}
                                 type={typeHeaderMenuItem.listOrder} inActiveIcon={<ListIcon type="secondary"/>}
                                 activeIcon={<ListIcon type="primary"/>} menuItemName={'Лента заказов'}/>
            </div>
            <div className={styles.logo}>
                <Logo/>
            <Glitch glitchClass='glitch-state' glitchImage={<Logo/>}/>
            </div>
            <div className={styles.rightMenu}>
                <HeaderMenuItem  activeClass={activeClassButton}
                                 setActiveClass={setActiveClassButton}
                                 type={typeHeaderMenuItem.account} inActiveIcon={<ProfileIcon type="secondary"/>}
                                 activeIcon={<ProfileIcon type="primary"/>} menuItemName={'Личный кабинет'}/>
            </div>
        </div>
    );
};

export default AppHeader;