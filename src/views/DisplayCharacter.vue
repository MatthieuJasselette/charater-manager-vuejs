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
    <router-link :to="{ name: 'editcharacter', params: { id: character.id } }"
      >Character edition</router-link
    >
    <span class="button badge -fill-gradient" @click="deleteCharacter"
      >Delete</span
    >
    <UserCard :user="character.user" />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import { mapState } from 'vuex'

export default {
  props: ['id'],
  components: {
    UserCard
  },
  created() {
    this.$store.dispatch('fetchCharacter', this.id)
  },
  computed: mapState({
    character: state => state.characters.character
  }),
  methods: {
    deleteCharacter() {
      this.$store
        .dispatch('deleteCharacter', this.character)
        .then(this.$router.push({ name: 'characters' }))
    }
  }
}
</script>
