<template>
  <div class="about">
    <h1>This is the page that will display character #{{ id }} datas</h1>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'editcharacter', params: { id: '1' } }"
      >Character edition</router-link
    >
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>
