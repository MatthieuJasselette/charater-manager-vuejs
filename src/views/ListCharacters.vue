<template>
  <div class="about">
    <h1>
      This is the page that will list the characters through the CharacterCard
      component
    </h1>
    <router-link :to="{ name: 'displaycharacter', params: { id: '1' } }"
      >Character details</router-link
    >
  </div>
</template>
