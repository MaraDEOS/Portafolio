import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss'
import { resolve } from 'path'

const rootDir = import.meta.dirname;

export default defineConfig({
  base: './',
  plugins: [
    htmlPurge({
      content: [
        resolve(rootDir, '*.html'),
        resolve(rootDir, 'src/**/*.js')
      ],
      safelist: [
        'active',
        /data-theme/,
        /dark/,
        /light/
      ]
    })
  ]
})
