<template>
      <div class="main-container">
        <h1>Rent in Dublin</h1>
        <imageTags/>
       
        <h2>Cost of Living Calculator</h2>
        <div class="calculator">
            <div class="cal"><costofLiving/></div>
            <div class="info">
                <!-- <FontAwesomeIcon :icon="circle-exclamation" style="color: #a6191c;" /><p class="info-title">How it works?</p> -->
                 <p>
                    Aliquam etiam erat velit scelerisque in. Dolor magna eget est lorem ipsum dolor. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Cras semper auctor neque vitae tempus. Pretium viverra suspendisse potenti nullam ac tortor. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.
                    </p>
                    <p>Ornare massa eget egestas purus viverra. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
                    </p>
                    <p>Sem viverra aliquet eget sit amet tellus. Bibendum at varius vel pharetra vel turpis nunc. 
                    </p>
                <a href="https://www.numbeo.com/cost-of-living/calculator.jsp">
                    <p class="footnote-sml">More accurate calculation<span class="arr"> ↗ </span></p> 
                    </a>
            </div>
        </div>
       
        <h2>Rental Network</h2>
        <LinksNetwork/>
    </div>

</template>

<script>
import LinksNetwork from "@/components/LinksNetwork.vue";
import imageTags from "@/components/imageTags.vue";
import costofLiving from "@/components/costofLiving.vue";
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

export default {
    name: 'ResourcesPage',
    
    components:{
    imageTags,
    LinksNetwork,
    costofLiving
   },
   }

</script>

<style scoped>
h2{
  margin-top: 80px;
  margin-bottom: 50px;
}

.calculator {
    display: flex;
    justify-content: space-between;
    gap: 5%;
}

.cal {
    width:60%;
}

.info {
    border-radius: 15px;
    border: solid 1px var(--light-grey-color);
    width: 35%;
    padding: 30px;
    color: var(--dark-grey-color);
}

.info-title{
    color:var(--black-color);
}

.footnote-sml{
    color:var(--black-color);
    margin-top: 30px;
    
}

a{
    text-decoration: none;
    text-align: end;
}

.arr {
    color: var(--dark-red-color);
}
</style>