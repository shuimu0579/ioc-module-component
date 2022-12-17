import ElementPlus from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VButton from './VButton.vue'

VButton.install = app => {
    app.use(ElementPlus)
    app.component(VButton.name, VButton)
}

export default VButton
