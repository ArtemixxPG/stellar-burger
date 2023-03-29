import {TypedUseSelectorHook, useSelector as useDefaultSelector} from "react-redux";
import {RootState} from "../../../services/reducers/root/root-reducer";


export const useSelector = () => {

    const appSelector: TypedUseSelectorHook<RootState> = useDefaultSelector

    const ingredientsSelector = appSelector(store => store.ingredients)
    const orderSelector = appSelector(store => store.order)
    const userSelector = appSelector(store => store.user)
    const selectedIngredientsSelector = appSelector(store => store.selectedIngredients)

    const itemIngredientsSelector = (id: string | undefined) => appSelector(store => {
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
    })

    return {ingredientsSelector, orderSelector, userSelector, selectedIngredientsSelector, itemIngredientsSelector}
}
