import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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
