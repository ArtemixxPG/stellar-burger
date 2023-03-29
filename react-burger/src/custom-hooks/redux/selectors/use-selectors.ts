import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState, TStore} from "../../../services/reducers/root/root-reducer";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const ingredientsSelector = useAppSelector(store => store.ingredients)
export const orderSelector = useAppSelector(store => store.order)
export const userSelector = useAppSelector(store => store.user)
export const selectedIngredientsSelector = useAppSelector(store => store.selectedIngredients)

export const itemIngredientsSelector = (id: string | undefined) => useAppSelector( store => {
    const ingredient = [...store.ingredients.types.buns, ...store.ingredients.types.mains,
        ...store.ingredients.types.sauces].find(el => el._id === id);

    return {
        name: ingredient?.name,
        image: ingredient?.image_large,
        nutrients: {
            calories: ingredient?.calories, fat: ingredient?.fat, carbohydrates: ingredient?.carbohydrates,
            proteins: ingredient?.proteins
        }
    }
} )
