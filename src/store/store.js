import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js'
import * as users from '@/store/modules/users.js'
import * as characters from '@/store/modules/characters.js'
import * as notification from '@/store/modules/notifications.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    characters,
    notification
  },
  state: {
    raid: []
  },
  mutations: {
    SET_RAID(state, raid) {
      state.raid = raid
    }
  },
  actions: {
    fetchRaid({ commit, dispatch }) {
      ApiService.getRaid()
        .then(response => commit('SET_RAID', response.data.data))
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching events: ' + error.message
          }
          dispatch('notification/add', notification, {
            root: true
          })
        })
    }
  },
  getters: {}
})
