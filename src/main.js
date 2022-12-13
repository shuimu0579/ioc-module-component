// import { createApp } from 'vue';
// import App from './App.vue';
// import './assets/index.css';
// createApp(App).mount('#app');


import { VButton, VButton01 } from 'vite-library-suimu';
import { createApp } from 'vue';
import AppDemo from './AppDemo.vue';
// import './assets/index.css';
const app = createApp(AppDemo);
app.use(VButton);
app.use(VButton01);
app.mount('#app')



