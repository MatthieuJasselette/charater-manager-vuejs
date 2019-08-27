<template>
  <div class="about">
    <h3>This edits user #{{ id }} through the UserForm component</h3>
    <UserForm :userToEdit="user" />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { mapState } from 'vuex'

export default {
  components: {
    UserForm
  },
  props: ['id'],
  created() {
    this.$store.dispatch('fetchUser', this.id)
  },
  computed: mapState({
    user: state => state.users.user
  })
}
</script>
