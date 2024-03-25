<template>
  <div id="app">
   
    <div class="tag-box">
      <button class="tagsBtn"
      v-for="(category, index) in categories" 
      :key="index" 
      :class="{'active': activeTab === index}" @click="activeTab = index">
        {{ category.name }}
      </button>
    </div>
    
    <div class="links">
      <ul class="linkList">
        <li class="link"
         v-for="link in activeLinks" 
        :key="link.text">
          <a :href="link.url">{{ link.text }}</a>
          <span>></span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeTab: 0, // The index of the currently active tab
      categories: [
        { name: 'Find Accommodations', 
        links: [
          { text: 'Daft', url: 'https://www.daft.ie/' }, 
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' },
          { text: 'Link 2', url: '#' }
        ]},
        { name: 'Move from Abroad', 
        links: [{ text: 'Link 1', url: '#' }, { text: 'Link 2', url: '#' }] },
        { name: 'Special Demands', 
        links: [{ text: 'Link 1', url: '#' }, { text: 'Link 2', url: '#' }] },
        { name: 'Tenant Rights', 
        links: [{ text: 'Link 1', url: '#' }, { text: 'Link 2', url: '#' }] },
        { name: 'Avoid Scams', 
        links: [{ text: 'Link 1', url: '#' }, { text: 'Link 2', url: '#' }] },
      ],}
  },
  computed: {
    // Compute the links for the active tab
    activeLinks() {
      return this.categories[this.activeTab].links;
    }
  }
};
</script>

<style scoped>
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

.linkList {
  margin-top: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 44px;
  column-gap: 108px;
}

.link {
  display: flex;
  width: 310px;
  justify-content: space-between;
}

.links ul {
  list-style: none;
  padding: 0;
}

.links li a:link {
  text-decoration: none;
  color: var(--black-color);
}

.links li:hover,
.links a:hover {
  color: var(--light-red-color);
  text-decoration: none;
}

</style>
