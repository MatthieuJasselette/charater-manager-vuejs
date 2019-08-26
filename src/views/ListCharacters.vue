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
import ApiService from '@/services/ApiService.js'

export default {
  components: {
    CharacterCard
  },
  data() {
    return {
      characters: {}
    }
  },
  created() {
    ApiService.getCharacters()
      .then(response => {
        this.characters = response.data.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
