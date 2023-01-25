import React, {useState} from 'react';
import {createPortal} from "react-dom";
import useOutside from "../../custom-hooks/use-outside";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.scss'
import ModalOverlay from "./modal-overlay/modal-overlay";
import useEscape from "../../custom-hooks/use-escape";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal");


const Modal = ({header, open, setOpen, children}) => {

    useEscape(setOpen)
    const ref = useOutside(open, setOpen)

    return createPortal(
         <section className={styles.modalWrapper}>
             <div className={styles.modalContent} ref={ref} >
                 <div className={`pr-10 pl-10 ${styles.nav}`}>
            <div className={`text text_type_main-medium ${styles.headerModal}`}>{header} </div>
                    <div className={`pt-15   ${styles.close}`}> <CloseIcon onClick={()=> setOpen(false)} type="primary" /></div>
                 </div>
             {children}
             </div>
             <ModalOverlay/>
        </section>, modalRoot
    )
};

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    setOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Modal;