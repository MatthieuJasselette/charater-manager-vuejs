<template>
  <div class="about">
    <h3>
      This is the home page that will display the current raid composition
      through the CharacterCard component.
    </h3>
    <span
      v-if="session.role === 'admims'"
      class="button badge -fill-gradient"
      @click="saveSnapshot"
      >Save current Roster</span
    >
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
  methods: {
    saveSnapshot() {
      this.$store.dispatch('saveSnapshot')
    }
  },
  created() {
    this.$store.dispatch('fetchRaid')
  },
  computed: mapState({
    raid: state => state.raids.raid,
    session: state => state.users.session
  })
}
</script>
