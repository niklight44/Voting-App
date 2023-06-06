<template>
    <header>
        <div class="wrapper">
            <div class="logo">
                <a href="#" >LibertyVoice<span>.io</span></a>
            </div>
            <div class="buttons" v-if="user==null">
                <div class="register-btn">
                    <a href="#/create-account">Create Account</a>
                </div>
                <div class="login-btn">
                    <a href="#/login">Sign In</a>
                </div>
            </div>
        </div>
        
    </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const user = computed(() => store.state.user);

</script>

<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;

    backdrop-filter: blur(4px);
    border-bottom: 1px solid #18181b;
}

.wrapper{
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo{
    font-size: 24px;
}

.logo a{
    color: aliceblue;
}

.logo span {
margin-top: 110px;
background: linear-gradient(
    to bottom right, 
    hsl(322, 63%, 58%), 
    hsl(237, 95%, 71%)
  );
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-family: 'Open Sans', sans-serif;
font-weight: bolder;
font-size: 24px;
}

.buttons{
    width: 280px;
    display: flex;
    justify-content: space-between;
}

.register-btn{
    padding: 12px 24px ;
    
    background-color: #7857ff;
    color: #fff;

    border-radius: 2em;
}

.register-btn a{
    color: #fff;
}

.login-btn{
    padding: 12px 24px;
    
    border: 1px solid #fff;
    border-radius: 2em;
}

.login-btn a{
    color: #fff;
}
</style>