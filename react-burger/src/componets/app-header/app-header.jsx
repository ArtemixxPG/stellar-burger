import {useState} from "react";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './app-header.module.scss'
import HeaderMenuItem from "../header-menu-item/header-menu-item";
import Glitch from "../glitch-effect/glitch";
import {Link} from "react-router-dom";


const typeHeaderMenuItem = {
    constructor: 'constructor',
    listOrder: 'listOrder',
    account: 'account'
}


const AppHeader = () => {

    const [activeClassButton, setActiveClassButton] = useState({
        constructor: '',
        listOrder: '',
        account: ''
    })

    const menuItemContent = (activeClass, inActiveIcon, activeIcon, menuItemName) => {
        return(
            <>
        <Link to="/" style={{textDecoration:'none'}}>
            {
                activeClass === '' ?
                    inActiveIcon : activeIcon
            }
            <span className='ml-4 text text_type_main-default'>{menuItemName}</span>
        </Link>
            </>

        )
    }

    const handleChange = () =>{
        console.log(1)
    }

    return (
        <div className={`pt-4 pb-4 ${styles.header}`}>
            <div className={styles.leftMenu}>
                <HeaderMenuItem
                    activeClass={activeClassButton}
                    setActiveClass={setActiveClassButton}
                    type={typeHeaderMenuItem.constructor}
                >
                    {menuItemContent(activeClassButton.constructor,
                        <BurgerIcon type="secondary"/>,
                        <BurgerIcon type="primary"/>, 'Конструктор')}
                </HeaderMenuItem>
                <HeaderMenuItem
                    activeClass={activeClassButton}
                    setActiveClass={setActiveClassButton}
                    type={typeHeaderMenuItem.listOrder}
                >
                    {menuItemContent(activeClassButton.listOrder, <ListIcon type="secondary"/>,
                        <ListIcon type="primary"/>, 'Лента заказов')}
                </HeaderMenuItem>
            </div>
            <div onClick={handleChange} className={styles.logo}>
                <Logo/>
            <Glitch glitchClass='glitch-state' glitchImage={<Logo/>}/>
            </div>
            <div className={styles.rightMenu}>
                <HeaderMenuItem
                    activeClass={activeClassButton}
                    setActiveClass={setActiveClassButton}
                    type={typeHeaderMenuItem.account}
                >
                    {menuItemContent(activeClassButton.account,
                        <ProfileIcon type="secondary"/>,
                        <ProfileIcon type="primary"/>, 'Личный кабинет')}
                </HeaderMenuItem>
            </div>
        </div>
    );
};

export default AppHeader;