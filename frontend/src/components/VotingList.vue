<template>
    <div class="voting-list">
        <Voting v-for="(voting, index) in votings" 
                :key="index" 
                :voting="voting"
                :class="{ active: index === selectedVoting }"
                @click="chooseVoting(index); votingClickHandler() "/>
        <div class="voting-add-btn" 
            @click="votingAddButtonClickHandler()">
            +
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';


import Voting from './Voting.vue';

const store = useStore();

const votings = computed(() => store.state.votings);

const selectedVoting = computed(() => store.state.selectedVoting);

const chooseVoting = (voting_id) => {
  store.commit('chooseVoting', voting_id);
}

const votingClickHandler = () => {
    store.commit('hideCreateVotingForm');
    store.commit('showAddPeopleForm')
}

const votingAddButtonClickHandler = () => {
    store.commit('showCreateVotingForm');
    store.commit('hideAddPeopleForm');
}
</script>

<style scoped>
.voting-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}


.voting-add-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-top: 25px;

    color: #fff;
    border-radius: 0.5em;
    background-color: #1e003a;
}
</style>