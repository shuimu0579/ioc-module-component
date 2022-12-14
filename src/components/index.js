/* eslint-disable import/prefer-default-export */


import VButton from './VButton.vue'
import VButton01 from './VButton01.vue'
import _Vue from 'vue'

VButton.install = (Vue) => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  } else {
    Vue.component(VButton.name, VButton)
  }
}

VButton01.install = (Vue) => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  } else {
    Vue.component(VButton01.name, VButton01)
  }
}

export { VButton, VButton01 }




// export { default as VButton } from './VButton.vue';

// export { default as VButton01 } from './VButton01.vue';
