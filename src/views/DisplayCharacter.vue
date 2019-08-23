<template>
  <div class="about">
    <h1>This is the page that will display a character datas</h1>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'editcharacter' }">Character edition</router-link>
  </div>
</template>
