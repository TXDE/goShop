/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO, RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS, DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT, CLEAR_CARTS} from './mutation-types'

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
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CARTS] (state) {
    state.cartFoods.forEach(food => { food.count = 0 })
    state.cartFoods = []
  }
}
