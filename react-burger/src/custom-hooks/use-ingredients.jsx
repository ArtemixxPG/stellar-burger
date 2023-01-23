import {createContext, useContext, useEffect, useMemo, useReducer, useState} from "react";
import PropTypes from "prop-types";
import {IngredientPropTypes} from "../utils/prop-types-constants";


const ingredient = {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    carbohydrates: 0,
    calories: 0,
    fat: 0,
    price: 0,
    image: '',
    image_mobile:'',
    image_large: '',
    __v: 0
}

const selectedIngredient = {
    bun: ingredient,
    stuff: []
}

const IngredientContext = createContext(null)


const reducer = (state, action) => {
    if(action.type === 'set'){
        return {bun: action.bun, stuff: action.stuff}
    }
    if(action.type === 'reset'){
        return {bun: ingredient, stuff: []}
    } else {
        throw new Error(`Wrong type of action: ${action.type}`);
    }
}

export const IngredientsProvider = (props) => {


    const [selectedIngredients, dispatchSelectedIngredients] = useReducer(reducer, selectedIngredient, undefined)


    const value = useMemo(()=>({
        selectedIngredients, dispatchSelectedIngredients
    }), [selectedIngredients])

    useEffect(()=>{
        const countIngredients = (array) => {
            return Math.floor(Math.random() * (array.length))
        }

        const selectIngredients = (array) => {
            let selected = []
            let count = 0
            while (count < countIngredients(array)){
                selected.push(array[countIngredients(array)])
                count++
            }
            return selected
        }

        if(props.ingredients.buns.length!==0 || props.ingredients.mains.length !==0 || props.ingredients.sauces.length !== 0) {

            let bun = props.ingredients.buns[countIngredients(props.ingredients.buns)]
            let sauces = selectIngredients(props.ingredients.sauces)
            let mains = selectIngredients(props.ingredients.mains)

            dispatchSelectedIngredients({type: 'set', bun: bun, stuff: [...sauces, ...mains]})
        }
    }, [JSON.stringify(props.ingredients.buns), JSON.stringify(props.ingredients.sauces),
        JSON.stringify(props.ingredients.mains)])

    return (
        <IngredientContext.Provider value={value}>
            {props.children}
        </IngredientContext.Provider>
    );
};

IngredientsProvider.propTypes = {
    ingredients: PropTypes.shape(
        {
            buns:PropTypes.arrayOf(IngredientPropTypes).isRequired,
            sauces: PropTypes.arrayOf(IngredientPropTypes).isRequired,
            mains: PropTypes.arrayOf(IngredientPropTypes).isRequired
        }
    ).isRequired
}

export const useIngredients = () => useContext(IngredientContext)