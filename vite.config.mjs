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
      '@config': path.resolve(__dirname, './src/config'),
      '@store': path.resolve(__dirname, './src/store'),
      '@slice': path.resolve(__dirname, './src/store/slice'),
      '@components': path.resolve(__dirname, './src/components'),
      '@resources': path.resolve(__dirname, './src/resources'),
      '@webservices': path.resolve(__dirname, './src/webservices'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  }
})