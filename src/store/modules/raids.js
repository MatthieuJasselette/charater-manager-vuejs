import ApiService from '@/services/ApiService.js'

export const state = {
  raid: [],
  snapshots: [],
  snapshot: {}
}

export const getters = {
  getSnapshotById: state => id => {
    return state.snapshots.find(snapshot => snapshot.id === id)
  }
}

export const mutations = {
  SET_RAID(state, raid) {
    state.raid = raid
  }
}

export const actions = {
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
}
