<template>
    <div class="total-votes">
        <div class="number">300</div>
        <div class="subheader">Voted</div>
    </div>

</template>

<script setup>
</script>

<style>
.total-votes{
    width: 150px;
    height: 150px;
    padding: 12px;

    background-color: #1e1f26;
    border-radius: 1em;
    box-sizing: border-box;
}

.number{
    width: 100%;
    height: 80%;
    font-size: 4em;
    font-weight: 700;
    background: linear-gradient(90deg, rgba(129,132,232,1) 0%, rgba(158,186,230,1) 18%, rgba(194,191,226,1) 46%, rgba(237,197,235,1) 69%, rgba(238,174,202,1) 87%, rgba(238,174,202,1) 87%, rgba(255,134,160,1) 100%);
    -webkit-background-clip: text;
    color: transparent;
}

.subheader{
    color: #fff;
    font-size: 1em;
}
</style>