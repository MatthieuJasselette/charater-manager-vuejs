<template>
  <div class="about">
    <h1>
      This is the page that will list the characters through the CharacterCard
      component
    </h1>
    <CharacterCard />
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard.vue'

export default {
  components: {
    CharacterCard
  }
}
</script>
