<template>
    <div class="wrapper">
        <h1>"Democracy is not just a privilege; it is a responsibility. It requires active participation, informed citizens, and constant vigilance to protect and uphold its values."</h1>

        <VotingCard />

        <div class="candidate-description">
            {{ description }}
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import VotingCard from '../components/VotingCard.vue';

const description = ref('Description');

</script>

<style scoped>

.wrapper{
    display: flex;
    justify-content: center;
}

h1{
    font-size: 16px;
    color: #7a7a7a;
}

.candidate-description{
    padding-top: 20px;
    margin-top: 4em;
    width: 300px;
    height: 300px;

    color: #fff;
    background: #6f6f6f;
    box-sizing: border-box;

}
</style>