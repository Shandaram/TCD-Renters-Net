<template>
    <div class="f-main-container">
        <div class="h-right-side">
           <h2>What's next?</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <ButtonCTA cta="Sign up" link="/actions" state="white" />
        </div>
    </div>

</template>
<script>
import ButtonCTA from './ButtonCTA.vue'

export default {
    name: 'FooterMain',
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

.f-main-container {
    width: 90vw;
    display: grid;
    padding: 3vw 5vw;
    grid-template-columns: auto 1.5fr;
    grid-template-rows: auto;
    grid-gap: 10vw;
    align-items: center;
    background-color: var(--black-color);
    color: var(--background-color);
    position: absolute;
    bottom:0;
}

.h-right-side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
 
}
</style>