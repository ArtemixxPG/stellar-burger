import {FC, memo, ReactElement, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import useOutside from "../../custom-hooks/use-outside";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.scss'
import ModalOverlay from "./modal-overlay/modal-overlay";
import useEscape from "../../custom-hooks/use-escape";
import PropTypes from "prop-types";
import {useLocation, useNavigate} from "react-router-dom";

interface IModal{
    close:() => void
    header: string
    children: ReactElement
}

const Modal:FC<IModal> = ({close, header, children}) => {

    useEscape(close)
    const ref = useOutside(close)

    const modalRoot = useMemo(
        () => document.getElementById('modal') as HTMLLIElement,
        [],)

    return createPortal(
        <section className={styles.modalWrapper}>
            <div className={styles.modalContent} ref={ref}>
                <div className={`pr-10 pl-10 ${styles.nav}`}>
                    <div className={`text text_type_main-medium ${styles.headerModal}`}>{header} </div>
                    <div className={`pt-15   ${styles.close}`}><CloseIcon onClick={close} type="primary"/></div>
                </div>
                {children}
            </div>
            <ModalOverlay/>
        </section>, modalRoot
    )
};



export default memo(Modal);