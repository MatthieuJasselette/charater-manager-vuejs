<template>
  <div>
    Welcome
    <router-link
      v-if="user"
      class="event-link"
      :to="{ name: 'displayuser', params: { id: user.id } }"
      >{{ user.name }}</router-link
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String
    }
  },
  created() {
    this.$store.dispatch('fetchUser', this.id)
  },
  computed: mapState({
    user: state => state.users.user
  })
}
</script>

<style scoped></style>
