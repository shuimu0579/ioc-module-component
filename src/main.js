import ElementPlus from "element-ui"
import Vue from 'vue';
import App from './App.vue';

Vue.use(ElementPlus)

new Vue({
  render: h => h(App)
}).$mount('#app')

