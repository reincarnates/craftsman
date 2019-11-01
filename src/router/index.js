import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['@/views/Home/Home'], resolve)
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: (resolve) => require(['@/views/Supplier/Supplier'], resolve)
    },
    {
      path: '/characteristic',
      name: 'characteristic',
      component: (resolve) => require(['@/views/Characteristic/Characteristic'], resolve)
    }
  ]
})
