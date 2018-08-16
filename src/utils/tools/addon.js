import ParentAddon from './plugIn/ParentAddon'
import AliAddon from './plugIn/aliAddon'
import wxAddon from './plugIn/wxAddon'

class Addon {
  // 构造函数
  constructor () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      this.currentAddon = new wxAddon()
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
      this.currentAddon = new AliAddon()
    } else {
      this.currentAddon = new ParentAddon()
    }
  }
  // 处理路由的before钩子函数
  handleRouterBeforeEach (to, from, next, store, storage) {
    this.currentAddon.handleRouterBeforeEach(to, from, next, store, storage)
  }
  // 处理路由的after钩子函数
  handleRouterAfterEach (to, from) {
    this.currentAddon.handleRouterAfterEach(to, from)
  }
  // 页面加载完成
  pageReady(_this){
    this.currentAddon.pageReady(_this)
  }
  // 绑定分享链接
  bindShareMessage(_this, obj) {
    this.currentAddon.bindShareMessage(_this, obj)
  }
  // 初始化分享
  initBindShareMessage(_this, obj) {
    this.currentAddon.initBindShareMessage(_this, obj)
  }
}

export let addon = new Addon()
