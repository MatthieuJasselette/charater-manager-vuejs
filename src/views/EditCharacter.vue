<template>
  <div class="about">
    <h3>This edits character #{{ id }} through the CharacterForm component</h3>
    <CharacterForm />
  </div>
</template>

<script>
import CharacterForm from '@/components/CharacterForm.vue'

export default {
  components: {
    CharacterForm
  },
  props: {
    id: {
      type: Number
    }
  }
}
</script>
