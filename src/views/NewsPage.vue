<template>
    <div class="main-container">
        <LandingText title="News & Events" subTitle="What is happening?"
            txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam" />
    </div>

</template>
<script>
import LandingText from '../components/LandingText.vue';

export default {
    name: 'NewsPage',
    components: {
        LandingText
    }
}
</script>