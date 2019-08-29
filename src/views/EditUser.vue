<template>
  <div class="about">
    <h3>You are editing {{ user.name }}</h3>
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
  props: {
    id: {
      type: String,
      default: null
    }
  },
  created() {
    this.$store.dispatch('fetchUser', this.id)
  },
  computed: mapState({
    user: state => state.users.user
  }),
  beforeRouteEnter(to, from, next) {
    if (to.matched.some(record => record.meta.restricted)) {
      next(vm => {
        if (
          vm.$options.propsData.id !==
          vm.$store._modules.root.state.users.session.id
        ) {
          vm.$router.push({ name: 'home' })
        }
      })
    }
    next()
  }
}
</script>
