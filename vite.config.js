import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// src 目录的绝对路径
const pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
        alias: {
            // 配置 src 目录的别名为 @
            "@": pathSrc,
        }
    },
    server: {
        port: 8085
    }
})
