/* eslint-disable import/prefer-default-export */


import VButton from './VButton.vue'
import VButton01 from './VButton01.vue'

VButton.install = (Vue) => {
    Vue.component(VButton.name, VButton)
}

VButton01.install = (Vue) => {
    Vue.component(VButton01.name, VButton01)
}

export { VButton, VButton01 }




// export { default as VButton } from './VButton.vue';

// export { default as VButton01 } from './VButton01.vue';
