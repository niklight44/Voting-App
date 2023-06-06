<template>
    <div class="voting-info" v-if="voting">
      <div class="voting-name">{{ voting.name }}</div>
      <div class="voting-description">{{ voting.description }}</div>
      <CandidateList :candidates="candidates"/>
      <div class="voting-btn">Vote</div>

      <div class="link" v-if="voting.id">
        <a :href="'#/voting/' + voting.id">Link</a>
      </div>

      <canvas id="qrcode-canvas" v-if="voting.id"></canvas>

    </div>
</template>
  
<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import QRCode from 'qrcode';

import CandidateList from "./CandidateList.vue";

  
const store = useStore();
const votings = computed(() => store.state.votings);

const selectedVoting = computed(() => store.state.selectedVoting);
const voting = computed(() => votings.value[selectedVoting.value]);
// console.log(`Voting Key: ${votings.value[1].id}`);
// console.log(`Voting Key: ${voting.value.id}`);
console.log(votings.value[0]);

const candidates = computed(() => voting.value.candidates);

const generateQRCode = async (text) => {
    const canvas = document.getElementById('qrcode-canvas');

     await QRCode.toCanvas(canvas, text, {
      // QR code options (e.g., size, error correction level, etc.)
    });
};

// onMounted(async () => {
//   await generateQRCode('http://192.168.0.144:5173/#/' + voting.value.id);
//   console.log(`OnMounted Voting ID: ${voting.value.id}`);
// });

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

.voting-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    height: 50px;

    font-size: 20px;
    border-radius: 1em;
    background-color: #7ed182;
}

.voting-btn:hover{
    background-color: #005204;
}

#qrcode-canvas{
    width: 200px;
    height: 200px;
    margin-top: 24px;

    border-radius: 1em;
}

</style>