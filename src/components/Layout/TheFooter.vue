<template>
  <v-footer padless>
    <v-col class="text-center text-body-2 py-1" cols="12">
      © 2021—{{ new Date().getFullYear() }}
      <a
        href="https://ladyvamp.github.io/ng-portfolio/"
        target="_blank"
        title="Перейти к портфолио"
      >
        Nadezhda Kuzova aka LadyVamp
      </a>
    </v-col>
    <v-col class="text-right pt-0 pb-1 caption" cols="12">
      <a
        href="https://ladyvamp.github.io/vue-my-hikes/"
        class="grey--text text--darken-3"
        target="_blank"
      >
        {{ version }}
      </a>
    </v-col>
  </v-footer>
</template>

<script>
import { version } from '../../../package.json';
export default {
  data() {
    return {
      version: 'v' + version,
    };
  },
};
</script>
<style lang="scss" scoped></style>
