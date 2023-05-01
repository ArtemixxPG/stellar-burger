import styles from './skeleton.module.scss'


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