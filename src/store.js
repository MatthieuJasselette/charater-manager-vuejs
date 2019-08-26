import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/ApiService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user)
    },

    SET_USERS(state, users) {
      state.users = users
    },

    SET_CHARACTERS(state, characters) {
      state.characters = characters
    },

    SET_RAID(state, raid) {
      state.raid = raid
    }
  },
  actions: {
    createUser({ commit }, user) {
      ApiService.postUser(user)
      commit('ADD_USER', user)
    },

    fetchUsers({ commit }) {
      ApiService.getUsers()
        .then(response => commit('SET_USERS', response.data.data))
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    },

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
  }
})
