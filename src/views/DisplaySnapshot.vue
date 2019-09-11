<template>
  <div>
    <h4>Raid {{ snapshot.date }}</h4>
    <ul>
      <li
        class="flex-box"
        v-for="(character, index) of snapshot.composition"
        :key="index"
      >
        <router-link
          v-if="character"
          class="event-link"
          :to="{ name: 'displaycharacter', params: { id: character.id } }"
        >
          <h5>{{ character.name }}</h5>
        </router-link>
        <h6>Class : (not implemented yet)</h6>
        <h6>Owner: {{ character.owner }}</h6>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String
    }
  },
  created() {
    this.$store.dispatch('fetchSnapshot', this.id)
  },
  computed: mapState({
    snapshot: state => state.raids.snapshot
  })
}
</script>

<style scoped>
.flex-box {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
