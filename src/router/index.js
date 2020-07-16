import Vue from 'vue'
import Router from 'vue-router'

import ResumeIndex from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: ResumeIndex
    }
  ]
})