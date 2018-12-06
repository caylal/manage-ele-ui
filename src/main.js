// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
Vue.use(ElementUI, { size: 'small' })

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('user_info');
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    // 如果是管理员权限则可进入
    role === 'admin' ? next() : next('/403')
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
