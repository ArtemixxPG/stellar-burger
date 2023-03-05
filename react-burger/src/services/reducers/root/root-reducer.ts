import {combineReducers} from "@reduxjs/toolkit";
import {currentIngredientReducer} from "../current-ingredient-reducer";
import {ingredientsReducer} from "../ingredients-reducer";
import {orderReducer} from "../order-reducer";
import {selectedIngredientsReducer} from "../selected-ingedients-reducers";
import {userReducer} from "../user-reducer";

export const rootReducer = combineReducers({
    currentIngredient: currentIngredientReducer,
    ingredients: ingredientsReducer,
    order: orderReducer,
    selectedIngredients: selectedIngredientsReducer,
    user: userReducer
})

export type TStore = ReturnType<typeof rootReducer>