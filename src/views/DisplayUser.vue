<template>
  <div class="about">
    <h1>This is the page that will display a user datas</h1>
    <router-link :to="{ name: 'createcharacter' }"
      >Character creation</router-link
    >
    <router-link :to="{ name: 'edituser' }">User edition</router-link>
  </div>
</template>
