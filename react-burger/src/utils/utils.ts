import {BASE_URL} from "./URL";
import React from "react";

export const hashCode = (s: string) => {
    return s.split("").reduce(function (a:number, b:string) {
        a = ((a << 5) - a) + b.charCodeAt(0) + Math.floor(Math.random() * 10) + 1;
        return a & a;
    }, 0);
}



export const sortArray = <T> (dragIndex:number, hoverIndex:number, arr:T[]) => {
    const item: T = arr[dragIndex];
    const sortArr: T[] = [...arr]
    sortArr.splice(dragIndex, 1)
    sortArr.splice(hoverIndex, 0, item)

    return sortArr

}

export const checkResponse = <T>(res:Response): T & {success:boolean} | Promise<any> => {
    return res?.ok ? res.json() : res.json().then((err:any) => Promise.reject(err))
}

export const checkSuccess = <T> (res: T & {success:boolean} & Promise<any>): T & {success:boolean} | PromiseLike<T & {success:boolean}> => {
    return res && res?.success? res : res.then((err:any) => Promise.reject(err) )
}

export const request = <T>(endpoint:string, options:any) => {
    return fetch(`${BASE_URL}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess)
}



export const calculateTotalPrice = (selectedBun: any, selectedIngredients: any) => {
    return (selectedBun ? selectedBun.price : 0) * 2 + selectedIngredients
        .reduce((totalPrice: number, ingredient: any) => totalPrice + ingredient.price, 0)
}

