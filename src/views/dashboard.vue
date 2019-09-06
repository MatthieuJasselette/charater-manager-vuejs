<template>
  <div>
    Admin Dashboard
    <DashboardList
      :users="users"
      :characters="characters"
      :snapshots="snapshots"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DashboardList from '@/components/DashboardList.vue'

export default {
  components: {
    DashboardList
  },
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
