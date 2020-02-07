import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Skill from '@/components/Skill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },

    {
      path: '/works',
      name: 'Work',
      component: Work
    }
  ]
})
