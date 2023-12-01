import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path';

const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;

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
        // Vuetify
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

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue2';
// import path from 'path';

// const REPLACEMENT = `${path.resolve(__dirname, './src')}/`;

// export default () => {
//   return defineConfig({
//     define: {
//       'process.env': {},
//     },
//     server: {
//       port: 8080,
//     },
//     resolve: {
//       alias: [
//         { find: '@/', replacement: REPLACEMENT },
//         { find: 'src/', replacement: REPLACEMENT },
//       ],
//     },
//     plugins: [vue()],
//   });
// };
