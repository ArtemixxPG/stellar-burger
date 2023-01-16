import React, {useState} from 'react';
import {createPortal} from "react-dom";
import useOutside from "../../custom-hooks/use-outside";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.scss'
import ModalOverlay from "./modal-overlay/modal-overlay";
import useEscape from "../../custom-hooks/use-escape";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");


const Modal = (props) => {

    useEscape(props.setOpen)
    const ref = useOutside(props.open, props.setOpen)

    return createPortal(
         <section className={styles.modalWrapper}>
             <div className={styles.modalContent} ref={ref} >
                 <div className={`pr-10 pl-10 ${styles.nav}`}>
            <div className={`text text_type_main-medium ${styles.headerModal}`}>{props.header} </div>
                    <div className={`pt-15   ${styles.close}`}> <CloseIcon onClick={()=> props.setOpen(false)} type="primary" /></div>
                 </div>
             {props.children}
             </div>
             <ModalOverlay/>
        </section>, modalRoot
    )
};

Modal.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool,
    children: PropTypes.element
}

export default Modal;