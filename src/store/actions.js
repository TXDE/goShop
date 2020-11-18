/*
通过mutations间接更新state的多个方法的对象
 */
import {
  reqAddress,
  reqFoodTypes,
  reqShopList,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGodds,
  reqShopRatings
} from '../api'
import {
  RECEIVE_SHOPS,
  RECEIVE_FOODTYPES,
  RECEIVE_ADDRESS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS
} from './mutation-types'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取食品分类
  async getFoodTypes ({commit}) {
    // 发送异步ajax请求
    const result = await reqFoodTypes()
    // 提交一个mutation
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOODTYPES, {foodTypes})
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发送异步ajax请求
    const result = await reqShopList(state.latitude, state.longitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },
  // 异步退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USERINFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo ({commit}, cb) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
      cb && cb()
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}, cb) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data()
      commit(RECEIVE_RATINGS, {ratings})
      cb && cb()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGodds()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback()
    }
  }
}
