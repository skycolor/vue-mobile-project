import ParentAddon from './ParentAddon'
export default class AliAddon extends ParentAddon {
  constructor () {
    super()
  }
  // 处理路由的before钩子函数
  handleRouterBeforeEach (to, from, next, store) {
    super.handleRouterBeforeEach(to, from, next)
  }
  // 处理路由的after钩子函数
  handleRouterAfterEach (to, from) {
    super.handleRouterAfterEach(to, from)
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
