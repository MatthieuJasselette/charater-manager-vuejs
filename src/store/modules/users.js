import ApiService from '@/services/ApiService.js'

export const state = {
  users: [],
  user: {}
}

export const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id)
  }
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },

  SET_USER(state, user) {
    state.user = user
  },

  ADD_USER(state, user) {
    state.users.push(user)
  }
}

export const actions = {
  fetchUsers({ commit }) {
    ApiService.getUsers()
      .then(response => commit('SET_USERS', response.data.data))
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  fetchUser({ commit, getters }, id) {
    let user = getters.getUserById(id)
    if (user) {
      commit('SET_USER', user)
    } else {
      ApiService.getUser(id)
        .then(response => commit('SET_USER', response.data.data))
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },

  createUser({ commit }, user) {
    ApiService.postUser(user)
    commit('ADD_USER', user)
  }
}
