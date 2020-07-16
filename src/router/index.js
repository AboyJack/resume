import Vue from 'vue'
import Router from 'vue-router'

import ResumeIndex from '@/pages'

Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'resume',
      component: ResumeIndex
    }
  ]
})