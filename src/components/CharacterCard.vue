<template>
  <div class="event-card -shadow">
    <h4 class="title">This is a character card</h4>
    <router-link :to="{ name: 'displaycharacter', params: { id: '1' } }"
      >Character details</router-link
    >
  </div>
</template>
