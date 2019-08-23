<template>
  <div class="about">
    <h3>This is the page that will display user #{{ id }} datas</h3>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'edituser', params: { id: '1' } }"
      >User edition</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  }
}
</script>
