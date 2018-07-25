import Vue from 'vue'
import Router from 'vue-router'
import Base from '@/components/Base'

Vue.use(Router)

export default new Router({
  routes: [
    // 404界面
    {
      path: '*' ,
      name: '404' ,
      component: function (resolve, reject) {
        require(['@/components/pages/err/404'], resolve)
      }
    } ,
    // 默认去首页
    {
      path: '/',
      redirect: to => {
        return '/home'
      }
    },
    // 登录界面
    {
      path: '/login' ,
      name: 'login' ,
      component: Base ,
      redirect: to => {
        return '/login/index'
      } ,
      children: [
        {
          path: 'index',
          name: '登录' ,
          component: function (resolve, reject) {
            require(['@/components/pages/login/index'], resolve)
          }
        }
      ]
    } ,
    // 首页界面
    {
      path: '/home' ,
      name: 'home' ,
      component: Base ,
      redirect: to => {
        return '/home/index'
      } ,
      children: [
        {
          path: 'index',
          name: '首页' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/index'], resolve)
          }
        }
      ]
    }
  ]
})
