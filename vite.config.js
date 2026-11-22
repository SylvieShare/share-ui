import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import selectorParser from 'postcss-selector-parser'
import { pointerHoverCss } from './src/lib/pointerInput.js'

export default defineConfig({
  plugins: [vue()],
  css: { postcss: { plugins: [pointerHoverCss(selectorParser)] } },
  build: {
    lib: {
      entry: {
        'share-ui': fileURLToPath(new URL('./src/index.js', import.meta.url)),
        'share-ui-gallery': fileURLToPath(new URL('./src/gallery.js', import.meta.url)),
      },
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
      cssFileName: 'share-ui',
    },
    cssCodeSplit: false,
    rolldownOptions: {
      external: ['vue'],
    },
  },
})
