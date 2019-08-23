<template>
  <div class="about">
    <h1>This edits character #{{ id }} through the CharacterForm component</h1>
    <CharacterForm />
  </div>
</template>

<script>
import CharacterForm from '@/components/CharacterForm.vue'

export default {
  components: {
    CharacterForm
  },
  props: ['id']
}
</script>
