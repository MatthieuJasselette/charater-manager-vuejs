<template>
  <div class="about">
    <form @submit.prevent="submitUser">
      <h3>Fill in the following form</h3>
      <div class="field">
        <label>Name</label>
        <input v-model="user.name" type="text" placeholder="Add an user name" />
      </div>
      <div class="field">
        <label>Email</label>
        <input v-model="user.email" type="email" placeholder="Add an email" />
      </div>
      <div v-show="!userToEdit" class="field">
        <label>Password</label>
        <input
          v-model="user.password"
          type="password"
          placeholder="Add a password"
        />
      </div>
      <div class="field">
        <div v-if="!user.image.name">
          <label>Select an image</label>
          <input type="file" @change="onFileChange" accept="image/*" />
        </div>
        <div v-else>
          <img :src="'http://localhost:8000/thumbs/' + user.image.name" />
          <input
            type="button"
            class="button badge -fill-gradient"
            @click="removeImage"
            value="Remove image"
          />
        </div>
      </div>
      <div class="field">
        <label>Is_available</label>
        <input v-model="user.is_available" type="checkbox" />
      </div>
      <div v-show="userToEdit" class="field">
        <label>Main_char_id</label>
        <select v-model="user.main_char_id">
          <option disabled value>No character selected</option>
          <option
            v-for="character of user.characters"
            :key="character.id"
            :value="character.id"
            >{{ character.name }}</option
          >
        </select>
      </div>
      <input type="submit" class="button badge -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    userToEdit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      user: this.userToEdit ? this.userToEdit : this.createFreshUser()
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },

    createImage(file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = e => {
        vm.user.image.name = e.target.result
      }
      reader.readAsDataURL(file)
    },

    removeImage: function() {
      this.user.image = {}
    },

    createFreshUser() {
      return {
        name: '',
        email: '',
        password: '',
        is_available: false,
        main_char_id: '',
        image: {}
      }
    },

    submitUser() {
      return this.userToEdit ? this.updateUser() : this.registerUser()
    },

    registerUser() {
      this.$store.dispatch('registerUser', this.user).then(() => {
        this.$router.push({
          name: 'home'
        })
        this.user = this.createFreshUser()
      })
    },

    updateUser() {
      this.$store
        .dispatch('updateUser', this.user)
        .then(() => {
          this.$router.push({
            name: 'displayuser',
            params: { id: this.user.id }
          })
          this.user = this.createFreshUser()
        })
        .catch(error => {
          console.log(error)
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
