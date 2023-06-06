<template>
    <div class="sidebar-item" v-if="username != null">
        <div class="username">{{ username }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const username = computed(() => store.state.user.email);

</script>

<style scoped>
.sidebar-item{
    width: 100%;
    height: 50px;
    margin-top: 80px;
    padding: 12px 20px;

    border-radius: 1em;
    box-sizing: border-box;
    background: #3c3e4c;
}

.username{
    color: #b8b8b8;
}
</style>