# IOC Common Components

- 基于Vue2.7
- Vite
- ElementUI
- less全局变量和方法的配置

## 怎么开发公共组件

- 在`packages`文件夹里建立公共组件，在`index.html`里面选择`<script type="module" src="/src/main.js"></script>`
- 命令行执行 `npm run dev`

## 打包好的组件--本地测试

- 命令行执行 `npm run build`
- 在`index.html`里面选择`<script type="module" src="/exercise/main.js"></script>`
- 在`exercise/main.js`里面放开`import IOCModuleComponent from '../dist/ioc-module-component.es.js';`
- 命令行执行 `npm run dev`


