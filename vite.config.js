import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import basicSsl from '@vitejs/plugin-basic-ssl'
import WindiCSS from "vite-plugin-windicss";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    // basicSsl(),
    WindiCSS(),
    quasar({
      sassVariables: 'src/assets/quasar-variables.sass'
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
