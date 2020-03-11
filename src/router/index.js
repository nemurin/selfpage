import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Skill from '@/components/Skill'
import Profile from '@/components/Profile'
import Language from '@/components/Language'
import Hobby from '@/components/Hobby'

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
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

    {
      path: '/works',
      name: 'Work',
      component: Work
    },

    {
      path: '/languages',
      name: 'Language',
      component: Language
    },

    {
      path: '/hobby',
      name: 'Hobby',
      component: Hobby
    },
  ]
})
