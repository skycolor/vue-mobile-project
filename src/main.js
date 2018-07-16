import Vue from 'vue'
import App from './App'
import router from './router'

// 引入工具包
import FastClick from 'fastclick'





// 使用快速点击插件
FastClick.attach(document.body)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
