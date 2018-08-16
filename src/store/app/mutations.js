import * as types from './mutations_types'

export default {
  [types.UPDATE_LOGIN_STATUS] (state, isLogin) {
    state.isLogin = isLogin
  },
  [types.UPDATE_PAGE_INFO] (state, pageInfo) {
    state.pageInfo = Object.assign({} , state.pageInfo , pageInfo )
  } ,
  [types.UPDATE_DIRECTION] (state, direction) {
    state.direction = direction
  }
}
