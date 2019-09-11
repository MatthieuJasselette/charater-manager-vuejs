<template>
  <router-link
    v-if="user"
    class="event-link"
    :to="{ name: 'displayuser', params: { id: user.id } }"
  >
    <div class="event-card -shadow">
      <h4 class="title">{{ user.name }}</h4>
      <p v-if="user.is_available">This user is available</p>
      <p v-else>This user is currently unavailable</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    user: {
      type: Object
    }
  }
}
</script>
<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
