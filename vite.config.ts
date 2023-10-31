import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('md-')
        }
      }
    })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './src/components/material-icons/index.ts'),
      name: 'dist',
      fileName: 'dist'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
