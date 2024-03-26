<template>
  <div class="article-box">
    <img class="article-image" 
    :src="imageSrc"
    :alt="articleTitle + 'image'" />
    <div class="article-details">
      <div>
        <span class="articleTags"
        v-for="tag in articleTags"
        :key="tag.text"
        :style="{ backgroundColor: getTagColor(tag.text) }">{{ tag.text }}</span>
      </div>
      <p class="articleTitle">{{ articleTitle }} </p>
      <p class="articleTime"> {{ articleTime }} </p>
      <p class="articleSrc"> {{ articleSrc }} </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "articleCard",

  props: {
        articleTitle: {
            type: String,
            default: 'No title'
        },
        imageSrc:{
            type: String,
            required: true,
            default: ''
        },
        articleTime: {
            type: String,
            default: 'TBC'
        }, 
        articleSrc: {
            type: String,
            default: 'TBC',
            required: true,
        },
        articleTags:{
            type: Array,
        }
        
    },

  methods:{
    getTagColor(tagText) {
      if (tagText === 'Media') {
        return '#1949A6';
      } else if (tagText === 'Protest') {
        return '#a6191c';
      } else if (tagText === 'Research') {
        return '#708438';
      } else {
        return '#5d5a66';
      }
    }
  }
}
</script>

<style scoped>
  .article-box{
    border-radius: 20px;
    outline:2px solid var(--light-grey-color);
    width: 100%;
    height: auto;
    background-color: var(--background-color);
    color: var(--black-color);
    overflow:hidden;
  }

  .article-details{
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 15px;
  }

  .article-image {
    width: 100%;
    height: 37%;
    border-radius: 20px 20px 0 0;
    margin: 0;
  }

  .articleTitle {
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 10px 0;
  }

  .articleTime,
  .articleSrc {
    font-size: 18px;
    margin: 0 0 10px 0;
  }

  .articleTags{
    font-size: 18px;
    gap: 10px;
  }
  
</style>
