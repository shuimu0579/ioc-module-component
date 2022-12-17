import Vue from 'vue';
import App from './App.vue';

// 打包好的组件--本地测试
import IOCModuleComponent from '../dist/ioc-module-component.es.js';
import '../dist/style.css';

Vue.use(IOCModuleComponent);
Vue.use(IOCModuleComponent)
new Vue({
  render: h => h(App)
}).$mount('#app')
