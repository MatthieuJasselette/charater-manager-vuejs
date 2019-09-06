import ApiService from '@/services/ApiService.js'

export const state = {
  users: [],
  characters: [],
  snapshots: []
}

export const getters = {}
export const mutations = {
  SET_D_USERS(state, users) {
    state.users = users
  },
  SET_D_CHARACTERS(state, characters) {
    state.characters = characters
  },
  SET_D_SNAPSHOTS(state, snapshots) {
    state.snapshots = snapshots
  }
}
export const actions = {
  fetchDashboardUsers({ commit, dispatch }) {
    ApiService.getDashboardUsers()
      .then(response => commit('SET_D_USERS', response.data.data))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching users: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  fetchDashboardCharacters({ commit, dispatch }) {
    ApiService.getDashboardCharacters()
      .then(response => commit('SET_D_CHARACTERS', response.data.data))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching characters: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  fetchDashboardSnapshots({ commit, dispatch }) {
    ApiService.getDashboardSnapshots()
      .then(response => commit('SET_D_SNAPSHOTS', response.data.data))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching SNAPSHOTS: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  }
}
