import {useCallback} from 'react';
import Modal from "../../modal/modal";
import ModalContentOrderComplete from "../../modal-content/modal-content-order-complete/modal-content-order-complete";
import {useLocation, useNavigate} from "react-router-dom";

const OrderComplete = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const onClose = useCallback(() => {
        location?.state?.background && navigate(location.state.background)
    }, [location, navigate])

    return (
        <Modal close={onClose} header=''>
            <ModalContentOrderComplete/>
        </Modal>
    );
};

export default OrderComplete;