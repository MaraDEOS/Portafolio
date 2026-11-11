import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss'
import { resolve } from 'path'

const rootDir = import.meta.dirname;

export default defineConfig({
  root: 'src',
  plugins: [
    htmlPurge({
      content: [
        resolve(rootDir, 'src/**/*.html'),
        resolve(rootDir, 'src/**/*.js')
      ],
      safelist: [
        'active',
        /data-theme/,
        /dark/,
        /light/
      ]
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
