
export default class ParentAddon{
  constructor () {

  }
  // 处理路由的before钩子函数
  handleRouterBeforeEach (to, from, next, store) {
    let isLogin = store.getters.getIsLogin
    if(!isLogin && to.path.indexOf('login') < 0){       //未登录，去登录界面
      next('/login/index')
    }else if(isLogin && to.path.indexOf('login') >= 0){     //登录状态，去登录页则跳转首页
      next('/home/index')
    }else{
      next()
    }
  }
  // 处理路由的after钩子函数
  handleRouterAfterEach (to, from) {
    let tit = to.name
    if(tit){
      document.title = tit
    }
  }
  // 页面加载完成
  pageReady(_this){

  }
  // 绑定分享链接
  bindShareMessage(_this, obj) {

  }
  // 初始化分享
  initBindShareMessage(_this, obj) {

  }
}
