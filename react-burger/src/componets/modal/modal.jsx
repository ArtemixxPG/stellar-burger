import React, {useState} from 'react';
import {createPortal} from "react-dom";
import useOutside from "../../custom-hooks/use-outside";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.scss'
import ModalOverlay from "./modal-overlay/modal-overlay";
import useEscape from "../../custom-hooks/use-escape";
import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";

const modalRoot = document.getElementById("modal");


const Modal = ({header, children}) => {

    const location = useLocation()
    const navigate = useNavigate()

    const onClose = React.useCallback(() => {
        location?.state?.background && navigate(location.state.background)
    }, [location.state, navigate])
    useEscape(onClose)
    const ref = useOutside(onClose)

    return createPortal(
         <section className={styles.modalWrapper}>
             <div className={styles.modalContent} ref={ref} >
                 <div className={`pr-10 pl-10 ${styles.nav}`}>
            <div className={`text text_type_main-medium ${styles.headerModal}`}>{header} </div>
                    <div className={`pt-15   ${styles.close}`}> <CloseIcon onClick={onClose} type="primary" /></div>
                 </div>
             {children}
             </div>
             <ModalOverlay/>
        </section>, modalRoot
    )
};

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Modal;