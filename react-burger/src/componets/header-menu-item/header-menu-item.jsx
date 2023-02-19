import PropTypes from 'prop-types';
import styles from './header-menu-item.module.scss'
import MenuItemContent from "./menu-item-content/menu-item-content";


const menuItemState = {
    active:'text_type_main-default',
    inactive: 'text_type_main-default text_color_inactive'
}

const HeaderMenuItem = ({type, activeClass, setActiveClass, inActiveIcon, activeIcon, menuItemName}) => {

    const handleChangeMenuItem = () => {
        if (type === 'constructor') {
            activeClass['constructor'] === menuItemState.inactive ? setActiveClass({
                    constructor: menuItemState.active,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                }) :
                setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })


        }
        if (type === 'listOrder') {
            activeClass.listOrder === menuItemState.inactive ? setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.active,
                    account: menuItemState.inactive
                }) :
                setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })

        }
        if (type === 'account') {
            activeClass.account === menuItemState.inactive ? setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.active
                }) :
                setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })

        }
    }
    return (
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text ${styles.menuItem} `}>
           <MenuItemContent activeClass={activeClass[type]} inActiveIcon={inActiveIcon}
                            activeIcon={activeIcon}
                            menuItemName={menuItemName}/>
        </section>
    );
};

HeaderMenuItem.propTypes = {
    type: PropTypes.string.isRequired,
    activeClass: PropTypes.object.isRequired,
    setActiveClass: PropTypes.func.isRequired,
    inActiveIcon: PropTypes.element.isRequired,
    activeIcon: PropTypes.element.isRequired,
    menuItemName:PropTypes.string.isRequired
}

export default HeaderMenuItem;