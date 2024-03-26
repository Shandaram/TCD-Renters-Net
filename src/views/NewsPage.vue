<template>
    <div class="main-container">
      <div class="head-container">
        <LandingText 
         title="News & Events" subTitle="What is happening?"
                txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam" />

        <div class='carousel'>
             <eventCard 
                v-for="evt in eventDetails"
                :key="evt.id"
                :evtTitle="evt.title"
                :imageSrc="evt.imageSrc"
                :evtTime="evt.time"
                :evtLocation="evt.location"
             />
        </div>
      </div>

        <div class="articles">
            <h2>Articles</h2>
            <div class="articleContainer" >
            <articleCard 
                v-for="article in articleDetails"
                :key="article.title"
                :articleTitle="article.title"
                :articleTime="article.time"
                :articleSrc="article.src"
                :imageSrc="article.imageSrc"
                :tag="article.text"
                />
            </div>
        </div>

    </div>
</template>

<script>
import LandingText from '../components/LandingText.vue';
import eventCard from '../components/eventCard.vue';
import articleCard from '../components/articleCard.vue';

export default {
    name: 'NewsPage',
    components: {
        LandingText,
        eventCard,
        articleCard
    },

    data(){
        return{
            eventDetails:[
            {
                id:1,
                title:'Protest for lower rent',
                imageSrc:'https://www.irishtimes.com/resizer/poFocdcsUvVp_IUc5ywrzsPUuNU=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/ZDHUYNUERRGT5OWBZGPGQR3OUA.jpg',
                time:'17/02/24 Sat 14:00',
                location:'Main Square'
            },
            {
                id:2,
                title:'Block the Book of Kells',
                imageSrc:'https://www.irishtimes.com/resizer/2dFNJYcbqR2AXGsLtarkjKO_KhI=/1440x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/O5GANRZW7JBCZLFPWKOTYDCLOE.jpg',
                time:'20/11/23 Fri 15:00',
                location:'Book of Kells'
            },
            {
                id:3,
                title:'Flyer distribution',
                imageSrc:'https://www.thesun.ie/wp-content/uploads/sites/3/2020/02/NINTCHDBPICT000564557144.jpg',
                time:'22/01/24 Mon 16:00',
                location:'Art Building'
            },
        ],

           articleDetails:[
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                articleTags:['Media', 'Protest']
            },
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                tags:['Media', 'Protest']
            },
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                tags:['Media', 'Protest']
            },
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                tags:['Media', 'Protest']
            },
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                tags:['Media', 'Protest']
            },
            {
                title: 'TCD students blockade Book of Kells in protest over rising accommodation costs',
                time: 'Sept. 13 2023',
                src: 'The Irish Times',
                imageSrc:'https://universitytimes.ie/wp-content/uploads/2019/09/Rent-strikes-e1567537237117.jpg',
                tags:['Media', 'Protest']
            },
        ]

        }
        },
    methods:{

    }
}
</script>

<style scoped>


.carousel {
    display: flex;
    align-items:flex-end;
    position: absolute;
    gap: 20px;
    right: -200px;
    bottom:0;
 
}

.articleContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}

.head-container {
    display: flex;
    position: relative;
}

</style>

