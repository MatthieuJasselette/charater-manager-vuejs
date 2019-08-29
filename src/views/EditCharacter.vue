<template>
  <div class="about">
    <h3>You are editing {{ character.name }}</h3>
    <CharacterForm :characterToEdit="character" />
  </div>
</template>

<script>
import CharacterForm from '@/components/CharacterForm.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CharacterForm
  },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  created() {
    this.$store.dispatch('fetchCharacter', this.id)
  },
  computed: mapState({
    character: state => state.characters.character
  })
}
</script>
