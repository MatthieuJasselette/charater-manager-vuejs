import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js'
import * as users from '@/store/modules/users.js'
// import * as character from '@/store/modules/character.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users
    // character
  },
  state: {},
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters
    },

    SET_RAID(state, raid) {
      state.raid = raid
    }
  },
  actions: {
    fetchCharacters({ commit }) {
      ApiService.getCharacters()
        .then(response => commit('SET_CHARACTERS', response.data.data))
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },

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
