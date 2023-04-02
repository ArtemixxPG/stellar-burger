
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

export type TSelectedIngredient = TIngredient & {id: string}

export interface INutritions {
    calories: number
    proteins: number
    fat:number
    carbohydrates:number
}

export interface IError{
    message: string
    hasError: boolean
}

export interface IOrder {
    order_id: number
    name: string
}

export interface IUser {
    name: string
    email: string
}

export interface IPayloadUser {
    success: boolean
    user: IUser
    refreshToken: string
    accessToken: string
}

export interface IUserState {
    user: IUser
    hasLoading: boolean
    error: IError
    isLogIn: boolean
}

export interface ICurrentOrder {
    ingredients: Array<string>,
    _id: string,
    name: string
    status: string,
    number: string,
    createdAt: string,
    updatedAt: string
}

export interface IOrderList {
    orders: Array<ICurrentOrder>,
    total: number,
    totalToday: number
}

export interface IStatisticOrders {
    firstOrders?: Array<string>
    secondOrders?: Array<string>

}