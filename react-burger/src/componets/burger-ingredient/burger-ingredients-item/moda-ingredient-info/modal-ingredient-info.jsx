import React from 'react';
import ModalContentIngredient from "../../../modal-content/modal-content-ingredient/modal-content-ingredient";
import Modal from "../../../modal/modal";

const ModalIngredientInfo = () => {
    return (
        <Modal header='Детали ингредиента'>
            <ModalContentIngredient/>
        </Modal>
    );
};

export default ModalIngredientInfo;