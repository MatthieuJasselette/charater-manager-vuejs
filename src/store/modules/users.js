import ApiService, { apiClient } from '@/services/ApiService.js'

export const state = {
  users: [],
  user: {},
  loggedUser: {},
  session: {
    token: '',
    role: '',
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

  SET_LOGGED_USER(state, user) {
    state.loggedUser = user
  },

  UPDATE_USER(state, user) {
    state.user = user
  },

  ADD_USER(state, user) {
    state.users.push(user)
  },

  REMOVE_USER(state, id) {
    state.users.filter(user => user.id !== id)
  },

  SET_SESSION(state, session) {
    localStorage.setItem('session', JSON.stringify(session))
    apiClient.defaults.headers.common.Authorization = session.token
    state.session = session
  },

  DESTROY_SESSION(state) {
    localStorage.removeItem('session')
    apiClient.defaults.headers.common.Authorization = null
    state.session = {
      token: '',
      role: '',
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
          message: 'There was a problem fetching the users: ' + error.message
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
            message: 'There was a problem fetching the user: ' + error.message
          }
          dispatch('notification/add', notification, {
            root: true
          })
        })
    }
  },
  fetchLoggedUser({ commit, getters, dispatch }, id) {
    let user = getters.getUserById(id)
    if (user) {
      commit('SET_LOGGED_USER', user)
    } else {
      ApiService.getUser(id)
        .then(response => commit('SET_LOGGED_USER', response.data.data))
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching the user: ' + error.message
          }
          dispatch('notification/add', notification, {
            root: true
          })
        })
    }
  },

  updateUser({ commit, dispatch }, user) {
    ApiService.updateUser(user.id, user)
      .then(response => {
        commit('UPDATE_USER', response.data.data)
        const notification = {
          type: 'success',
          message: 'Your user profile has been updated!'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
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

  deleteUser({ commit, dispatch }, user) {
    ApiService.deleteUser(user.id)
      .then(commit('REMOVE_USER', user.id))
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

  updateImage({ dispatch }, { image, id }) {
    ApiService.updateImage(image, id)
      .then(() => {
        const notification = {
          type: 'success',
          message: 'Your user profile has been updated!'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem updating the profile: ' + error.message
        }
        console.log(notification)
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  registerUser({ commit, dispatch }, user) {
    return ApiService.registerUser(user)
      .then(response => {
        commit('ADD_USER', user)
        commit('SET_SESSION', {
          token: `Bearer ${response.data.access_token}`,
          role: response.data.role,
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
        commit('SET_SESSION', {
          token: `Bearer ${response.data.access_token}`,
          role: response.data.role,
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
    commit('DESTROY_SESSION')
  }
}
