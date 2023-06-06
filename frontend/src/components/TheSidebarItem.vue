<template>
    <a :href="link" class="sidebar-item">
        <FontAwesomeIcon :icon="icon" class="icon"/> 
        <div class="text">{{ text }}</div>
    </a>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
    icon: String,
    text: String,
    link: String
})

</script>

<style scoped>
.sidebar-item{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 12px 20px;

    border-radius: 1em;
    box-sizing: border-box;
}

.sidebar-item:hover{
    cursor: pointer;
    background: #3c3e4c;
}

.text{
    display: inline-block;
    margin-left: 24px;

    color: #b8b8b8;
}

.sidebar-item:hover .text{
    color: #fff;
}

.icon{
    width: 24px;
    height: 24px;
    display: inline-block;
    
    color: #b8b8b8;
}

.sidebar-item:hover .icon{
    color: #efacc8;
}

.active{
    background-color: #3c3e4c;
}

.active .text{
    color: #fff;
}

.active .icon{
    color: #efacc8;
}
</style>