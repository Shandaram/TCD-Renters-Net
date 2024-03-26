<template>

  <div class="event-box">
    <img class="event-image" 
    :src="imageSrc"
    :alt="evtTitle + 'image'" />
    <div class="event-details">
      <p class="evtTitle">{{ evtTitle }} </p>
      <p class="evtTime"> {{ evtTime }} </p>
      <p class="evtLocation"> {{ evtLocation }} </p>
    </div>

  </div>

</template>

<script>
export default {
  name: "eventCard",

  props: {
        evtTitle: {
            type: String,
            default: 'No title'
        },
        imageSrc :{
            type: String,
            required: true,
            default: ''
        },
        evtTime: {
            type: String,
            default: 'TBC'
        }, 
        evtLocation: {
            type: String,
            default: 'TBC'
        }
        
    }
}
</script>

<style scoped>
  .event-box{
    border-radius: 20px;
    border: solid 2px var(--black-color);
    width: 264px;
    height: 328px;
    background-color: var(--background-color);
    color: var(--black-color);
    overflow:hidden;
  }

  .event-details{
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 15px;
  }

  .event-image {
    width: 100%;
    height: auto;
    border-radius: 20px 20px 0 0;
    margin: 0;
  }

  .evtTitle {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 10px 0;
  }

  .evtTime,
  .evtLocation {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
  
</style>
