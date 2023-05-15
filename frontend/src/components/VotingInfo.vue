<template>
    <div class="voting-info">
      <div class="voting-name">{{ voting.name }}</div>
      <div class="voting-description">{{ voting.description }}</div>
      <div class="voting-candidates-list">
        <div class="voting-candidate" v-for="candidate in candidates">
          <div class="voting-candidate-first-name">{{ candidate.firstName }}</div>
          <div class="voting-candidate-last-name">{{ candidate.lastName }}</div>
          <!-- <div class="voting-candidate-description">{{ candidate.description }}</div> -->
        </div>
      </div>
    </div>
</template>
  
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

  
const store = useStore();
const votings = computed(() => store.state.votings);

const selectedVoting = computed(() => store.state.selectedVoting);
const voting = computed(() => votings.value[selectedVoting.value]);

const candidates = computed(() => voting.value.candidates);
</script>
  

<style scoped>
    .voting-info{
        width: 300px;
        height: auto;
        padding: 20px 10px;

        font-size: 16px;
        color: #fff;

        border: 1px solid #18181b;
        border-radius: 10px;
        background-color: #1e1f26;
    }

    .voting-name{
        font-size: 30px;
    }

    .voting-description{
        margin-top: 24px;
        padding-left: 12px;

        text-align: left;
    }

    .voting-candidates-list{
        margin-top: 50px
    }

    .voting-candidate{
        height: 50px;
        margin-top: 12px;

        color: #fff;
        font-size: 16px;

        border-radius: 1em;
        background-color: #18181b;

    }

    .voting-candidate:hover{
        color: #000;
        background-color: #fff;
    }
</style>