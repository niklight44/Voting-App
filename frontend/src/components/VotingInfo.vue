<template>
    <div class="voting-name">{{ voting.name }}</div>
    <div class="voting-description">{{ voting.description }}</div>
    <div class="voting-candidates-list">
        <div class="voting-candidate">
            <div class="voting-candidate-name">{{ candidate.name }}</div>
            <div class="voting-candidate-image">{{ candidate.image }}</div>
            <div class="voting-candidate-description">{{ candidate.description }}</div>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';



</script>