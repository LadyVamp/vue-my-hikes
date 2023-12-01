<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <v-tabs>
          <v-tab to="/">
            <v-icon class="pr-1">mdi-routes</v-icon>
            Маршруты
          </v-tab>
          <v-tab to="/calculator">
            <v-icon class="pr-1">mdi-calculator</v-icon>
            Калькулятор
          </v-tab>
          <v-tab to="/weekendhike">
            <v-icon class="pr-1">mdi-map</v-icon>
            ПВД
          </v-tab>
          <v-tab to="/dev">
            <v-icon class="pr-1">mdi-code-tags</v-icon>
            Dev
          </v-tab>
        </v-tabs>
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import TheFooter from '@/components/Layout/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  metaInfo: {
    title: 'База треков моих походов',
    titleTemplate: "%s | LadyVamp's hikes",
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
