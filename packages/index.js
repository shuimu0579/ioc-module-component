import ElementPlus from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VButton from './VButton/index.js'
import VButton01 from './VButton01/index.js'
import "./styles/reset.less"

const install = app => {
    app.use(ElementPlus)

    app.use(VButton);
    app.use(VButton01);
}
const IOCModuleComponent = {
    install,
}

// 公共组件按需加载
export { VButton, VButton01 }

// 公共组件整体加载
export default IOCModuleComponent
