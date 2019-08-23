<template>
  <div class="event-card -shadow">
    <h4 class="title">This is a character card</h4>
    <router-link :to="{ name: 'displayuser', params: { id: '1' } }"
      >User details</router-link
    >|
  </div>
</template>
