<template>
  <figure>
    <img
      v-for="n in numberOfCountries(country)"
      :key="n"
      class="flag"
      :src="getFlagSrc(country.split(', ')[n - 1])"
    />
  </figure>
</template>

<script>
export default {
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      countryCodeDict: {
        Россия: 'ru',
        Армения: 'am',
        Азербайджан: 'az',
        Грузия: 'ge',
        Абхазия: 'abk',
      },
    };
  },
  methods: {
    numberOfCountries(countryName) {
      return countryName.split(', ').length;
    },
    getFlagSrc(countryName) {
      if (countryName) {
        // Абхазии нет на https://flagicons.lipis.dev/
        return countryName === 'Абхазия'
          ? 'https://snipboard.io/1OnRJ2.jpg'
          : 'https://flagicons.lipis.dev/flags/4x3/' + this.countryCodeDict[countryName] + '.svg';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flag {
  width: 30px;
  padding: 1px;
}
</style>
