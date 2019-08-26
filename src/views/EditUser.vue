<template>
  <div class="about">
    <h3>This edits user #{{ id }} through the UserForm component</h3>
    <UserForm />
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  components: {
    UserForm
  },
  props: {
    id: {
      type: Number
    }
  }
}
</script>
