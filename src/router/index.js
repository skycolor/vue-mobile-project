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
      component: function (resolve, reject) {
        require(['@/components/pages/home/index'], resolve)
      } ,
      redirect: to => {
        return '/home/tab1'
      } ,
      children: [
        {
          path: 'tab1',
          name: 'tab1' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/tab/tab1Page'], resolve)
          }
        } , 
        {
          path: 'tab2',
          name: 'tab2' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/tab/tab2Page'], resolve)
          }
        } ,
        {
          path: 'tab3',
          name: 'tab3' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/tab/tab3Page'], resolve)
          }
        } ,
        {
          path: 'tab4',
          name: 'tab4' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/tab/tab4Page'], resolve)
          }
        } ,
        {
          path: 'tab5',
          name: 'tab5' ,
          component: function (resolve, reject) {
            require(['@/components/pages/home/tab/tab5Page'], resolve)
          }
        } 
      ]
    } ,
    // 音乐
    {
      path: '/music' ,
      name: 'music' ,
      component: Base ,
      redirect: to => {
        return '/music/index'
      } ,
      children: [
        {
          path: 'index',
          name: '音乐' ,
          component: function (resolve, reject) {
            require(['@/components/pages/music/index'], resolve)
          }
        }
      ]
    } 
  ]
})
