import { createApp } from 'vue';
import './assets/css/main.css';
import App from './App.vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
app.use(router);
app.use(VueSplide);
app.use(MotionPlugin);
app.mount('#app');
