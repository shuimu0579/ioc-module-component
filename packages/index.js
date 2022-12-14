/* eslint-disable import/prefer-default-export */


import VButton from './VButton/index.js'
import VButton01 from './VButton01/index.js'

const install = app => {
    app.use(VButton);
    app.use(VButton01);
}

const TUI = {
    install,
}

export { VButton, VButton01 }

export default TUI




// export { default as VButton } from './VButton.vue';

// export { default as VButton01 } from './VButton01.vue';
