<template>
  <div class="about">
    <h3>
      This is the page that will list the Users through the UserCard component
    </h3>
    <UserCard v-for="user of users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import ApiService from '@/services/ApiService.js'

export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: {}
    }
  },
  created() {
    ApiService.getUsers()
      .then(response => {
        this.users = response.data.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
