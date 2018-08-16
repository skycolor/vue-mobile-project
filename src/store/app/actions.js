import * as types from './mutations_types'
export default {
  updateLoginStatus : ({commit}, isLogin) => {
    commit(types.UPDATE_LOGIN_STATUS, isLogin)
  } ,
  updatePageInfo : ({commit}, pageInfo) => {
    commit(types.UPDATE_PAGE_INFO, pageInfo)
  } ,
  updataDirection : ({commit}, direction) => {
    commit(types.UPDATE_DIRECTION, direction)
  } 
}
