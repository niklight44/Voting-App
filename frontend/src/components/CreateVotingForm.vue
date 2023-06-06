<template>
    <form @submit.prevent="onSubmit" class="create-voting-form" v-if="isVisible">
      <label for="voting-name">Voting Name</label>
      <input v-model="name" type="text" placeholder="Mayor Election" id="voting-name" required>
      <label for="voting-description">Description</label>
      <input v-model="description" type="text" id="voting-description" placeholder="Every 4 year election" required>
  
      <button type="submit">Create voting 
        <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 103 20">
          <path fill="#fff" d="M22.3 9.608a3.182 3.182 0 0 1-.927 2.218L14.63 18.64a1.564 1.564 0 0 1-2.56-.515 1.596 1.596 0 0 1 .345-1.735l5.17-5.197H1.87c-.416 0-.816-.167-1.11-.464a1.591 1.591 0 0 1 0-2.24 1.565 1.565 0 0 1 1.11-.465h15.715l-5.17-5.213a1.592 1.592 0 0 1-.008-2.242A1.566 1.566 0 0 1 14.632.56l6.74 6.814c.591.591.925 1.395.928 2.234Z"></path>
        </svg>
      </button>
    </form>
</template>
  
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'; 

const store = useStore();

const props = defineProps({
    isVisible: Boolean
})
  
const name = ref('');
const description = ref('');
  
const onSubmit = () => {
    if (!name.value || !description.value) {
        // If one or both fields are empty, show an error message
        alert('Please fill out all fields.');
        return;
    }

    const voting = {
      name: name.value,
      description: description.value,
      candidates: [],
      votes: [
        {previousHash: 0, candidate_id: 0, currentHash: 1234}
      ]
    };
    // Dispatch the addVoting mutation with the new voting object
    store.commit('addVoting', voting);
    store.commit('hideCreateVotingForm');
    store.commit('chooseVoting', store.state.votings.length - 1);
    console.log(store.state.votings.length - 1)
    // Reset the form inputs
    name.value = '';
    description.value = '';
}
</script>
  

<style scoped>
.create-voting-form{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 500px;
    height: 500px;
}

.create-voting-form label{
  width: 328px;
  color: #6b6971;
  text-align: left;
}

.create-voting-form input{
    padding: 8px 16px;
    margin-bottom: 15px;

    width: 300px;
    height: 40px;

    border: none;
    border-radius: 1em;

    color: #fff;
    background-color: #18181b;
    outline: 0;
}

.create-voting-form input::placeholder{
  color: #525254;
}

.create-voting-form button{
    display: block;
    padding: 8px 16px;
    width: 200px;
    height: 40px;

    position: relative;

    font-size: 1.2em;
    font-weight: 700;
    color: #fff;
    background: #7857ff;
    box-sizing: content-box;
    border-radius: 1.5em;

}

.create-voting-form button > svg{
    position: absolute;
    top: 25px;
    left: 185px;
}
</style>