<template>
  <div class="about">
    <h3>
      This is the home page that will display the current raid composition
      through the CharacterCard component.
    </h3>
    <CharacterCard
      v-for="character of raid"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    CharacterCard
  },
  created() {
    this.$store.dispatch('fetchRaid')
  },
  computed: mapState(['raid'])
}
</script>
