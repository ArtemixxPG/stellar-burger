import {TIngredient, TSelectedIngredient} from "../../utils/prop-types-constants";
import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISelectedIngredientsState {
    selectedBun: TIngredient | TSelectedIngredient | null
    selectedIngredients: Array<TSelectedIngredient>
}

const initialState: ISelectedIngredientsState = {
    selectedBun: null,
    selectedIngredients: []
}

const selectedIngredientsSlice = createSlice({
    name: 'selected-ingredients',
    initialState,
    reducers: {
        removeBun(state) {
            state.selectedBun = null
        },
        addIngredient(state, action: PayloadAction<TSelectedIngredient>) {
            state.selectedIngredients = [...state.selectedIngredients, action.payload]
        },
        removeIngredient(state, action: PayloadAction<string>) {
            state.selectedIngredients =  [...state.selectedIngredients].filter(item => item.id !== action.payload)
        },
        addBun(state, action: PayloadAction<TSelectedIngredient | TIngredient>) {
            state.selectedBun = action.payload
        },

        setIngredients(state, action: PayloadAction<Array<TSelectedIngredient>>){
            state.selectedIngredients = action.payload
        }
    }
    }
)

export const {removeBun, addIngredient, removeIngredient, addBun, setIngredients} = selectedIngredientsSlice.actions
export const selectedIngredientsReducer = selectedIngredientsSlice.reducer
export type TSelectedIngredientsActions = PayloadAction<TSelectedIngredient> | PayloadAction<Array<TSelectedIngredient>>
    | PayloadAction<string> | Action