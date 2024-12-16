import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, './src')},
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
    ],
  },
})