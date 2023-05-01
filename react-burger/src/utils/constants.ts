import {URL_LOGOUT_USER, USER_ORDERS} from "./URL";
import {getCookie} from "./cookie";
import {requestUser} from "../services/actions/user-actions";

export const INGREDIENT_TYPES = {
    BUNS: 'bun',
    MAINS: 'main',
    SAUCES: 'sauce'
}
export const TYPE_HEADER_MENU_ITEM = {
    CONSTRUCTOR: 'constructor',
    LIST_ORDER: 'listOrder',
    ACCOUNT: 'account'
}

export const PROFILE_MENU_ITEMS = [{name: 'Профиль', path: '/profile'},
    {name: 'История заказов', path: USER_ORDERS}, {
        name: 'Выход', path: '/login', complete: {
            path: '/',
            onComplete: requestUser({success: false, url:URL_LOGOUT_USER, values: {token: getCookie('token')}})
        }
    }]

export enum WebsocketStatus {
    CONNECTING = 'CONNECTING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export const ORDERS_SHOW = 6

export enum ORDER_TYPE  {
    COOK = 'cook',
    DONE = 'done'
}