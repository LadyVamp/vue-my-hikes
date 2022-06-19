<template>
  <div v-if="hike" class="d-flex flex-column">
    <div>
      <h2 class="primary--text">{{ hike.name }}</h2>
      <p>
        <b>Регион:</b>
        <FlagIcon :country="hike.region" class="d-inline px-1" />{{ hike.region }}
        <span v-if="hike.district">({{ hike.district }})</span>
      </p>
      <p><b>Даты:</b> {{ hike.dates }}</p>
      <p><b>Количество дней: </b>{{ dayDiff() }}</p>
      <p>
        <b>Тип:</b>
        <span v-if="hike.type === 'bike'" title="Велосипедный поход">
          <v-icon large color="secondary" class="ml-2">
            mdi-bike
          </v-icon>
        </span>
        <span v-if="hike.type === 'hiking'" title="Пеший поход">
          <v-icon large color="secondary" class="ml-2">
            mdi-hiking
          </v-icon>
        </span>
      </p>
      <p><b>Протяженность:</b> {{ hike.distance }} км</p>
    </div>
    <div class="d-flex flex-column">
      <LinkButton v-if="hike.report" label="Отчет" :link="hike.report" :icon="'mdi-file'" />
      <LinkButton :label="'Трек на карте'" :link="hike.track" :icon="'mdi-map-marker-multiple'" />
      <YoutubeButton v-if="hike.video" :link="hike.video" />
      <LinkButton label="Скачать трек" :link="`tracks/${hike.id}.kml`" :icon="'mdi-download'" />
    </div>
    <BackButton />
  </div>
</template>

<script>
import LinkButton from '@/components/Buttons/LinkButton.vue';
import BackButton from '@/components/Buttons/BackButton.vue';
import YoutubeButton from '@/components/Buttons/YoutubeButton.vue';
import FlagIcon from '@/components/Hike/FlagIcon.vue';

export default {
  components: {
    LinkButton,
    BackButton,
    FlagIcon,
    YoutubeButton,
  },
  data() {
    return {
      title: '',
    };
  },
  computed: {
    hike() {
      return this.$store.getters.getCurrentHike;
    },
  },
  updated() {
    this.title = this.hike.name;
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  mounted() {
    this.$store.dispatch('fetchHikes', this.$route.params.id);
  },
  methods: {
    dayDiff() {
      const date1 = new Date(this.hike.date_start);
      const date2 = new Date(this.hike.date_end);
      return Math.abs(date1.getTime() - date2.getTime()) / 86400000;
    },
  },
};
</script>

<style lang="scss" scoped></style>
