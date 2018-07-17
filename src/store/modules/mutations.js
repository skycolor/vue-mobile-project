import * as types from './mutations_types'

export default {
  [types.UPDATE_LOGIN_STATUS] (state, isLogin) {
    state.isLogin = isLogin
  },
  [types.UPDATE_LOGIN_STATUS] (state, pageInfo) {
    state.pageInfo = Object.assign({} , state.pageInfo , pageInfo )
  }
}
