<template>
    <header>
        <div class="logo">VoteWise<span>.io</span></div>
    </header>
</template>

<script setup>
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
    height: 70px;

    backdrop-filter: blur(4px);
    border-bottom: 1px solid #18181b;
}

.logo{
    font-size: 24px;
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
</style>