import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({})
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/App'),
      '@rwv': path.resolve(__dirname, './src/reportWebVitals'),
      '@screens': path.resolve(__dirname, './src/screens'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@fonts': path.resolve(__dirname, './src/fonts'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),

      '@common': path.resolve(__dirname, './src/components/common-co'),
      '@layout': path.resolve(__dirname, './src/components/layout-co')
    }
  }
})