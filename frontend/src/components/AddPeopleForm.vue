<!-- Adds people to created voting -->

<template>
    <form action="#" v-if="isVisible">
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
        <button type="submit">Add Person</button>
    </form>
</template>

<script setup>
const props = defineProps({
    isVisible: Boolean
})
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