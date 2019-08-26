import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
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

  postUser(user) {
    return apiClient.post('/register', user)
  },

  // Character routes
  getCharacters() {
    return apiClient.get('/character')
  },

  getCharacter(id) {
    return apiClient.get('/character/' + id)
  }
}
