<template>
    <div class="voting-candidate">
          <div class="voting-candidate-first-name">{{ candidate.firstName }}</div>
          <div class="voting-candidate-last-name">{{ candidate.lastName }}</div>
          <!-- <div class="voting-candidate-description">{{ candidate.description }}</div> -->
        </div>
</template>

<script setup>
  
const props = defineProps({
    candidate: Object
})

</script>


<style>
.voting-candidate{
    height: 50px;
    margin-top: 12px;

    color: #fff;
    font-size: 16px;

    border-radius: 1em;
    background-color: #18181b;

}

.voting-candidate:first-child{
    margin-top: 24px;
}

.voting-candidate:hover{
    color: #000;
    background-color: #fff;
}

</style>