<template>
  <div class="about">
    <h3>{{ character.name }}</h3>
    <p>{{ character.description }}</p>
    <p>
      Build :
      <a :href="character.build_url">Link</a>
    </p>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'editcharacter', params: { id: '1' } }"
      >Character edition</router-link
    >
    <UserCard :user="character.user" />
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js'
import UserCard from '@/components/UserCard.vue'

export default {
  props: {
    id: {
      type: Number
    }
  },
  components: {
    UserCard
  },
  data() {
    return {
      character: {}
    }
  },
  created() {
    ApiService.getCharacter(this.id)
      .then(response => {
        this.character = response.data.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
