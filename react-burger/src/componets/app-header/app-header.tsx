import {useState} from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header.module.scss'
import HeaderMenuItem from "../header-menu-item/header-menu-item";
import Glitch from "../glitch-effect/glitch";
import {TYPE_HEADER_MENU_ITEM} from "../../utils/constants";
import {Link} from "react-router-dom";


type THeaderMenuItemClasses = {
    constructor: string
    listOrder: string
    account: string
}

const AppHeader = () => {

    const [activeClassButton, setActiveClassButton] = useState<THeaderMenuItemClasses>({
        constructor: 'text_type_main-default ',
        listOrder: 'text_type_main-default text_color_inactive',
        account: 'text_type_main-default text_color_inactive'
    })


    return (
        <div className={`pt-4 pb-4 ${styles.header}`}>
            <div className={styles.leftMenu}>
                <HeaderMenuItem activeClass={activeClassButton.constructor}
                                setActiveClass={setActiveClassButton}
                                type={TYPE_HEADER_MENU_ITEM.CONSTRUCTOR} inActiveIcon={<BurgerIcon type="secondary"/>}
                                activeIcon={<BurgerIcon type="primary"/>} menuItemName={'Конструктор'}
                                path='/'
                />
                <HeaderMenuItem activeClass={activeClassButton.listOrder}
                                setActiveClass={setActiveClassButton}
                                type={TYPE_HEADER_MENU_ITEM.LIST_ORDER} inActiveIcon={<ListIcon type="secondary"/>}
                                activeIcon={<ListIcon type="primary"/>} menuItemName={'Лента заказов'}
                                path='/orders'
                />
            </div>
            <div className={styles.logo}>
                <Link to={'/'}><Logo/></Link>
                <Glitch glitchClass='glitch-state' glitchImage={<Logo/>}/>
            </div>
            <div className={styles.rightMenu}>
                <HeaderMenuItem activeClass={activeClassButton.account}
                                setActiveClass={setActiveClassButton}
                                type={TYPE_HEADER_MENU_ITEM.ACCOUNT} inActiveIcon={<ProfileIcon type="secondary"/>}
                                activeIcon={<ProfileIcon type="primary"/>} menuItemName={'Личный кабинет'}
                                path='/profile'
                />
            </div>
        </div>
    );
};

export default AppHeader;