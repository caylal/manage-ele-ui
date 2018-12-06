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
          meta: {title: '系统首页'}
        },
        {
          path: '/table',
          component: resolve => require(['../views/Table.vue'], resolve),
          meta: {title: '表格'}
        },
        {
          path: '/tabs',
          component: resolve => require(['../views/Tabs.vue'], resolve),
          meta: {title: 'tab标签'}
        },
        {
          path: '/form',
          component: resolve => require(['../views/Form.vue'], resolve),
          meta: {title: '表单'}
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/Login.vue'], resolve)
    }
  ]
})
