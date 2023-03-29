import styles from './skeleton.module.scss'
import {FC} from "react";


interface ISkeleton {
    type?: string;
    name: string;
}

const Skeleton = ({type = '', name}: ISkeleton) => {
    return (
        <div className={`text text_type_main-default ${styles.skeleton} ${styles[type]}`}>
            {name}
        </div>
    );
};

export default Skeleton;