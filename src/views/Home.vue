<template>
  <div class="about">
    <h1>
      This is the home page that will display the current raid composition
      through the CharacterCard component.
    </h1>
    <CharacterCard />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  name: 'home',
  components: {
    CharacterCard
  },
  props: {
    id: {
      type: Number
    }
  }
}
</script>
