import ElementUI from "element-ui"
import Vue from 'vue';
import App from './App.vue';

Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')

