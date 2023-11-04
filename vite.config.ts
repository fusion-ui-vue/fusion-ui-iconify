import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('md-')
        }
      }
    }),
    visualizer({ open: true })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
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
