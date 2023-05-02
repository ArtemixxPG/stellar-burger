import {memo, ReactElement, useMemo} from 'react';
import {createPortal} from "react-dom";
import useOutside from "../../custom-hooks/use-outside";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './modal.module.scss'
import ModalOverlay from "./modal-overlay/modal-overlay";
import useEscape from "../../custom-hooks/use-escape";

interface IModal{
    close:() => void
    header: string
    children: ReactElement
}

const Modal = ({close, header, children}: IModal) => {

    useEscape(close)
    const ref = useOutside(close)

    const modalRoot = useMemo(
        () => document.getElementById('modal') as HTMLLIElement,
        [],)

    return createPortal(
        <section id='modal-content' className={styles.modalWrapper}>
            <div className={styles.modalContent} ref={ref}>
                <div className={`pr-10 pl-10 ${styles.nav}`}>
                    <div className={`text text_type_main-medium ${styles.headerModal}`}>{header} </div>
                    <div id='close-icon' onClick={close} className={`pt-15   ${styles.close}`}><CloseIcon type="primary"/></div>
                </div>
                {children}
            </div>
            <ModalOverlay/>
        </section>, modalRoot
    )
};



export default memo(Modal);