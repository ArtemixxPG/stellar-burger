import PropTypes from 'prop-types';
import styles from './header-menu-item.module.scss'


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
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text ${props.activeClass[props.type]} ${styles.menuItem} `}>
            {props.children}
        </section>
    );
};

HeaderMenuItem.propTypes = {
    type: PropTypes.string.isRequired,
    activeClass: PropTypes.object.isRequired,
    setActiveClass: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default HeaderMenuItem;