import React from 'react';

import styles from './not-found.module.scss'

const NotFound = () => {
    return (
        <main className={styles.wrapper}>
            <h1 className={`text text_type_main-large text text_type_digits-large ${styles.title}`}>ОШИБКА 404! СТРАНИЦА
                НЕ НАЙДЕНА</h1>
        </main>
    );
};

export default NotFound;