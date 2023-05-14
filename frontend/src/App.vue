<script setup>
import CreateButton from './components/CreateButton.vue';
import CreateVotingForm from './components/CreateVotingForm.vue';
import VotingList from './components/VotingList.vue';
import AddPeopleForm from './components/AddPeopleForm.vue';
import VotingInfo from './components/VotingInfo.vue';

import {ref} from 'vue';

let isCreateVotingFormVisible = ref(false);
let isAddPeopleFormVisible = ref(false);

let changeFormVisibility = () =>{
  isCreateVotingFormVisible.value = true;
}

let showAddPeopleForm = () => {
  isCreateVotingFormVisible.value = false
  isAddPeopleFormVisible.value = true;
}
</script>

<template>
  <TheHeader />

  <div class="wrapper">
    <CreateButton 
      @click="changeFormVisibility"
      v-if="!isCreateVotingFormVisible"/>

    <VotingList v-if="isCreateVotingFormVisible"/>
    <CreateVotingForm :isVisible="isCreateVotingFormVisible" @click="showAddPeopleForm"/>
    <AddPeopleForm :isVisible="isAddPeopleFormVisible"/>
   
    <VotingInfo />
  </div>
  
</template>


<style scoped>
  .wrapper{
    display: flex;
    flex-flow: row wrap;
  }
</style>
