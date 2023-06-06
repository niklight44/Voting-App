<!-- TODO: ADD STYLES TO COMPONENT -->
<template>
    <div>
      <span>{{ currentText }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const texts = ref(["Futuristic", "Equitable", "Empowering"]);
  const currentIndex = ref(0);
  
  const currentText = ref(texts.value[currentIndex.value]);
  
  onMounted(() => {
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % texts.value.length;
      currentText.value = texts.value[currentIndex.value];
    }, 1000); // Change the text every second (adjust as needed)
  });
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  