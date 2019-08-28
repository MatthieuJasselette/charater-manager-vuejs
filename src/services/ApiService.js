import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  }
})

export default {
  getRaid() {
    return apiClient.get('/raid')
  },

  // User routes
  getUsers() {
    return apiClient.get('/user')
  },

  getUser(id) {
    return apiClient.get('/user/' + id)
  },

  updateUser(id, user) {
    return apiClient.put('/user/' + id, user)
  },

  registerUser(user) {
    return apiClient.post('/register', user)
  },

  logUserIn(user) {
    return apiClient.post('/login', user)
  },

  // Character routes
  getCharacters() {
    return apiClient.get('/character')
  },

  getCharacter(id) {
    return apiClient.get('/character/' + id)
  },

  createCharacter(character) {
    return apiClient.post('/character', character)
  },

  updateCharacter(id, character) {
    return apiClient.put('/character/' + id, character)
  }
}
