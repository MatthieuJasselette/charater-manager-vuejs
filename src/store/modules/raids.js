import ApiService from '@/services/ApiService.js'

export const state = {
  raid: [],
  snapshot: {
    snapshot: []
  }
}

export const getters = {}

export const mutations = {
  SET_RAID(state, raid) {
    state.raid = raid
  },

  SET_SNAPSHOT(state, snapshot) {
    state.snapshot = snapshot
  },

  REMOVE_SNAPSHOT(state, id) {
    state.snapshot.filter(snapshot => snapshot.id !== id)
  }
}

export const actions = {
  fetchRaid({
    commit,
    dispatch
  }) {
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
  },

  fetchSnapshot({
    commit,
    getters,
    dispatch
  }, id) {
    let snapshot = getters.getSnapshotById(id)
    if (snapshot) {
      commit('SET_SNAPSHOT', snapshot)
    } else {
      ApiService.getSnapshot(id)
        .then(response => commit('SET_SNAPSHOT', response.data.data))
        .catch(error => {
          const notification = {
            type: 'error',
            message: 'There was a problem fetching the snapshot: ' + error.message
          }
          dispatch('notification/add', notification, {
            root: true
          })
        })
    }
  },

  saveSnapshot({
    commit,
    dispatch
  }) {
    let snapshot = {
      snapshot: []
    }
    state.raid.map(character => {
      snapshot.snapshot.push({
        id: character.id,
        name: character.name,
        owner: character.user.name
      })
    })
    ApiService.saveSnapshot(snapshot)
      .then(response => {
        commit('ADD_SNAPSHOT', response.data)
        const notification = {
          type: 'success',
          message: 'The current roster composition has been stored!'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem saving the snapshot: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },

  deleteSnapshot({
    commit,
    dispatch
  }, snapshot) {
    ApiService.deleteSnapshot(snapshot.id)
      .then(commit('REMOVE_CHARACTER', snapshot.id))
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem updating the profile: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  }
}