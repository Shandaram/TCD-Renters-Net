<template>
    <div class="h-main-container">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="h-right-side">
            <router-link to="/about">About us</router-link>
            <a href="">Demands</a>
            <a href="">Resources</a>
            <a href="">News & Events</a>
            <ButtonCTA cta="Hello" link="" state="default" />
        </div>
    </div>

</template>
<script>
import ButtonCTA from './ButtonCTA.vue'

export default {
    name: 'HeaderMain',
    components: {
        ButtonCTA
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
    text-decoration: none;
}

.h-main-container {
    width: 90vw;
    display: grid;
    padding: 0.5vw 5vw;
    border-bottom: 1px var( --dark-grey-color) solid;
    grid-template-columns: auto 2fr;
    grid-template-rows: auto;
    grid-gap: 10vw;
    align-items: center;
}

.h-main-container img {
    justify-self: start;
    width: 80px;
}

.h-right-side {
    justify-self: end;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
    grid-gap: 5vw;
}
</style>