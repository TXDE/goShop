/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'

const BASE_URL = '/api'

export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

export const reqFoodTypes = () => ajax(BASE_URL + '/index_category')

export const reqShopList = (latitude, longitude) => ajax(BASE_URL + '/shops', {longitude, latitude})

export const reqSearchShop = (keyword, geohash) => ajax(BASE_URL + '/search_shops', {keyword, geohash})

export const reqCaptcha = () => ajax('/captcha')

export const reqLogin = (name, pwd, captcha) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')

export const reqCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})

export const reqLoginSms = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')

export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

export const reqLogout = () => ajax(BASE_URL + '/logout')

export const reqShopInfo = () => ajax('/info')

export const reqShopRatings = () => ajax('/ratings')

export const reqShopGodds = () => ajax('/goods')
