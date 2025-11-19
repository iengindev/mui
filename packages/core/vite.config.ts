import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginDts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vitePluginDts({
      tsconfigPath: 'tsconfig.build.json',
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/shared/ui/index.ts', import.meta.url)),
      name: 'MUI',
      fileName: (format) => `mui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: true,
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
