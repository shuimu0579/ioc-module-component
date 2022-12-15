const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
import { pathResolve } from './build/utils.js'

const theme = pathResolve('./packages/styles/theme/ming.less')
const variablesLessPath = pathResolve('./packages/styles/global/variables.less')
const utilsLessPath = pathResolve('./packages/styles/global/utils.less')

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './packages/index.js'),
      name: 'iocModuleComponent',
      fileName: (format) => `ioc-module-component.${format}.js`,
    },
    rollupOptions: {
      // external: ['vue', 'element-plus'],
      // output: {
      //   globals: {
      //     vue: 'Vue',
      //     'element-plus': 'ElementPlus',
      //   }
      // },
    },
    terserOptions: {
      compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true,
      },
    },
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hask: `
            true;
            @import (reference) "${theme}";
            @import (reference) "${variablesLessPath}";
            @import (reference) "${utilsLessPath}";
          `
        },
        javascriptEnabled: true
      }
    }
  },
  // TODO 开发环境proxy配置
  server: {
    host: '0.0.0.0',
    port: 8291,
    https: false,
    proxy: {
        '^/api': {
            target: 'http://127.0.0.1:8001',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
  },
});
