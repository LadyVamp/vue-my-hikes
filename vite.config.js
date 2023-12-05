import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;
/**
 * TODO:
 * заменить mode hash на mode history, но при этом страница должна нормально обновляться, а не 404 not found
 * hash https://ladyvamp.github.io/vue-my-hikes/#/calculator
 * history https://ladyvamp.github.io/vue-my-hikes/calculator
 */
// https://vitejs.dev/config/

export default defineConfig({
  base: '/vue-my-hikes/',
  define: {
    'process.env': {},
  },
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VuetifyResolver()],
    }),
  ],
  resolve: {
    alias: [
      { find: '@/', replacement: REPLACEMENT },
      { find: 'src/', replacement: REPLACEMENT },
    ],
  },
});
