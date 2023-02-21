const BASE_URL = 'https://norma.nomoreparties.space/api'
const authPath = 'auth'
export const URL_POST = `${BASE_URL}/orders`
export const URL_GET_INGREDIENTS = `${BASE_URL}/ingredients`
export const URL_SENT_EMAIL = `${BASE_URL}/password-reset`
export const URL_RESET_PASSWORD = `${BASE_URL}/password-reset/reset`
export const URL_REGISTER_USER = `${BASE_URL}/${authPath}/register`
export const URL_LOGIN_USER = `${BASE_URL}/${authPath}/login`
export const URL_LOGOUT_USER = `${BASE_URL}/${authPath}/logout`
export const URL_GET_TOKEN = `${BASE_URL}/${authPath}/token`
export const URL_GET_USER = `${BASE_URL}/${authPath}/user`

