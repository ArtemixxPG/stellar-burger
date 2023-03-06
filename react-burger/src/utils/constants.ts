import {query, SUCCESS_REQUEST_LOGOUT_USER} from "../services/actions/user-actions";
import {URL_LOGOUT_USER} from "./URL";
import {getCookie} from "./cookie";

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
    {name: 'История заказов', path: '/register'}, {
        name: 'Выход', path: '/login', complete: {
            path: '/',
            //@ts-ignore
            onComplete: query(SUCCESS_REQUEST_LOGOUT_USER, URL_LOGOUT_USER, {token: getCookie('token')})
        }
    }]