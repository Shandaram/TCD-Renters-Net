<template>
    <a :href="link"><button :class="state">{{ cta }}</button></a>
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
}
/* features we want all different states of button to have */
.default {
    background-color: var(--light-red-color);
    border: none;
    color: var(--background-color);

}
</style>