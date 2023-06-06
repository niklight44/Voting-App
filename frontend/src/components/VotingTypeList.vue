<template>
    <div class="voting-type-list">
        <VotingType name="Election"/>
        <VotingType name="Referendum" />
        <VotingType name="Other" />
    </div>

</template>

<script setup>
import VotingType from './VotingType.vue';
</script>

<style>
.voting-type-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
}


</style>