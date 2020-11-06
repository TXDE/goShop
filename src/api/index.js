/*
包含n个接口请求函数的模块
 */
import ajax from "./ajax";

export const reqAddress = (geohash) => ajax(`/position${geohash}`);

export const reqFoodTypes = () => ajax('/index_category');

export const reqShopList = (latitude, longitude) => ajax(`/shops`, {longitude, latitude});

export const reqSearchShop = (keyword, geohash) => ajax('/search_shops', {keyword, geohash});

export const reqCaptcha = () => ajax('/captcha');

export const reqLogin = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'POST');

export const reqCode = (phone) => ajax('/sendcode', {phone});

export const reqLoginSms = (phone, code) => ajax('/login_sms', {phone, code}, "POST");

export const reqUserInfo = () => ajax('/userinfo');
export const reqLogout = () => ajax('/logout');
