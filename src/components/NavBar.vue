<template>
  <div id="nav" class="nav">
    <router-link class="brand" :to="{ name: 'home' }">Home</router-link>
    <nav>
      <router-link :to="{ name: 'characters' }">Characters</router-link>
      <span>|</span>
      <router-link :to="{ name: 'users' }">Users</router-link>
    </nav>
    <div v-if="isLoggedIn">
      <router-link :to="{ name: 'createcharacter' }"
        >Character creation</router-link
      >
      <span @click="logOut" class="button badge -fill-gradient">Log out</span>
    </div>
    <router-link v-else :to="{ name: 'session' }">Session</router-link>
  </div>
</template>
<script>
// import { mapState } from 'vuex'

export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
    // loggedUser() {
    //   return this.$store.getters.getUserById(this.id) || ''
    // },
    // ...mapState({
    //   id: state => state.users.session.id
    // })
    // doesn't work
  },
  methods: {
    logOut() {
      this.$store.dispatch('logUserOut').then(() => {
        this.$router.push('/session')
      })
    }
  }
}
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
