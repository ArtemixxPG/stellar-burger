import React from 'react';
import styles from "./icon.module.scss";


interface IIcon {
    url: string | undefined;
}
const Icon = ({url}:IIcon) => {
    return (
        <li className={styles.wrapper}>
            <img className={styles.image}  src={url} alt=''/>
        </li>
    );
};

export default Icon;