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

  createEvent({ commit, dispatch }, user) {
    return ApiService.postUser(user).then(() => {
      commit('ADD_USER', user)
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
  }
}
