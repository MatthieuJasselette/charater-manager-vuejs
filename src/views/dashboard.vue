<template>
  <div>Restricted to admin</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchDashboardUsers'),
      this.$store.dispatch('fetchDashboardCharacters'),
      this.$store.dispatch('fetchDashboardSnapshots')
  },
  computed: mapState({
    users: state => state.dashboard.users,
    characters: state => state.dashboard.characters,
    snapshots: state => state.dashboard.snapshots
  })
}
</script>

<style scoped></style>
