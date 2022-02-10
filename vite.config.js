import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ compilerOptions: {
    customElement: true,
  },})],
  build: {
    rollupOptions: {
      input: ['./src/main.js'],
    },
    /*lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'MyLib',
      //fileName: (format) => `my-lib.${format}.js`
    },*/
   /*rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }*/
  }
})
