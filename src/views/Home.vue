<template>
  <div class="about">
    <h3>
      This is the home page that will display the current raid composition
      through the CharacterCard component.
    </h3>
    <CharacterCard />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    CharacterCard
  },
  props: {
    id: {
      type: Number
    }
  },
  created() {
    axios
      .get('http://localhost:8000/api/v1/raid')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
