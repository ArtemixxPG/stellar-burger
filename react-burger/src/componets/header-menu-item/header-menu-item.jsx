import PropTypes from 'prop-types';
import styles from './header-menu-item.module.scss'
import MenuItemContent from "./menu-item-content/menu-item-content";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const menuItemState = {
    active: 'text_type_main-default',
    inactive: 'text_type_main-default text_color_inactive'
}

const HeaderMenuItem = ({type, activeClass, setActiveClass, inActiveIcon, activeIcon, menuItemName, path}) => {

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== '/' && location.pathname !== '/order' && location.pathname !== '/profile') {
            setActiveClass({
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
            <MenuItemContent activeClass={activeClass[type]} inActiveIcon={inActiveIcon}
                             activeIcon={activeIcon}
                             menuItemName={menuItemName}
                             path={path}
            />
        </section>
    );
};

HeaderMenuItem.propTypes = {
    type: PropTypes.string.isRequired,
    activeClass: PropTypes.object.isRequired,
    setActiveClass: PropTypes.func.isRequired,
    inActiveIcon: PropTypes.element.isRequired,
    activeIcon: PropTypes.element.isRequired,
    menuItemName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default HeaderMenuItem;