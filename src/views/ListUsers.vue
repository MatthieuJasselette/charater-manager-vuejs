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
import { mapState } from 'vuex'

export default {
  components: {
    UserCard
  },
  created() {
    this.$store.dispatch('fetchUsers')
  },
  computed: mapState({
    users: state => state.users.users
  })
}
</script>
