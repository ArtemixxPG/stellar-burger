import PropTypes from 'prop-types';
import styles from './header-menu-item.module.scss'
import MenuItemContent from "./menu-item-content/menu-item-content";


const menuItemState = {
    active:'text_type_main-default',
    inactive: 'text_type_main-default text_color_inactive'
}

const HeaderMenuItem = (props) => {

    const handleChangeMenuItem = () => {
        if (props.type === 'constructor') {
            props.activeClass['constructor'] === menuItemState.inactive ? props.setActiveClass({
                    constructor: menuItemState.active,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                }) :
                props.setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })


        }
        if (props.type === 'listOrder') {
            props.activeClass.listOrder === menuItemState.inactive ? props.setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.active,
                    account: menuItemState.inactive
                }) :
                props.setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })

        }
        if (props.type === 'account') {
            props.activeClass.account === menuItemState.inactive ? props.setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.active
                }) :
                props.setActiveClass({
                    constructor: menuItemState.inactive,
                    listOrder: menuItemState.inactive,
                    account: menuItemState.inactive
                })

        }
    }

    return (
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text ${styles.menuItem} `}>
           <MenuItemContent activeClass={props.activeClass[props.type]} inActiveIcon={props.inActiveIcon}
                            activeIcon={props.activeIcon}
                            menuItemName={props.menuItemName}/>
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