<template>
  <div class="about">
    <h1>This edits user #{{ id }} through the UserForm component</h1>
    <UserForm />
  </div>
</template>

<script>
import UserForm from '@/components/CharacterForm.vue'

export default {
  components: {
    UserForm
  },
  props: ['id']
}
</script>
