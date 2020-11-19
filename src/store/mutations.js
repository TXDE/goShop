/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOODTYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USERINFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      food.conunt = 1
    } else {
      food.count++
    }
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
    }
  }
}
