import ApiService from '@/services/ApiService.js'
import axios from 'axios'

export const state = {
  users: [],
  user: {},
  session: {
    token: localStorage.getItem('token') || '',
    id: ''
  }
}

export const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id)
  },
  isLoggedIn: state => !!state.session.token
}

export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },

  SET_USER(state, user) {
    state.user = user
  },

  UPDATE_USER(state, user) {
    state.user = user
  },

  ADD_USER(state, user) {
    state.users.push(user)
  },

  ADD_SESSION(state, response) {
    localStorage.setItem('token', response.token)
    state.session = response
  },

  DESTROY_SESSION(state) {
    state.session = {
      token: '',
      id: ''
    }
  }
}

export const actions = {
  fetchUsers({ commit, dispatch }) {
    ApiService.getUsers()
      .then(response => commit('SET_USERS', response.data.data))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  fetchUser({ commit, getters, dispatch }, id) {
    let user = getters.getUserById(id)
    if (user) {
      commit('SET_USER', user)
    } else {
      ApiService.getUser(id)
        .then(response => commit('SET_USER', response.data.data))
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

  updateUser({ commit, dispatch }, user) {
    ApiService.updateUser(user.id, user)
      .then(response => commit('UPDATE_USER', response.data.data))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem updating the profile: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  registerUser({ commit, dispatch }, user) {
    return ApiService.registerUser(user)
      .then(response => {
        commit('ADD_USER', user)
        commit('ADD_SESSION', {
          token: `Bearer ${response.data.access_token}`,
          id: response.data.id
        })
        const notification = {
          type: 'success',
          message: 'Your user has been created!'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your profile: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw error
      })
  },

  logUserIn({ commit, dispatch }, user) {
    return ApiService.logUserIn(user)
      .then(response => {
        dispatch('fetchUser', response.data.id)
        commit('ADD_SESSION', {
          token: `Bearer ${response.data.access_token}`,
          id: response.data.id
        })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem logging you in: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw error
      })
  },

  logUserOut({ commit }) {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    commit('DESTROY_SESSION')
  }
}
