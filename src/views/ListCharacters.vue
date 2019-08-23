<template>
  <div class="about">
    <h3>
      This is the page that will list the characters through the CharacterCard
      component
    </h3>
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
