<template>
    <div class="main-container">
        <!-- if (shouldShowSubtitle == true)  {
            state = show
          }  else if (shouldShowSubtitle == false) {
            state = hide
          }     -->
       <LandingText title="TCD Renters’ Solidarity Network" 
       :state="shouldShowSubtitle ? 'show' : 'hide'"
           txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam" />
   </div>

</template>
<script>
import LandingText from '../components/LandingText.vue';

export default {
   name: 'HomePage',
   components: {
       LandingText
   },
   data() {
        return {
            shouldShowSubtitle: false 
        };
    }
  
}
</script>