import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js'
import * as users from '@/store/modules/users.js'
import * as characters from '@/store/modules/characters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    characters
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
    fetchRaid({ commit }) {
      ApiService.getRaid()
        .then(response => commit('SET_RAID', response.data.data))
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {}
})
