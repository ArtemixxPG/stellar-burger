
import styles from './list-icon.module.scss'

interface IListIcon {
    urlImage: string,
    index: number
}

const ListIcon = ({urlImage, index} : IListIcon) => {
    return (
        <li className={styles.wrapper}>
            <img style={{left: index * 48, zIndex:index}} src={urlImage} alt=''/>
        </li>
    );
};


export default ListIcon;