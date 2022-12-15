import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VButton from './VButton.vue'

VButton.install = app => {
    app.use(ElementPlus)
    app.component(VButton.name, VButton)
}

export default VButton
