<template>
    <div class="h-main-container">
        <router-link to="/"><img alt="Vue logo" src="../assets/logo.png"></router-link>
        <div class="h-right-side">
            <router-link to="/about">About us</router-link>
            <router-link to="/demands">Demands</router-link>
            <router-link to="/resources">Resources</router-link>
            <router-link to="/news">News & Events</router-link>
            <ButtonCTA cta="Take Action" link="/actions" state="default" />
        </div>
    </div>
    <div class="bread-crumbs">
        <p>Home</p>
        <p>→</p>
        <p>Page</p>
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
    border-bottom: 1px var(--light-grey-color) solid;
    grid-template-columns: auto 2fr;
    grid-template-rows: auto;
    grid-gap: 10vw;
    align-items: center;
}

.h-main-container img {
    justify-self: start;
    width: 70px;
}

.h-right-side {
    justify-self: end;
    align-items: center;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto;
    grid-gap: 5vw;
}
.bread-crumbs {
    width: 90vw;
    display: grid;
    padding: 0.3vw 5vw;
    border-bottom: 1px var(--light-grey-color) solid;
    grid-template-columns: auto auto auto 2fr;
    grid-template-rows: auto;
    grid-gap: 2vw;
    align-items: center;
    line-height: 0 !important;
}

</style>