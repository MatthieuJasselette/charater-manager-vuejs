import Vue from 'vue'
import Vuex from 'vuex'
import * as users from '@/store/modules/users.js'
import * as characters from '@/store/modules/characters.js'
import * as raids from '@/store/modules/raids.js'
import * as dashboard from '@/store/modules/dashboard.js'
import * as notification from '@/store/modules/notifications.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    characters,
    raids,
    dashboard,
    notification
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})
