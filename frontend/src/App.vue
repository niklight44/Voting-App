<script setup>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  store.commit('setUserFromLocalStorage');
});
</script>

<template>
  <TheHeader />
  <TheSidebar />
  <router-view></router-view>
</template>


<style scoped>
  .wrapper{
    display: flex;
    flex-flow: row wrap;
    min-height: 500px;
  }

  .wrapper h1{
    padding-top: 150px;
  }

  h1 span{
    color: #7971f1;
  }
</style>
