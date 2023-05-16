<template>
    <h1>"Democracy is not just a privilege; it is a responsibility. It requires active participation, informed citizens, and constant vigilance to protect and uphold its values."</h1>
    <div class="loading" v-if="!voting.name">...Loading</div>
    <div class="voting-name" 
         v-if="voting && voting.name"> 
         {{ voting.name }} 
    </div>
    <div class="voting-description">{{ voting.description }}</div>

    <div class="candidates-list">
        <div class="candidate"
             v-for="(candidate, index) in voting.candidates" 
             :key="index"
             @click="chooseCandidate(index)"
             :class="{active: index === chosenCandidate}">
            <div class="candidate-first-name">{{ candidate.firstName }}</div>
            <div class="candidate-last-name">{{ candidate.lastName }}</div>
        </div>
    </div>

    <div class="voting-btn"
         @click="votingBtnClickHandler()">Vote
    </div>
</template>
  
<script setup>
import { ref, onMounted, watch, reactive } from 'vue';
import { getVoting, addVotes } from '../firebase';
import {createBlock} from '../blockchain';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const chosenCandidate = ref(0);
const chooseCandidate = (index) =>{
    chosenCandidate.value = index
}

const votingBtnClickHandler = () =>  {
    let newBlock = createBlock(voting, chosenCandidate.value)
    voting.votes.push(newBlock);
    addVotes(voting.id, voting.votes);
    console.log(voting.votes);
}
const voting = reactive({});

onMounted(async () => {
    const votingId = currentRoute.params.id;
    let fetchedValue = await getVoting(votingId);
    await new Promise((resolve) => {
        setTimeout(resolve, 2000); // Delay execution for 1 second
    });
    voting.id = votingId;
    voting.name = fetchedValue.name;
    voting.description = fetchedValue.description;
    voting.candidates = fetchedValue.candidates;
    voting.votes = fetchedValue.votes;
    console.log(`Candidates: ${fetchedValue.candidates}`);
});

</script>

<style scoped>
h1{
    font-size: 16px;
    color: #7a7a7a;
}
.voting-name{
    font-size: 56px;
    font-weight: 700;
    color: #fff;
}

.voting-description{
    color: #fff;
}

.candidates-list{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.candidate{
    width: 300px;
    height: 50px;
    margin-top: 12px;

    color: #fff;
    font-size: 16px;

    border-radius: 1em;
    background-color: #18181b;

}

.candidate:first-child{
    margin-top: 24px;
}

.candidate:hover{
    color: #000;
    background-color: #fff;
}

.candidate.active{
    color: #000;
    background-color: #fff;
}

.voting-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    margin: auto;
    margin-top: 36px;

    font-size: 20px;
    border-radius: 1em;
    background-color: #7ed182;
}

.voting-btn:hover{
    background-color: #005204;
}
</style>