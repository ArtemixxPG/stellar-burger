import {number} from "prop-types";


export type TIngredient = {
    _id: string
    name: string
    type: string
    proteins: number
    carbohydrates: number
    calories: number
    fat: number
    price: number
    image: string
    image_mobile: string
    image_large: string
    __v: number
}

export interface INutritions {
    calories: number
    proteins: number
    fat:number
    carbohydrates:number
}