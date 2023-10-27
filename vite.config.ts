import { defineConfig } from "vite";
import { resolve } from 'path';
import path from "path";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import PurgeIcons from 'vite-plugin-purge-icons'
import progress from 'vite-plugin-progress'
const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    progress(),
    // createSvgIconsPlugin({
    //   iconDirs: [pathResolve('src/assets/svgs')],
    //   symbolId: 'icon-[dir]-[name]',
    //   svgoOptions: true
    // }),
    // PurgeIcons(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, "./src/components/Icon/index.ts"),
      name: 'dist',
      fileName: 'dist',
    }, // 库编译模式配置

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
