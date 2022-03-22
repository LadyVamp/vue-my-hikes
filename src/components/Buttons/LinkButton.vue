<template>
  <div class="my-2">
    <v-btn :href="link" target="_blank" color="primary">
      <v-icon class="pr-1">
        {{ icon }}
      </v-icon>
      {{ label }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    // icons https://materialdesignicons.com/
    icon: {
      type: String,
      default: 'mdi-link',
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  &:hover {
    text-decoration: none;
  }
}
</style>
