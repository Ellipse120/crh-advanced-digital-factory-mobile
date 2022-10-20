import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import WindiCSS from "vite-plugin-windicss";
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vueJsx(),
    WindiCSS(),
    quasar({
      sassVariables: 'src/assets/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
