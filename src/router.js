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

const router = new Router({
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
      path: '/character/:id',
      name: 'displaycharacter',
      component: DisplayCharacter,
      props: true
    },
    {
      path: '/user/:id',
      name: 'displayuser',
      component: DisplayUser,
      props: true
    },
    {
      path: '/characters/create',
      name: 'createcharacter',
      component: CreateCharacter,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/character/:id/edit',
      name: 'editcharacter',
      component: EditCharacter,
      props: true,
      meta: {
        // requiresAuth: true,
        restricted: true
      }
    },
    {
      path: '/user/:id/edit',
      name: 'edituser',
      component: EditUser,
      props: true,
      meta: {
        // requiresAuth: true,
        restricted: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('session')

  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !loggedIn
    // &&
    // !to.matched.some(record => record.meta.restricted)
  ) {
    next('/')
  }
  next()
})

export default router
