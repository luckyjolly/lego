import { createApp } from 'vue';
import router from '@/router/index';
import Antd from './plugins/antd';
import App from './App.vue';

const app = createApp(App);
app.use(router).use(Antd);
app.mount('#app');
