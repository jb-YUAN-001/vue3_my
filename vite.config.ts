import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/',   // 关键配置
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 5173,
      open: true,
      hmr: { overlay: true },
      watch: { usePolling: false },
      proxy: {
        // 这里根据后端是否带/api选择是否保留rewrite
        [env.VITE_API_BASE_URL]: {
          target: 'http://localhost:25085',
          changeOrigin: true,
          // 后端接口不带/api则保留，带/api直接删除下面这行
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
