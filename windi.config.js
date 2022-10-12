import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import aspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin, aspectRatio],
})