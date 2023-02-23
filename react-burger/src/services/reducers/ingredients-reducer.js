import {
    ERROR_REQUEST_INGREDIENTS,
    REQUEST_INGREDIENTS,
    SUCCESS_REQUEST_INGREDIENTS,
} from "../actions/ingedients-actions";
import {INGREDIENT_TYPES} from "../../utils/constants";

const initialState = {
    types: {
        buns: [],
        sauces: [],
        mains: []
    },
    hasErrors: false,
    hasLoading: true,
    errorMessage: ''
}

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_INGREDIENTS:
            return {
                ...state,
                hasLoading: true,
                hasErrors: false
            }
        case SUCCESS_REQUEST_INGREDIENTS:
            return {
                ...state,
                types: {
                    buns: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.BUNS)),
                    sauces: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.SAUCES)),
                    mains: action.payload.filter(item => item.type.includes(INGREDIENT_TYPES.MAINS))
                },
                hasLoading: false,
                hasErrors: false
            }
        case ERROR_REQUEST_INGREDIENTS:
            return {
                ...state,
                hasLoading: false,
                hasErrors: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}