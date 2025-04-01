import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@Assets': resolve(__dirname, './src/assets'),
      '@Assets/*': resolve(__dirname, './src/assets/*'),
      '@Components': resolve(__dirname, './src/components'),
      '@Pages': resolve(__dirname, './src/pages'),
      '@Section': resolve(__dirname, './src/sections'),
      '@Utils': resolve(__dirname, './src/utils'),
      '@Models': resolve(__dirname, './src/models')
    }
  }
})