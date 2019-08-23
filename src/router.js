import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Characters from '@/views/ListCharacters.vue'
import Users from '@/views/ListUsers.vue'
import Session from '@/views/Session.vue'
import DisplayCharacter from '@/views/DisplayCharacter.vue'
import DisplayUser from '@/views/DisplayUser.vue'
import CreateCharacter from '@/views/CreateCharacter.vue'
import EditCharacter from '@/views/EditCharacter.vue'
import EditUser from '@/views/EditUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/session',
      name: 'session',
      component: Session
    },
    {
      path: '/displaycharacter',
      name: 'displaycharacter',
      component: DisplayCharacter
    },
    {
      path: '/displayuser',
      name: 'displayuser',
      component: DisplayUser
    },
    {
      path: '/createcharacter',
      name: 'createcharacter',
      component: CreateCharacter
    },
    {
      path: '/editcharacter',
      name: 'editcharacter',
      component: EditCharacter
    },
    {
      path: '/edituser',
      name: 'edituser',
      component: EditUser
    }
  ]
})
