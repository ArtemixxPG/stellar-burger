import {useEffect, useState} from "react";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import styles from './header-menu-item.module.scss'

const HeaderMenuItem = (props) => {

    const handleChangeMenuItem = () => {
        if (props.type === 'constructor') {
            props.activeClass['constructor'] === '' ? props.setActiveClass({
                    constructor: 'active',
                    listOrder: '',
                    account: ''
                }) :
                props.setActiveClass({
                    constructor: '',
                    listOrder: '',
                    account: ''
                })


        }
        if (props.type === 'listOrder') {
            props.activeClass.listOrder === '' ? props.setActiveClass({
                    constructor: '',
                    listOrder: 'active',
                    account: ''
                }) :
                props.setActiveClass({
                    constructor: '',
                    listOrder: '',
                    account: ''
                })

        }
        if (props.type === 'account') {
            props.activeClass.account === '' ? props.setActiveClass({
                    constructor: '',
                    listOrder: '',
                    account: 'active'
                }) :
                props.setActiveClass({
                    constructor: '',
                    listOrder: '',
                    account: ''
                })

        }
    }

    return (
        <section onClick={handleChangeMenuItem} className={`pl-5 pr-5 text text_type_main-default ${styles.menuItem} + ${props.activeClass[props.type]}`}>
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