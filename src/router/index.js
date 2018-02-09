import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

import testComponent from '@/components/test/test'
import homeComponent from '@/components/home/home'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: testComponent

    },
    {
      path: '/home',
      name: 'home',
      meta: {
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      component: homeComponent

    },
  ]
})
