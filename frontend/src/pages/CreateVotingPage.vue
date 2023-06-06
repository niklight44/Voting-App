<template>
    <div class="wrapper">
        <VotingTypeList />
        <CreateVotingForm :isVisible="isCreateVotingFormVisible" 
                          @submit="showAddPeopleForm"/>
        <AddPeopleForm :isVisible="isAddPeopleFormVisible"/>

        <VotingPreview v-if="isVotingPreviewVisible"/>


        <div class="upload-voting-btn" @click="uploadVotingBtnClickHandler">Upload Voting</div>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import router from "../router";


import CreateVotingForm from '../components/CreateVotingForm.vue';
import AddPeopleForm from '../components/AddPeopleForm.vue';
import VotingPreview from '../components/VotingPreview.vue';

import { getAllVotings, uploadVotingToDatabase } from '../firebase';
import VotingTypeList from '../components/VotingTypeList.vue';

const store = useStore();

let isCreateVotingFormVisible = computed(() => store.state.isCreateVotingFormVisible);
let isAddPeopleFormVisible = computed(() => store.state.isAddPeopleFormVisible);
let isVotingPreviewVisible = ref(false);

getAllVotings();


let showCreateVotingForm = () =>{
  store.commit('showCreateVotingForm');
  store.commit('hideAddPeopleForm');
}

let showAddPeopleForm = () => {
  store.commit('hideCreateVotingForm');
  store.commit('showAddPeopleForm');
  isVotingPreviewVisible.value = true;
}

let uploadVotingBtnClickHandler = () =>{
    let votings = store.state.votings;
    let voting = votings[votings.length-1];

    if(voting.candidates.length<2){
        alert('Minimum 2 Candiates');
        return
    }

    // Trying to get Rid of Firebase Upload Error
    let newVoting = {
        name: voting.name,
        description: voting.description,
        candidates: voting.candidates,
        votes: voting.votes
    }

    console.log(`New Voting: ${newVoting}`);
    uploadVotingToDatabase(newVoting);
}

</script>

<style scoped>

.wrapper{
    display: flex;
    flex-flow: row wrap;
    min-height: 500px;
  }

  .wrapper h1{
    padding-top: 150px;

    color: #fff;
    text-align: center;
  }

  h1 span{
    color: #7971f1;
  }

  .upload-voting-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;

    text-align: center;
    color: #fff;

    background: #7857ff;
    border-radius: 1em;
  }
</style>