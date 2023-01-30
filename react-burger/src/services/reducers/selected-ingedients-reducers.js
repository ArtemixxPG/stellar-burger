import {
    ADD_BUN,
    ADD_INGREDIENT,
    REMOVE_BUN,
    REMOVE_INGREDIENT, SET_INGREDIENTS, SET_TOTAL_PRICE
} from "../actions/selected-ingedients-actions";

const initialState = {
    selectedBun: null,
    selectedIngredients: [],
    totalPrice: 0
}

export const selectedIngredientsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients, action.payload]
            }
        case REMOVE_INGREDIENT:
            return {
                ...state,
                selectedIngredients: [...state.selectedIngredients].filter(item => item.id !== action.payload)
            }
        case ADD_BUN:
            return {
                ...state,
                selectedBun: action.payload
            }
        case REMOVE_BUN:
            return {
                ...state,
                selectedBun: null
            }
        case SET_INGREDIENTS: {
                return {
                    ...state,
                    selectedIngredients: action.payload
                }
        }
        case SET_TOTAL_PRICE:
            const priceBun = state.selectedBun ? state.selectedBun.price : 0
            return {
                ...state,
                totalPrice: priceBun * 2 + state.selectedIngredients
                    .reduce((totalPrice, ingredient) => totalPrice + ingredient.price, 0)
            }
        default:
            return state
    }
}