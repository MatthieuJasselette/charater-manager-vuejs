<template>
  <div class="about">
    <h3>This is the page that will display {{ user.name }}'s datas</h3>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'edituser', params: { id: '1' } }"
      >User edition</router-link
    >
    <CharacterCard
      v-for="character of user.characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  props: {
    id: {
      type: Number
    }
  },
  components: {
    CharacterCard
  },
  data() {
    return {
      user: {}
    }
  },
  created() {
    ApiService.getUser(this.id)
      .then(response => {
        this.user = response.data.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
