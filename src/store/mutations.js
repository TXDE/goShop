/*
直接更新state的多个方法的对象
 */
import {RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS, RECEIVE_USERINFO, RESET_USERINFO} from './mutation-types'

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
  }
}
