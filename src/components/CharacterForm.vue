<template>
  <div class="about">
    <form @submit.prevent="submitCharacter">
      <h3>Fill in the following form</h3>
      <div class="field">
        <label>Name</label>
        <input
          v-model="character.name"
          type="text"
          placeholder="Add your character name"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <textarea
          v-model="character.description"
          placeholder="Add a description to your character"
        ></textarea>
      </div>
      <div class="field">
        <label>Build</label>
        <input
          v-model="character.build_url"
          type="text"
          placeholder="Add a link to an external template builder"
        />
      </div>
      <input type="submit" class="button badge -fill-gradient" value="Submit" />
    </form>
  </div>
</template>
<script>
export default {
  props: {
    characterToEdit: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      character: this.characterToEdit
        ? this.characterToEdit
        : this.createFreshCharacter()
    }
  },
  methods: {
    createFreshCharacter() {
      return {
        name: '',
        description: '',
        build_url: ''
      }
    },

    submitCharacter() {
      return this.characterToEdit
        ? this.updateCharacter()
        : this.createCharacter()
    },

    createCharacter() {
      this.$store.dispatch('createCharacter', this.character).then(() => {
        this.$router.push({
          name: 'characters'
        })
        this.character = this.createFreshCharacter()
      })
    },

    updateCharacter() {
      this.$store
        .dispatch('updateCharacter', this.character)
        .then(() => {
          this.$router.push({
            name: 'displaycharacter',
            params: { id: this.character.id }
          })
          this.character = this.createFreshCharacter()
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
