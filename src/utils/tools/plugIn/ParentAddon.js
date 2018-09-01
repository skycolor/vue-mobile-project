
export default class ParentAddon {
  constructor() {

  }
  // 处理路由的before钩子函数
  handleRouterBeforeEach(to, from, next, store, storage) {
    let isLogin = store.getters.getIsLogin
    if (!isLogin && to.path.indexOf('login') < 0) {       //未登录，去登录界面
      next('/login/index')
    } else if (isLogin && to.path.indexOf('login') >= 0) {     //登录状态，去登录页则跳转首页
      next('/home/tab1')
    } else {
      this.handlePageDirection(to, from, store, storage)
      next()
    }
  }
  // 处理页面跳转
  handlePageDirection(to, from, store, storage) {
    const toIndex = storage.get(to.path)
    const fromIndex = storage.get(from.path)
    let historyCount = storage.get(storage.staticName.PAGE_COUNT) * 1 || 0
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.dispatch('updataDirection', 'forward')
      } else {
        store.dispatch('updataDirection', 'reverse')
      }
    } else {
      ++historyCount
      storage.set(storage.staticName.PAGE_COUNT, historyCount)
      to.path !== '/' && storage.set(to.path, historyCount)
      store.dispatch('updataDirection', 'forward')
    }
  }
  // 处理路由的after钩子函数
  handleRouterAfterEach(to) {
    let tit = to.name
    if (tit) {
      document.title = tit
    }
  }
  // 页面加载完成
  pageReady() {

  }
  // 绑定分享链接
  bindShareMessage() {

  }
  // 初始化分享
  initBindShareMessage() {

  }
}
