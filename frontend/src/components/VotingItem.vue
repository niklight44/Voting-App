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

<style scoped>
.voting{
    width: 300px;
    height: 50px;
    margin-bottom: 15px;

    background: #202021;
    border-radius: 1em;

    color: aliceblue;
    overflow: hidden;
}

.voting:hover{
    background-color: #7300df;
}

.active{
    background-color: #7300df;
}

.name{
    font-size: 16px;
}

.description{
    font-size: 12px;
}
</style>