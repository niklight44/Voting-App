<script setup>
import {ref} from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

import CreateButton from './components/CreateButton.vue';
import CreateVotingForm from './components/CreateVotingForm.vue';
import VotingList from './components/VotingList.vue';
import AddPeopleForm from './components/AddPeopleForm.vue';
import VotingInfo from './components/VotingInfo.vue';
import TheHeader from './components/TheHeader.vue';

import { getAllVotings } from './firebase_helper';

const store = useStore();

let isCreateButtonVisible = ref(true);
let isCreateVotingFormVisible = ref(false);
let isVotingListVisible = ref(false);
let isAddPeopleFormVisible = ref(false);
let isVotingInfoVisible = ref(false);


let showCreateVotingForm = () =>{
  isCreateButtonVisible.value = false;
  isCreateVotingFormVisible.value = true;
  isVotingListVisible.value = true;
  isVotingInfoVisible.value = true;
}

let showAddPeopleForm = () => {
  isCreateVotingFormVisible.value = false
  isAddPeopleFormVisible.value = true;
}

getAllVotings();
</script>

<template>
  <TheHeader />

  <div class="wrapper">
    
    <h1 v-if="isCreateButtonVisible">Your vote matters, and our app makes it count</h1>
    <CreateButton 
      @click="showCreateVotingForm"
      v-if="isCreateButtonVisible"/>

    <VotingList v-if="isVotingListVisible"/>
    <CreateVotingForm :isVisible="isCreateVotingFormVisible" @submit="showAddPeopleForm"/>
    <AddPeopleForm :isVisible="isAddPeopleFormVisible"/>
   
    <VotingInfo v-if="isVotingInfoVisible"/>
  </div>
  
</template>


<style scoped>
  .wrapper{
    display: flex;
    flex-flow: row wrap;
  }
</style>
