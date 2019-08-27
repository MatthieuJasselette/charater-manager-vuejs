<template>
  <div class="about">
    <form @submit.prevent="registerUser">
      <h3>Fill in the following form</h3>
      <div class="field">
        <label>Name</label>
        <input v-model="user.name" type="text" placeholder="Add an user name" />
      </div>
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
      <div class="field">
        <label>is_available</label>
        <input
          v-model="user.is_available"
          type="text"
          placeholder="Define your availability"
        />
      </div>
      <input type="submit" class="button badge -fill-gradient" value="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  props: {
    userToEdit: {
      type: Object
    }
  },
  data() {
    return {
      user: this.userToEdit ? this.userToEdit : this.createFreshUser()
    }
  },
  methods: {
    createFreshUser() {
      return {
        name: '',
        email: '',
        password: '',
        is_available: ''
      }
    },
    registerUser() {
      this.$store.dispatch('registerUser', this.user).then(() => {
        this.$router.push({
          name: 'home'
        })
        this.user = this.createFreshUser()
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
