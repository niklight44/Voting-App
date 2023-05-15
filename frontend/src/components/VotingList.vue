<template>
    <div class="voting-list">
        <Voting v-for="(voting, index) in votings" 
                :key="index" 
                :voting="voting"
                @click="chooseVoting(index)"/>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';


import Voting from './Voting.vue';

const store = useStore();

const votings = computed(() => store.state.votings);

const chooseVoting = (voting_id) => {
  store.commit('chooseVoting', voting_id);
}
</script>

<style>
.voting-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.name
.description{
    color: pink;
    font-size: 25px;
}


</style>