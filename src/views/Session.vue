<template>
  <div class="about">
    <form>
      <h3>Login</h3>
      <div class="field">
        <label>email</label>
        <input
          v-model="user.description"
          type="text"
          placeholder="Add an email"
        />
      </div>
      <div class="field">
        <label>password</label>
        <input
          v-model="user.password"
          type="text"
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
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
