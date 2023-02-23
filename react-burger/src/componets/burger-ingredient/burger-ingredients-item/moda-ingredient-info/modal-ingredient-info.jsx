
import ModalContentIngredient from "../../../modal-content/modal-content-ingredient/modal-content-ingredient";
import Modal from "../../../modal/modal";
import {useCallback} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ModalIngredientInfo = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const onClose = useCallback(() => {
        location?.state?.background && navigate(location.state.background)
    }, [location.state, navigate])

    return (
        <Modal close={onClose} header='Детали ингредиента'>
            <ModalContentIngredient/>
        </Modal>
    );
};

export default ModalIngredientInfo;