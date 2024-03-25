<template>
    <div class="h-main-container">
      <div class="l-left-side">
        <!-- Use v-for to dynamically generate demand items -->
        <div  class="list-item" v-for="(demand, index) in demands" :key="index" @click="selectedDemand = index" :class="{ active: index === selectedDemand }">
          <span><font-awesome-icon :icon="index === selectedDemand ? ['fas', 'fa-file'] : ['far', 'fa-file']" /></span>
          <h3 >{{ demand }}  </h3>
        </div>
     

      </div>
      <div class="r-left-side">

        <p class="line">{{ demandText }}</p>
      </div>
    </div>
  </template>
  <script> 

  export default {
  name: 'ListPopup',
  props: {
    demands: {
      type: Array,
      required: true
    },
    defaultDemand: {
      type: Number,
      default: 0
    },
    demandTexts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedDemand: this.defaultDemand
    };
  },
  computed: {
    demandText() {
      return this.demandTexts[this.selectedDemand] || '';
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
}
.list-item {
    padding-bottom: 1vw;
    border-bottom: 1px var(--light-grey-color) solid;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr   ;
    grid-gap: 2vw;
    align-items: center;
}
.list-item:hover {
    color: var(--light-red-color);
}
.h-main-container {
    justify-self: end;
    display: grid;
    grid-template-columns: 1.2fr 1fr   ;
    grid-gap: 5vw;
}

.active {
  color: var(--light-red-color);
  font-family: 'TASA-Display-medium';
}
</style>