
import {INGREDIENT_TYPES} from "../../utils/constants";
import {IError, TIngredient} from "../../utils/prop-types-constants";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface ITypes{
    buns: Array<TIngredient>
    sauces: Array<TIngredient>
    mains: Array<TIngredient>
}

interface IIngredient {
    types: ITypes
    error: IError
    hasLoading: boolean
}

const initialState: IIngredient = {
    types: {
        buns: [],
        sauces: [],
        mains: []
    },
    error: {
        message: '',
        hasError: false
    },
    hasLoading: true
}

const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        ingredientsSuccess(state, action:PayloadAction<Array<TIngredient>>){
            state.types.buns =  action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.BUNS))
            state.types.sauces = action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.SAUCES))
            state.types.mains = action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.MAINS))
            state.hasLoading = false
            state.error = initialState.error
        },
        ingredientsRequest(state) {
            state.hasLoading = true
            state.error = initialState.error
        },
        ingredientsRequestError(state, action:PayloadAction<string>) {
            state.error = {
                message: action.payload,
                hasError: true
            }
            state.hasLoading = false
        }
    }
})


export const {ingredientsSuccess, ingredientsRequest, ingredientsRequestError} = ingredientSlice.actions
export const ingredientsReducer = ingredientSlice.reducer
export type TIngredientsActionsTypes = ReturnType<typeof ingredientsSuccess> | ReturnType<typeof ingredientsRequest> |
    ReturnType<typeof ingredientsRequestError>
