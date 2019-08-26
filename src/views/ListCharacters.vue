<template>
  <div class="about">
    <h3>
      This is the page that will list the characters through the CharacterCard
      component
    </h3>
    <CharacterCard
      v-for="character of characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CharacterCard
  },
  created() {
    this.$store.dispatch('fetchCharacters')
  },
  computed: mapState({
    characters: state => state.characters.characters
  })
}
</script>
