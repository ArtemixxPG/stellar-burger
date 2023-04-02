import BurgerConstructorItem from "../burger-cunstructor-item/burger-constructor-item";
import {useSelector} from "../../../custom-hooks/redux/selectors/use-selectors";


const BurgerListItem = () => {

    const {selectedIngredientsSelector} = useSelector()

    const selectedIngredients = selectedIngredientsSelector.selectedIngredients


    return (
        <>
            {selectedIngredients.map((item, index: number) => {
                return (
                        <BurgerConstructorItem key={item.id} id={item.id} name={item.name}
                                               index={index}
                                               image={item.image_mobile}
                                               price={item.price}/>
                )
            })}
        </>
    );
};

export default BurgerListItem;