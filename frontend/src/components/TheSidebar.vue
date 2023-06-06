<template>
    <div class="sidebar" v-if="user">
        <TheSidebarItem v-for="(sidebarItem, index) in sidebarItems"
                        :icon = "sidebarItem.icon"
                        :text = "sidebarItem.text"
                        :link = "sidebarItem.link" 
                        :class="{ active: index === store.state.selectedSidebarItem }"
                        @click="chooseSidebarItem(index)"/>

        <TheSidebarUser v-if="user != null"/>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TheSidebarItem from './TheSidebarItem.vue';
import TheSidebarUser from './TheSidebarUser.vue';


const sidebarItems = [
    {text: 'Home', icon: 'fa-solid fa-house', link: '#/'},
    {text: 'Dashboard', icon: 'fa-solid fa-chart-simple', link: '#/dashboard'},
    {text: 'Create Voting', icon: 'fa-solid fa-circle-plus', link: '#/create-voting'}

]

const store = useStore();
const user = computed(() => store.state.user);

const chooseSidebarItem = (index) => {
    store.commit('chooseSidebarItem', index);
} 
</script>


<style>
.sidebar{
    position: fixed;
    left: 100px;

    padding: 16px 8px;
    width: 240px;
    height: 300px;

    box-sizing: border-box;
    background-color: #1e1f26;
    border-radius: 1em;
}


</style>