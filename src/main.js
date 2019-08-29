import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
// import axios from 'axios'

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
  },
  render: h => h(App)
}).$mount('#app')
