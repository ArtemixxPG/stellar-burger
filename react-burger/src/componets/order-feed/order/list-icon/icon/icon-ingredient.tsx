import styles from './icon-ingredient.module.scss'
import {memo} from "react";

interface IIcon {
    urlImage: string | undefined,
    index?: number,
    overSize?: number
}

const IconIngredient = ({urlImage, index, overSize} : IIcon) => {

    return (
        <li className={styles.wrapper} style={{left: 24 + (index !== undefined ? index * 64 : 0), zIndex:index !== undefined ? -index : 0}}>
            <img className={styles.image}  src={urlImage} alt=''/>
            {index && overSize ? index === 5 &&  overSize > 0 ? (<p className={`text  text_type_main-default text_type_digits-default ${styles.count}`}>
                {`+${overSize}`}</p>) : null : null}
        </li>
    );
};


export default memo(IconIngredient);