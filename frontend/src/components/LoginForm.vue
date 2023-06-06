<template>
      <form @submit.prevent="login" class="login-form">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
  </template>
  
<script setup>
import { ref } from 'vue';

import { mapActions, useStore } from 'vuex';

const store = useStore();

const email = ref('');
const password = ref('');



const login = async () => {
  await store.dispatch('login', { email: email.value, password: password.value })
  // Redirect or perform any additional actions after login
}

</script>
  

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  height: 500px;
}

.login-form input {
  padding: 8px 16px;
  margin-bottom: 15px;

  width: 300px;
  height: 40px;

  border-radius: 1em;
}

.login-form button {
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