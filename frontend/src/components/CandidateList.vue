<template>
    <div class="candidate-list">
        <Candidate v-for="(candidate, index) in candidates" 
                   :candidate="candidate"
                   :class="{active: index === chosenCandidate}"
                   @click="chooseCandidate(index)"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Candidate from './Candidate.vue';

const props = defineProps({
    candidates: Array
})

const chosenCandidate = ref(0);

const chooseCandidate = (index) =>{
    chosenCandidate.value = index
}
</script>

<style scoped>
.voting-candidates-list{
    margin-top: 50px
}

.active{
    color: #000;
    background-color: #fff;
}
</style>