import ApiService from '@/services/ApiService.js'

export const state = {
  characters: [],
  character: {}
}

export const getters = {
  getCharacterById: state => id => {
    return state.characters.find(character => character.id === id)
  }
}

export const mutations = {
  SET_CHARACTERS(state, characters) {
    state.characters = characters
  },

  SET_CHARACTER(state, character) {
    state.character = character
  },

  ADD_CHARACTER(state, character) {
    state.characters.push(character)
  },

  UPDATE_CHARACTER(state, character) {
    state.character = character
  },

  REMOVE_CHARACTER(state, id) {
    state.characters.filter(character => character.id !== id)
  }
}

export const actions = {
  fetchCharacters({ commit, dispatch }) {
    ApiService.getCharacters()
      .then(response => commit('SET_CHARACTERS', response.data.data))
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

  fetchCharacter({ commit, getters, dispatch }, id) {
    let character = getters.getCharacterById(id)
    if (character) {
      commit('SET_CHARACTER', character)
    } else {
      ApiService.getCharacter(id)
        .then(response => commit('SET_CHARACTER', response.data.data))
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

  createCharacter({ commit, dispatch }, character) {
    return ApiService.createCharacter(character)
      .then(response => {
        commit('ADD_CHARACTER', response.data.data)
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
          message:
            'There was a problem creating your character: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
        throw error
      })
  },

  updateCharacter({ commit, dispatch }, character) {
    ApiService.updateCharacter(character.id, character)
      .then(response => commit('UPDATE_CHARACTER', response.data.data))
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

  deleteCharacter({ commit, dispatch }, character) {
    ApiService.deleteCharacter(character.id)
      .then(commit('REMOVE_CHARACTER', character.id))
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
