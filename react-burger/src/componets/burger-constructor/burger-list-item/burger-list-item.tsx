import React, {useCallback} from 'react';
import BurgerConstructorItem from "../burger-cunstructor-item/burger-constructor-item";
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";


const BurgerListItem = () => {

    const {selectedIngredientsSelector} = useSelector()

    const selectedIngredients = selectedIngredientsSelector.selectedIngredients


    return (
        <>
            {selectedIngredients.map((item, index: number) => {
                return (
                    <li key={item.id}>

                        <BurgerConstructorItem id={item.id} name={item.name}
                                               index={index}
                                               image={item.image_mobile}
                                               price={item.price}/>
                    </li>
                )
            })}
        </>
    );
};

export default BurgerListItem;