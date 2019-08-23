<template>
  <div id="nav">
    <router-link :to="{ name: 'home' }">Home</router-link>|
    <router-link :to="{ name: 'characters' }">Characters</router-link>|
    <router-link :to="{ name: 'users' }">Users</router-link>||
    <router-link :to="{ name: 'session' }">Session</router-link>|
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
