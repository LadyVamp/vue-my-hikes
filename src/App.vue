<template>
  <v-app>
    <TheHeader :menu-items="menuItems" />
    <v-main>
      <v-container>
        <TheTabs :menu-items="menuItems" />
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import TheFooter from '@/components/Layout/TheFooter.vue';
import TheTabs from '@/components/Layout/TheTabs.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheTabs,
  },
  metaInfo: {
    title: 'База треков моих походов',
    titleTemplate: "%s | LadyVamp's hikes",
  },
  data() {
    return {
      menuItems: [
        {
          name: 'Маршруты',
          path: '/',
          icon: 'mdi-routes',
        },
        {
          name: 'Калькулятор',
          path: '/calculator',
          icon: 'mdi-calculator',
        },
        {
          name: 'ПВД',
          path: '/weekendhike',
          icon: 'mdi-map',
        },
        {
          name: 'Dev',
          path: '/dev',
          icon: 'mdi-code-tags',
        },
        {
          name: 'Links',
          path: '/links',
          icon: 'mdi-book-information-variant',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
