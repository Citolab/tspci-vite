import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/web/',
  build: {
    copyPublicDir: false,
    lib: {
      name:"pci",
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['umd']
    },
    rollupOptions: {
      external:"qtiCustomInteractionContext",
      output: {
        entryFileNames: "index.js",
        dir: "public"
      }
    },
  },
});

