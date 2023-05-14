<template>
    <div class="voting">
      <div class="name">{{ voting.name }}</div>
      <div class="description">{{ voting.description }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    voting: Object
})
</script>

<style>
.voting{
    width: 300px;
    height: 50px;
    margin-bottom: 15px;

    background: violet;
    border: 1px solid red;
    border-radius: 1em;
}
</style>