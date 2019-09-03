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
      <div v-if="userToEdit" class="field">
        <div v-if="user.image.name">
          <img :src="user.image.name" />
          <input
            type="button"
            class="button badge -fill-gradient"
            @click="removeImage"
            value="Remove image"
          />
        </div>
        <div v-else>
          <label>
            Select a picture
            <input
              type="file"
              accept="image/*"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />
          </label>
          <button type="button" v-on:click="submitFile()">Submit</button>
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
      user: this.userToEdit ? this.userToEdit : this.createFreshUser(),
      isImgChanged: false,
      file: ''
    }
  },
  methods: {
    handleFileUpload() {
      this.isImgChanged = true
      this.file = this.$refs.file.files[0]
    },

    removeImage: function() {
      this.previousImgId = this.user.image.id
      this.user.image = { name: '', id: this.user.image.id }
    },

    createFreshUser() {
      return {
        name: '',
        email: '',
        password: '',
        is_available: false,
        main_char_id: ''
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
            name: 'users'
            // name: 'displayuser',
            // params: { id: this.user.id }
          })
          this.user = this.createFreshUser()
        })
        .catch(error => {
          console.log(error)
        })
      if (this.isImgChanged) {
        this.submitFile()
      }
    },

    submitFile() {
      // send id of img to replace
      let formData = new FormData()
      formData.append('file', this.file)
      this.$store.dispatch('updateImage', formData)
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
