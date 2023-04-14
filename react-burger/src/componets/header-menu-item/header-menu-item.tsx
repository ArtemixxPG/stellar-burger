import styles from './header-menu-item.module.scss'
import MenuItemContent from "./menu-item-content/menu-item-content";
import {useLocation} from "react-router-dom";
import {ReactElement, useEffect} from "react";

type TMenuItemState = {
    active: string
    inactive: string
}

type TActiveClass = {
    [key: string]: string
    constructor: string
    listOrder: string
    account: string
}

const menuItemState: TMenuItemState = {
    active: 'text_type_main-default',
    inactive: 'text_type_main-default text_color_inactive'
}

interface IHeaderMenuItem {
    type: string
    activeClass: string
    setActiveClass: (activeClass: TActiveClass) => void;
    inActiveIcon: ReactElement
    activeIcon: ReactElement
    menuItemName: string
    path: string
}

const HeaderMenuItem = ({activeClass, setActiveClass, inActiveIcon, activeIcon, menuItemName, path}: IHeaderMenuItem) => {

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/' && location.pathname !== '/orders' && location.pathname !== '/profile') {
            setActiveClass
            ({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.inactive,
                account: menuItemState.inactive
            })

        }
        if (location.pathname === '/') {
            setActiveClass({
                constructor: menuItemState.active,
                listOrder: menuItemState.inactive,
                account: menuItemState.inactive
            })

        }
        if (location.pathname === '/orders') {
            setActiveClass({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.active,
                account: menuItemState.inactive
            })

        }
        if (location.pathname.includes('/profile')) {
            setActiveClass({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.inactive,
                account: menuItemState.active
            })
        }
    }, [location, setActiveClass]);


    const handleChangeMenuItem = () => {

    }

    return (
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text ${styles.menuItem} `}>
            <MenuItemContent activeClass={activeClass} inActiveIcon={inActiveIcon}
                             activeIcon={activeIcon}
                             menuItemName={menuItemName}
                             path={path}
            />
        </section>
    );
};




export default HeaderMenuItem;