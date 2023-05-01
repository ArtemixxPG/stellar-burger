import React, {memo} from 'react';
import {TIngredient} from "../../../../../utils/prop-types-constants";
import IconIngredient from "../icon/icon-ingredient";

import styles from './list-icon.module.scss'

const SIZE_BOX = 6

interface IList {
    ingredients: Array<TIngredient | undefined>
}

const ListIcon = ({ingredients}: IList) => {

    const showIngredients = ingredients.length > SIZE_BOX ? ingredients.slice(0, SIZE_BOX) : ingredients

    const overSize = ingredients.length - SIZE_BOX

    const orderList = showIngredients?.map((item, index) => {
        if(index > SIZE_BOX){
            return;
        }
        return (
            <IconIngredient key={index} urlImage={item?.image_mobile} index={index} overSize={overSize}/>
        )
    })

    return (
        <ul className={styles.wrapper}>
            {orderList}
        </ul>
    );
};

export default memo(ListIcon);