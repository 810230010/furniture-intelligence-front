import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Summary = () => import('@/page/Summary/index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      component: Summary,
      name: 'summary'
    }
  ]
})
