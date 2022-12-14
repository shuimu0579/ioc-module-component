// import { createApp } from 'vue';
// import App from './App.vue';
// createApp(App).mount('#app');


import TUI from 'vite-library-suimu';
import '../node_modules/vite-library-suimu/dist/style.css';
import { createApp } from 'vue';
import AppDemo from './AppDemo.vue';
const app = createApp(AppDemo);
app.use(TUI);
app.mount('#app')


