import {
    ERROR_REQUEST_INGREDIENTS, ingredientsError, ingredientsRequest,
    REQUEST_INGREDIENTS,
    SUCCESS_REQUEST_INGREDIENTS,
} from "../actions/ingedients-actions";
import {INGREDIENT_TYPES} from "../../utils/constants";
import {IError, TIngredient} from "../../utils/prop-types-constants";
import {Action, CaseReducer, createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


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




const ingredientsSuccess:  CaseReducer<IIngredient, PayloadAction<Array<TIngredient>>> = (state, action):void => {
    state.types.buns =  action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.BUNS))
    state.types.sauces = action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.SAUCES))
    state.types.mains = action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.MAINS))
    state.hasLoading = false
    state.error = initialState.error
}



const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        ingredientsSuccess
    },
    extraReducers: (builder) => {
        builder.addCase(ingredientsRequest, (state) => {
           return {
               ...state,
               hasLoading: true,
               error: initialState.error
           }
        })
        builder.addCase(ingredientsError, (state, action) => {
            return {
                ...state,
                hasLoading: false,
                error: {
                    message: action.payload,
                    hasError: true
                }
            }
        })
    }
})


export const ingredientsActions = ingredientSlice.actions
export const ingredientsReducer = ingredientSlice.reducer

// export const ingredientsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case REQUEST_INGREDIENTS:
//             return {
//                 ...state,
//                 hasLoading: true,
//                 hasErrors: false
//             }
//         case SUCCESS_REQUEST_INGREDIENTS:
//             return {
//                 ...state,
//                 types: {
//                     //@ts-ignore
//                     buns: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.BUNS)),
//                     //@ts-ignore
//                     sauces: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.SAUCES)),
//                     //@ts-ignore
//                     mains: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.MAINS))
//                 },
//                 hasLoading: false,
//                 hasErrors: false
//             }
//         case ERROR_REQUEST_INGREDIENTS:
//             return {
//                 ...state,
//                 hasLoading: false,
//                 hasErrors: true,
//                 errorMessage: action.payload
//             }
//
//         default:
//             return state
//     }
// }