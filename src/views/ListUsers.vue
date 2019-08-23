<template>
  <div class="about">
    <h1>
      This is the page that will list the Users through the UserCard component
    </h1>
    <router-link :to="{ name: 'displayuser', params: { id: '1' } }"
      >User details</router-link
    >|
  </div>
</template>
