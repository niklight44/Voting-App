<template>
    <div class="wrapper">
        <div class="voting-list-wrapper">
            <VotingList />
        </div>

        <div class="charts">
            <TotalVotes />
            <NumberOfVotes />
        </div>
    </div>
</template>

<script setup>
import { getAllVotings } from '../firebase';
import VotingList from '../components/VotingList.vue';
import NumberOfVotes from '../components/charts/NumberOfVotes.vue';
import TotalVotes from '../components/charts/TotalVotes.vue';
import { onMounted } from 'vue';

onMounted(()=>{
    getAllVotings();
})

</script>

<style scoped>
.wrapper{
    width: 1200px;
    display: flex;
    justify-content: space-between;
}

.voting-list-wrapper{
    width: 400px;
    display: flex;
    justify-content: start;
}

.charts{
    width: 800px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;


}
</style>