<template>
  <div class="about">
    <h3>{{ user.name }}</h3>
    <p v-if="user.is_available">This user is available</p>
    <p v-else>This user is currently unavailable</p>
    <router-link
      v-if="isLoggedIn"
      :to="{ name: 'edituser', params: { id: user.id } }"
      >User edition</router-link
    >
    <h4>{{ user.name }}'s characters</h4>
    <CharacterCard
      v-for="character of user.characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'
import { mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    CharacterCard
  },
  created() {
    this.$store.dispatch('fetchUser', this.id)
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    ...mapState({
      user: state => state.users.user
    })
  }
}
</script>
