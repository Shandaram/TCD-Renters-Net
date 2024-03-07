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

body {
  background-color: var(--background-color);
  color: var(--black-color);
  font-size: 18px;
  margin: 0;
}

a {
  color: var(--black-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;

  height: 100vh;

}
</style>
