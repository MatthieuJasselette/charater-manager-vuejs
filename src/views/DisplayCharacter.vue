<template>
  <div class="about">
    <h3>{{ character.name }}</h3>
    <p>{{ character.description }}</p>
    <p>
      Build :
      <a :href="character.build_url">Link</a>
    </p>

    <router-link
      v-if="isLoggedIn && sessionId === character.user.id"
      :to="{ name: 'editcharacter', params: { id: character.id } }"
      >Character edition</router-link
    >
    <span
      v-if="isLoggedIn && sessionId === character.user.id"
      class="button badge -fill-gradient"
      @click="deleteCharacter"
      >Delete</span
    >
    <h4>Owner</h4>
    <UserCard :user="character.user" />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import { mapState } from 'vuex'

export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    UserCard
  },
  created() {
    this.$store.dispatch('fetchCharacter', this.id)
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    ...mapState({
      character: state => state.characters.character,
      sessionId: state => state.users.session.id
    })
  },
  methods: {
    deleteCharacter() {
      this.$store
        .dispatch('deleteCharacter', this.character)
        .then(this.$router.push({ name: 'characters' }))
    }
  }
}
</script>
