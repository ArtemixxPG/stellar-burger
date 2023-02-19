
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
    {name:'История заказов', path: '/register'}, {name:'Выход', path: '/login', complete: {path: '/', onComplete:()=> {}}}]