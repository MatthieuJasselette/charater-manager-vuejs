<template>
  <div class="about">
    <form @submit.prevent="createSession">
      <h3>Login</h3>
      <div class="field">
        <label>email</label>
        <input v-model="user.email" type="text" placeholder="Add an email" />
      </div>
      <div class="field">
        <label>password</label>
        <input
          v-model="user.password"
          type="password"
          placeholder="Add a password"
        />
      </div>
      <input type="submit" class="button badge -fill-gradient" value="Submit" />
    </form>
    <UserForm />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  components: {
    UserForm
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    createSession() {
      this.$store.dispatch('logUserIn', this.user).then(() => {
        this.$router.push({
          name: 'home'
        })
      })
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
