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

    background: #e47da8;
    border-radius: 1em;

    color: aliceblue;
}
</style>