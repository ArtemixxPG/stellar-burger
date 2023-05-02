import {BASE_URL} from "./URL";
import {
    ICurrentOrder,
    TIngredient,
    TResponseData,
    TSelectedIngredient
} from "./prop-types-constants";
import {ORDER_TYPE, ORDERS_SHOW} from "./constants";

export const hashCode = (s: string) => {
    return s.split("").reduce(function (a:number, b:string) {
        a = ((a << 5) - a) + b.charCodeAt(0) + Math.floor(Math.random() * 10) + 1;
        return a & a;
    }, 0).toString();
}



export const sortArray = <T> (dragIndex:number, hoverIndex:number, arr:T[]) => {
    const item: T = arr[dragIndex];
    const sortArr: T[] = [...arr]
    sortArr.splice(dragIndex, 1)
    sortArr.splice(hoverIndex, 0, item)

    return sortArr

}

export const checkResponse = <T>(res:Response): Promise<TResponseData<T> & T> => {
    return res?.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const checkSuccess = <T>(res: TResponseData<T> & T) => {
    return res && res?.success?  res : res.then((err) => Promise.reject(err) )
}

export const request = <T>(endpoint:string, options?:any) => {
    return fetch(`${BASE_URL}${endpoint}`, options)
        .then(checkResponse<T>)
        .then(checkSuccess<T>)
}


export const ordersForShow = (orderList: Array<ICurrentOrder>, orderType: string) => {
    const list = orderList?.filter(el => el.status === orderType).map(el => el.number)
    return {
        firstOrders: list.slice(0, ORDERS_SHOW),
        secondOrders: list.slice(ORDERS_SHOW, 2 * ORDERS_SHOW)
    }
}


export const calculateTotalPrice = (selectedBun: TIngredient | TSelectedIngredient | null,
                                    selectedIngredients: Array<TSelectedIngredient>) => {
    return (selectedBun ? selectedBun.price : 0) * 2 + selectedIngredients
        .reduce((totalPrice: number, ingredient: TIngredient) => totalPrice + ingredient.price, 0)
}

export const calculateTotalPriceOrder = (ingredients: Array<TIngredient | undefined> ) => {
    return ingredients?.reduce((totalPrice, ingredient) => totalPrice + (ingredient ? ingredient.price : 0), 0)
}

export const log = (arg : any) => console.log(arg + 'NOT FOUND')

export function findIngredients (orderIdIngredients: Array<string> | undefined, ingredients: Array<TIngredient | undefined>):
    Array<TIngredient | undefined> {
    let orderIngredients: Array<TIngredient | undefined> = []
    orderIdIngredients?.forEach((item) => {
        orderIngredients = [...orderIngredients, ingredients.find(el => el?._id === item)]
    })
    return orderIngredients;
}

export const replaceStatus = (status: string | undefined) =>{
    let statusRu
    status === ORDER_TYPE.DONE ? statusRu = 'Выполнен' : status  === ORDER_TYPE.COOK ? statusRu = 'Готовится' : statusRu = 'Отменён'
    return statusRu
}

export const replaceBun = (ingredients: Array<TIngredient | undefined>) => {
    let array = [...new Set(ingredients)]
    if(array[0]?.type !== 'bun'){
        const bun = array.find(el => el?.type === 'bun')
        let newArray = array.filter(el => el?.type !== 'bun')
        newArray.splice(0, 0, bun)
        array = newArray
    }
    return array
}

export const getRandomElement = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}