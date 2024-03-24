<template>
   
        <div class="l-left-side">
         <h1>{{ title }}</h1>
         <h2 :class="state">{{ subTitle }}</h2>
         <p class="line">{{ txt }}</p>
        </div>


</template>
<script>


export default {
    name: 'LandingText',
    props: {
        title: {
            type: String,
            default: 'No title'
        },
        subTitle :{
            type: String,
            default: 'No sub-title'
        },
        txt: {
            type: String,
            default: 'No text'
        }, 
        state: {
            type: String,
            default: 'show'
        }
    }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
    text-decoration: none;
}

.l-left-side {
    display: grid;

    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    justify-items: start;
    align-items: start;
    width: 50%;
}

p {

    text-align: left;
}
.show {
    display: block;
}

.hide {
    display: none;
}

</style>