import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Alegreya',
      cssVariable: '--font-display',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/alegreya-latin-400-normal.woff2'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-400-italic.woff2'],
            weight: '400',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-500-normal.woff2'],
            weight: '500',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-500-italic.woff2'],
            weight: '500',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-600-normal.woff2'],
            weight: '600',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-600-italic.woff2'],
            weight: '600',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-700-normal.woff2'],
            weight: '700',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-700-italic.woff2'],
            weight: '700',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-800-normal.woff2'],
            weight: '800',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-800-italic.woff2'],
            weight: '800',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-900-normal.woff2'],
            weight: '900',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-latin-900-italic.woff2'],
            weight: '900',
            style: 'italic',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Alegreya Sans',
      cssVariable: '--font-body',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-100-normal.woff2'],
            weight: '100',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-100-italic.woff2'],
            weight: '100',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-300-normal.woff2'],
            weight: '300',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-300-italic.woff2'],
            weight: '300',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-400-normal.woff2'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-400-italic.woff2'],
            weight: '400',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-500-normal.woff2'],
            weight: '500',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-500-italic.woff2'],
            weight: '500',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-700-normal.woff2'],
            weight: '700',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-700-italic.woff2'],
            weight: '700',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-800-normal.woff2'],
            weight: '800',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-800-italic.woff2'],
            weight: '800',
            style: 'italic',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-900-normal.woff2'],
            weight: '900',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/alegreya-sans-latin-900-italic.woff2'],
            weight: '900',
            style: 'italic',
          },
        ],
      },
    },
  ],
})
