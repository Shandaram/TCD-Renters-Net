<template>
  <div>
    <div class="tags tag-box">
      <button class="tagsBtn"
        v-for="(tag, index) in tags" 
        :key="tag.name"
        :class="{ active: activeTagIndex === index }"
        @click="activeTagIndex = index">
        {{ tag.name }}
      </button>
    </div>

    <div class="images">
      <img class="image"
        v-for="image in activeImages" 
        :key="image.id" 
        :src="image.src" 
        :alt="image.alt" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTagIndex: 0,
      tags: [
        { name: 'Rental Price', 
        images: [{ id: 1, src: 'https://gisgeography.com/wp-content/uploads/2023/03/Dublin-Map-Ireland.jpg', alt: 'Map of Dublin, Ireland' }] },
        { name: 'Transportation', 
        images: [{ id: 2, src: 'https://static1.squarespace.com/static/5baca129e4afe92f4b6f3b3d/t/65e1aa53fd8bab54fd5369ed/1709288396605/dublin-rail-map.jpg', alt: 'Dublin transit map' }] },
        { name: 'Trinity Cycle Times', 
        images: [{ id: 3, src: 'https://www.tcd.ie/healthytrinity/assets/images/SmarterTravel/Active%20Transport/MainCampusCycle.png', alt: 'Trinity walking time' }] }
      ],
    };
  },
  computed: {
    activeImages() {
      return this.tags[this.activeTagIndex].images;
    }
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  margin-top: 44px;
}
.tagsBtn {
  width: 240px;
  height: 40px;
  border-width: 1px;
  border-radius: 15px;
  border-color: var(--black-color);
  background-color: var(--background-color);
  font-size: 18px;
}

.tag-box {
  display:flex;
  gap:38px;
}

.active {
  background-color: var(--light-red-color);
  color: var(--background-color);
  border: none;
}
</style>
