import Vue from 'vue'
import App from './App'
import router from './router'

// 引入资源文件
import './icons'

// 引入内部封装包
import store from './store'
import plugins from './components/common'
import utils from './utils'

// 引入工具包
import FastClick from 'fastclick'     //快速点击，去除移动端200ms延迟的问题
import moment from 'moment'     //时间处理

// 使用快速点击插件
FastClick.attach(document.body)

// 加入参数至vue原型链
Vue.prototype.moment = moment
Vue.prototype.addon = utils.addon

// 加载公共组件
Vue.use(plugins)

// 路由处理
router.beforeEach((to, from, next) => {
  utils.addon.handleRouterBeforeEach(to, from, next)
})
router.afterEach((to, from) => {
  utils.addon.handleRouterAfterEach(to, from)
})

new Vue({
  el: '#app',
  store ,
  router,
  components: { App },
  template: '<App/>'
})
