/// <reference types="vite/client" />

// 声明所有 .vue 文件的模块类型
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}