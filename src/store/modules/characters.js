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
  }
}

export const actions = {
  fetchCharacters({ commit }) {
    ApiService.getCharacters()
      .then(response => commit('SET_CHARACTERS', response.data.data))
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  fetchCharacter({ commit, getters }, id) {
    let character = getters.getCharacterById(id)
    if (character) {
      commit('SET_CHARACTER', character)
    } else {
      ApiService.getCharacter(id)
        .then(response => commit('SET_CHARACTER', response.data.data))
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
}
