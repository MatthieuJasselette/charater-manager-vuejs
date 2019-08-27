import ApiService from '@/services/ApiService.js'

export const state = {
  users: [],
  user: {},
  session: {
    token: '',
    id: ''
  }
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
  },

  ADD_SESSION(state, response) {
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

  registerUser({ commit, dispatch }, user) {
    return ApiService.registerUser(user).then(response => {
      commit('ADD_USER', user)
      commit('ADD_SESSION', {
        token: response.data.access_token,
        id: response.data.id
      })
      const notification = {
        type: 'success',
        message: 'Your user has been created!'
      }
      dispatch('notification/add', notification, {
        root: true
      }).catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw error
      })
    })
  },

  logUserIn({ commit, dispatch }, user) {
    return ApiService.logUserIn(user)
      .then(response => {
        // to store the token in local storage
        // localStorage.setItem('token', response.data.access_token)
        commit('ADD_SESSION', {
          token: response.data.access_token,
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
