import styles from './order-page.module.scss'
import ModalContentOrder from "../../componets/modal-content/modal-content-order/modal-content-order";
import useSocket from "../../custom-hooks/socket/use-socket";
import {SOCKET_ORDER_ALL_URL} from "../../utils/URL";
import {getCookie} from "../../utils/cookie";

interface IOrderPage {
    protectedPage?: boolean;
}
const OrderPage = ({protectedPage = false}:IOrderPage) => {

    const endpoint = protectedPage ? `?token=${getCookie('auth').split(' ')[1]}` : SOCKET_ORDER_ALL_URL

    useSocket(endpoint)

    return (
        <main className={styles.wrapper}>
            <ModalContentOrder/>
        </main>
    );
};

export default OrderPage;