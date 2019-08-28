import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const sessionString = localStorage.getItem('session')
    if (sessionString) {
      const sessionData = JSON.parse(sessionString)
      this.$store.commit('SET_SESSION', sessionData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logUserOut')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
