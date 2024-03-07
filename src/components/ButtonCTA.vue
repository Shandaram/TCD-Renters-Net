<template>
    <router-link :to="link">
      <button :class="state">{{ cta }}</button>
    </router-link>
  </template>

<script>
export default {
    name: 'ButtonCTA',
    props: {
        cta: String,
        link: String,
        state: {
            type: String,
            default: 'default'
        }
    }
}
</script>
<style scoped>
/* features we want all buttons to have */
button {
    padding: 0.8vw 1.2vw;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
}
/* features we want all different states of button to have */
.default {
    background-color: var(--light-red-color);
    border: 2px solid transparent;
    color: var(--background-color);

}
.default:hover {
    background-color: var(--background-color);
    border: 2px solid var(--black-color);
    color: var(--black-color);
}
.white {
    background-color: var(--background-color);
    border: none;
    color: var(--black-color);

}
</style>