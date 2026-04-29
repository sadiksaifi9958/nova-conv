import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/currencyConvertor/',
  plugins: [
    tailwindcss(),
  ],
})