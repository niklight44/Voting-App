<template>
    <form class="registration-form" @submit="registerUser">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { getAuth } from 'firebase/auth';

  import router from '../router';
  
  const auth = getAuth(); // Assuming you have already initialized Firebase auth
  
  const email = ref('');
  const password = ref('');
  
  const registerUser = async (event) => {
    event.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      console.log('User registered successfully!');
      router.push('/create-voting');

      userObject = {
        email: email.value,
        password: password.value
      }

      localStorage.setItem('user', JSON.stringify(userObject));
      // You can perform additional actions here, such as displaying a success message or redirecting to another page
    } catch (error) {
      console.error('Error registering user:', error.message);
      // You can handle the error here, such as displaying an error message to the user
    }
  };
  </script>
  
  <style scoped>
  .registration-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    width: 500px;
    height: 500px;
  }
  
  .registration-form input {
    padding: 8px 16px;
    margin-bottom: 15px;
  
    width: 300px;
    height: 40px;
  
    border-radius: 1em;
  }
  
  .registration-form button {
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
  