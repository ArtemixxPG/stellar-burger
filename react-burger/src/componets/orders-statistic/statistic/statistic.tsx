
import styles from './statistic.module.scss'

interface IStatistic {
    header: string;
    total: number;
}
const Statistic = ({header, total}:IStatistic) => {
    return (
        <section className={styles.wrapper}>
            <h2 className={`text text_type_main-medium`}>{header}</h2>
            <p className={`text text_type_digits-large ${styles.total}` }>{total}</p>
        </section>
    );
};

export default Statistic;