import PropTypes from 'prop-types';
import styles from './header-menu-item.module.scss'
import MenuItemContent from "./menu-item-content/menu-item-content";
import {useLocation} from "react-router-dom";
import {FC, ReactElement, useEffect} from "react";

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
    activeClass: TActiveClass
    setActiveClass: (activeClass: TActiveClass) => void;
    inActiveIcon: ReactElement
    activeIcon: ReactElement
    menuItemName: string
    path: string
}

const HeaderMenuItem: FC<IHeaderMenuItem> = ({type, activeClass, setActiveClass, inActiveIcon, activeIcon, menuItemName, path}) => {

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/' && location.pathname !== '/order' && location.pathname !== '/profile') {
            setActiveClass
            ({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.inactive,
                account: menuItemState.inactive
            })
        }
    }, [location]);


    const handleChangeMenuItem = () => {
        if (type === 'constructor') {
            setActiveClass({
                constructor: menuItemState.active,
                listOrder: menuItemState.inactive,
                account: menuItemState.inactive
            })


        }
        if (type === 'listOrder') {
            setActiveClass({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.active,
                account: menuItemState.inactive
            })

        }
        if (type === 'account') {
            setActiveClass({
                constructor: menuItemState.inactive,
                listOrder: menuItemState.inactive,
                account: menuItemState.active
            })

        }


    }
    return (
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text ${styles.menuItem} `}>
            <MenuItemContent activeClass={activeClass['type']} inActiveIcon={inActiveIcon}
                             activeIcon={activeIcon}
                             menuItemName={menuItemName}
                             path={path}
            />
        </section>
    );
};




export default HeaderMenuItem;