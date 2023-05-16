<template>
    <div class="wrapper">
        <h1 v-if="isCreateButtonVisible">Your vote <span>matters</span>, and our app makes it count</h1>
        <CreateButton 
            @click="showCreateVotingForm()"
            v-if="isCreateButtonVisible"/>

        <VotingList v-if="isVotingListVisible"/>
        <CreateVotingForm :isVisible="isCreateVotingFormVisible" @submit="showAddPeopleForm"/>
        <AddPeopleForm :isVisible="isAddPeopleFormVisible"/>

        <VotingInfo v-if="isVotingInfoVisible"/>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

import CreateButton from '../components/CreateButton.vue';
import CreateVotingForm from '../components/CreateVotingForm.vue';
import VotingList from '../components/VotingList.vue';
import AddPeopleForm from '../components/AddPeopleForm.vue';
import VotingInfo from '../components/VotingInfo.vue';

import { getAllVotings } from '../firebase';

const store = useStore();

let isCreateButtonVisible = ref(true);
let isCreateVotingFormVisible = computed(() => store.state.isCreateVotingFormVisible);
let isVotingListVisible = ref(false);
let isAddPeopleFormVisible = computed(() => store.state.isAddPeopleFormVisible);
let isVotingInfoVisible = ref(false);


let showCreateVotingForm = () =>{
  isCreateButtonVisible.value = false;
  store.commit('showCreateVotingForm');
  isVotingListVisible.value = true;
  isVotingInfoVisible.value = true;
}

let showAddPeopleForm = () => {
  store.commit('hideCreateVotingForm');
  store.commit('showAddPeopleForm');
}

getAllVotings();
</script>

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