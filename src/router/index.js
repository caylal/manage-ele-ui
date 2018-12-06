import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/Home.vue'], resolve),
      meta: { title: 'Home'},
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../views/Dashboard.vue'], resolve),
          meta: {title: '首页'}
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/Login.vue'], resolve)
    }
  ]
})
