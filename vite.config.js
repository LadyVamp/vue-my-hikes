import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;

/**
 * TODO: если так делать,
 * "build": "vite build --mode prod --base=https://ladyvamp.github.io/vue-my-hikes/",
 * то y home-страницы адрес https://ladyvamp.github.io/
 *    у калькулятора https://ladyvamp.github.io/calculator
 * должно быть https://ladyvamp.github.io/vue-my-hikes
 *             https://ladyvamp.github.io/vue-my-hikes/calculator
 */
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        VuetifyResolver(),
      ],
    }),
  ],
  resolve: {
    alias: [
      { find: '@/', replacement: REPLACEMENT },
      { find: 'src/', replacement: REPLACEMENT },
    ],
  },
});

