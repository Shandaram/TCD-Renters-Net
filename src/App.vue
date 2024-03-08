<template>
  <div id="app">
    <HeaderMain />
    <!-- we will have our different pages rendered here  -->
    <router-view></router-view>
    <FooterMain />
  </div>

</template>

<script>
import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'

export default {
  name: 'App',
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

<style>
@import '@/assets/colors.css';
@import "@/assets/fonts.css";

body {
  background-color: var(--background-color);
  color: var(--black-color);
  font-size: 18px;
  margin: 0;
  font-family: 'TASA-Text-regular';
  line-height: 145%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--black-color);
}

.main-container {
  margin: 3vw 5vw;
}

h1 {
  font-family: 'TASA-Display-black';
  font-size: 71px;
  line-height: 100%;

}

h2 {

  font-family: 'TASA-Display-medium';
  font-size: 41px;
  line-height: 70%;

}
</style>
