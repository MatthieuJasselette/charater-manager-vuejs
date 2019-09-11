import axios from 'axios'
import router from '@/router'
import store from '@/store/store'

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      console.log('expired or invalid token')
      store.dispatch('logUserOut')
      router.push('/session')
    }
    return Promise.reject(error)
  }
)

export default {
  // raid route
  getRaid() {
    return apiClient.get('/raid')
  },

  deleteSnapshot(id) {
    return apiClient.delete('/raidsnapshot/' + id)
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

  deleteUser(id) {
    return apiClient.delete('/user/' + id)
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
  },

  deleteCharacter(id) {
    return apiClient.delete('/character/' + id)
  },

  // Image routes
  // createImage(formData) {
  //   console.log('payload', formData)
  //   return apiClient.post('/image', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  //   })
  // },

  updateImage(formData, id) {
    formData.append('_method', 'PUT')
    return apiClient.post('/image/' + id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },

  // deleteImage(id) {
  //   return apiClient.delete('/image/' + id)
  // }

  // Admin routes
  getDashboardUsers() {
    return apiClient.get('/dashboard-users')
  },

  getDashboardCharacters() {
    return apiClient.get('/dashboard-characters')
  },

  getDashboardSnapshots() {
    return apiClient.get('/dashboard-snapshots')
  },

  saveSnapshot(snapshot) {
    let stringSnap = JSON.stringify(snapshot)

    console.log(stringSnap)
    return apiClient.post('/raidsnapshot', stringSnap)
  }
}
