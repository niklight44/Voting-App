<template>
    <div class="voting-type">
        <div class="voting-type-name">{{ name }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    name: String,
})

</script>

<style scoped>
.voting-type-name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
    margin-bottom: 15px;

    background: #202021;
    border-radius: 1em;

    color: aliceblue;
    overflow: hidden;
}
</style>