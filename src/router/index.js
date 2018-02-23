import Vue from 'vue'
import Router from 'vue-router'
import MagicProgressBar from '@/components/MagicProgressBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MagicProgressBar',
      component: MagicProgressBar
    }
  ]
})
