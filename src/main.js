import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(fas, far)

const app = createApp(App);
app.use(router); 
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app'); 


