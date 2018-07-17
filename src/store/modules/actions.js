import * as types from './mutations_types'
export default {
  updateLoginStatus : ({commit}, isLogin) => {
    commit(types.UPDATE_LOGIN_STATUS, isLogin)
  } ,
  updatePageInfo : ({commit}, pageInfo) => {
    commit(types.UPDATE_LOGIN_STATUS, pageInfo)
  }
}
