<template>
  <div class="about">
    <h3>
      This is the home page that will display the current raid composition
      through the CharacterCard component.
    </h3>
    <CharacterCard
      v-for="character of characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'
import ApiService from '@/services/ApiService.js'

export default {
  name: 'home',
  data() {
    return {
      characters: {}
    }
  },
  components: {
    CharacterCard
  },
  created() {
    ApiService.getRaid()
      .then(response => {
        this.characters = response.data.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
