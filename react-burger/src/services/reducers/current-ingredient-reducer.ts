import {REMOVE_CURRENT_INGREDIENT, SET_CURRENT_INGREDIENT} from "../actions/current-ingredient-actions";


const initialState = {
    imageLarge: '',
    name: '',
    nutrients: {
        calories: 0,
        proteins: 0,
        fat: 0,
        carbohydrates: 0
    }
}
//@ts-ignore
export const currentIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_INGREDIENT:
            return {
                imageLarge: action.payload.image_large,
                name: action.payload.name,
                nutrients: {
                    calories: action.payload.calories,
                    proteins: action.payload.proteins,
                    fat: action.payload.fat,
                    carbohydrates: action.payload.carbohydrates
                }
            }
        case REMOVE_CURRENT_INGREDIENT:
            return initialState

        default :
            return state
    }
}