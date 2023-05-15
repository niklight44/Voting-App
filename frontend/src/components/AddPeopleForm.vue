<!-- Adds people to created voting -->

<template>
    <form @submit.prevent="onSubmit" action="#" v-if="isVisible">
        <input v-model="firstName" type="text" placeholder="First Name">
        <input v-model="lastName" type="text" placeholder="Last Name">
        <button type="submit">Add Person</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    isVisible: Boolean
})

const store = useStore();

const firstName = ref('');
const lastName = ref('');
  
const onSubmit = () => {
    if (!firstName.value || !lastName.value) {
        // If one or both fields are empty, show an error message
        alert('Please fill out all fields.');
        return;
    }

    const candidate = {
      firstName: firstName.value,
      lastName: lastName.value
    };
    // Dispatch the addVoting mutation with the new voting object
    store.commit('addCandidate', candidate);
    // Reset the form inputs
    firstName.value = '';
    lastName.value = '';
}
</script>


<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 500px;
    height: 500px;
}

form input{
    padding: 8px 16px;
    margin-bottom: 15px;

    width: 300px;
    height: 40px;

    border-radius: 1em;
}

form button{
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
</style>