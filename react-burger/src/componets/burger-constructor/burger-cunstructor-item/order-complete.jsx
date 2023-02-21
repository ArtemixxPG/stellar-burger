import React from 'react';
import Modal from "../../modal/modal";
import ModalContentOrderComplete from "../../modal-content/modal-content-order-complete/modal-content-order-complete";

const OrderComplete = () => {
    return (
        <Modal header=''>
            <ModalContentOrderComplete/>
        </Modal>
    );
};

export default OrderComplete;