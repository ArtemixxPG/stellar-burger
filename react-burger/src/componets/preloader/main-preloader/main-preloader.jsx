import styles from './main-preloader.module.scss'

const MainPreloader = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.planet}>
                    <div className={styles.ring}></div>
                    <div className={styles.coverRing}></div>
                    <div className={styles.spots}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>Загрузка...</p>
            </div>
        </section>
    );
};

export default MainPreloader;