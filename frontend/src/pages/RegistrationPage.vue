<template>
    <h1>Create Account</h1>
    
    <RegistrationForm />
    Already have an account? | <a href="#/login">Sign In</a>
</template>

<script setup>
import RegistrationForm from '../components/RegistrationForm.vue';
</script>

<style scoped>
h1{
    color: #fff;
}
</style>