<template>
  <HeaderMain />
  <!-- homepage  -->

</template>

<script>

import HeaderMain from './components/HeaderMain.vue'
export default {
  name: 'App',
  components: {
    HeaderMain
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

}
</style>
