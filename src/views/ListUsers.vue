<template>
  <div class="about">
    <h1>
      This is the page that will list the Users through the UserCard component
    </h1>
    <UserCard />
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
export default {
  components: {
    UserCard
  }
}
</script>
