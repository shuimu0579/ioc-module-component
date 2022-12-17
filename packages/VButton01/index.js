import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VButton01 from './VButton01.vue'

VButton01.install = app => {
    app.use(ElementUI)
    app.component(VButton01.name, VButton01)
}

export default VButton01
