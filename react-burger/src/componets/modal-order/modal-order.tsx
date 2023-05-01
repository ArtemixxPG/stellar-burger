import React, {useCallback} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Modal from "../modal/modal";
import ModalContentOrder from "../modal-content/modal-content-order/modal-content-order";

const ModalOrder = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const onClose = useCallback(() => {
        location?.state?.background && navigate(location.state.background)
    }, [location.state, navigate])

    return (
        <Modal close={onClose} header=''>
            <ModalContentOrder/>
        </Modal>
    );
};

export default ModalOrder;