<template>
  <div class="about">
    <h3>You are editing {{ character.name }}</h3>
    <CharacterForm :characterToEdit="character" />
  </div>
</template>

<script>
import CharacterForm from '@/components/CharacterForm.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CharacterForm
  },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  created() {
    this.$store.dispatch('fetchCharacter', this.id)
  },
  computed: mapState({
    character: state => state.characters.character
  })
  // ,
  // beforeRouteEnter(to, from, next) {
  //   if (to.matched.some(record => record.meta.restricted)) {
  //     next(vm => {
  //       // console.log(vm)
  //       console.log(vm.$store._modules.root.state.characters.character.user) // undefined
  //       // if (
  //       //   vm.$store._modules.root.state.characters.character.user.id !==
  //       //   vm.$store._modules.root.state.users.session.id
  //       // ) {
  //       //   vm.$router.push({ name: 'home' })
  //       // }
  //     })
  //   }
  //   next()
  // }
}
</script>
