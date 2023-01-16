
import styles from './modal-content-order-complete.module.scss'
import img from '../../../images/done.png'

const ModalContentOrderComplete = () => {
    return (
        <section className={`pl-25 pr-25 ${styles.orderContent}`}>
            <div className={`pt-9 pb-15 ${styles.id}`}>
                <span className='pb-8 text text_type_digits-large'>043536</span>
                <span className='text text_type_main-default'>Индификатор заказа</span>
            </div>
            <div className={styles.done}>
                <img src={img}/>
            </div>
            <div className={`pt-15 pb-30 ${styles.otherInfo}`}>
                <span className='pb-2 text text_type_main-small'>Ваш заказ начали готовить</span>
                <span className='text text_type_main-small text_color_inactive'>Дождитесь ожидания готовности на орбитальной станции</span>
            </div>
        </section>
    );
};

export default ModalContentOrderComplete;