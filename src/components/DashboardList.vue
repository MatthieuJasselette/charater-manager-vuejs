<template>
  <div>
    <div>
      <span
        class="tab"
        :class="{ activeTab: selectedTab === tab }"
        v-for="(tab, index) of tabs"
        :key="index"
        @click="selectedTab = tab"
        >{{ tab }}</span
      >
      <div v-show="selectedTab === 'Users'">
        <ul>
          <li class="d-flex" v-for="(user, index) of users" :key="index">
            <h4>{{ user.name }}</h4>
            <router-link
              class="button badge -fill-gradient"
              :to="{
                name: 'displayuser',
                params: {
                  id: user.id
                }
              }"
              >See User</router-link
            >
            <span class="button badge -fill-gradient" @click="deleteCharacter"
              >Delete</span
            >
          </li>
        </ul>
      </div>

      <div v-show="selectedTab === 'Characters'">
        <ul>
          <li v-for="(character, index) of characters" :key="index">
            <h4>{{ character.name }}</h4>
          </li>
        </ul>
      </div>

      <div v-show="selectedTab === 'Snapshots'">
        <ul>
          <li v-for="(snapshot, index) of snapshots" :key="index">
            <h4>{{ snapshot.date }}</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array
    },
    characters: {
      type: Array
    },
    snapshots: {
      type: Array
    }
  },
  data() {
    return {
      selectedTab: 'Users',
      tabs: ['Users', 'Characters', 'Snapshots']
    }
  },
  methods: {
    deleteCharacter() {}
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab {
  margin-left: 20px;
  cursor: pointer;
}

.button {
  text-decoration: none;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
