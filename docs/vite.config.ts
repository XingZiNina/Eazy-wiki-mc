// docs/vite.config.ts 或项目根目录 vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            display: 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
  ],
})
