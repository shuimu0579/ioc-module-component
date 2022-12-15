import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VButton01 from './VButton01.vue'

VButton01.install = app => {
    app.use(ElementPlus)
    app.component(VButton01.name, VButton01)
}

export default VButton01
