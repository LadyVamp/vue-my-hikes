<template>
  <div v-if="item" class="d-flex flex-column">
    <div>
      <h2>{{ item.name }}</h2>
      <p>
        <b>Регион:</b>
        <FlagIcon :country="item.region" class="d-inline px-1" />{{ item.region }}
        <span v-if="item.district">({{ item.district }})</span>
      </p>
      <p><b>Даты:</b> {{ item.dates }}</p>
      <p><b>Количество дней: </b>{{ dayDiff() }}</p>
      <p>
        <b>Тип:</b>
        <span v-if="item.type === 'bike'" title="Велосипедный поход">
          <v-icon large color="secondary" class="ml-2">
            mdi-bike
          </v-icon>
        </span>
        <span v-if="item.type === 'hiking'" title="Пеший поход">
          <v-icon large color="secondary" class="ml-2">
            mdi-hiking
          </v-icon>
        </span>
      </p>
      <p><b>Протяженность:</b> {{ item.distance }} км</p>
    </div>
    <div class="d-flex flex-column">
      <LinkButton v-if="item.report" label="Отчет" :link="item.report" :icon="'mdi-file'" />
      <LinkButton :label="'Трек'" :link="item.track" :icon="'mdi-map-marker-multiple'" />
      <YoutubeButton v-if="item.video" :link="item.video" />
    </div>
    <BackButton />
  </div>
</template>

<script>
import LinkButton from "@/components/Buttons/LinkButton.vue";
import BackButton from "@/components/Buttons/BackButton.vue";
import YoutubeButton from "@/components/Buttons/YoutubeButton.vue";
import FlagIcon from "@/components/Hike/FlagIcon.vue";

export default {
  components: {
    LinkButton,
    BackButton,
    FlagIcon,
    YoutubeButton
  },
  data() {
    return {
      title: ""
    };
  },
  metaInfo() {
    return {
      title: this.title
    };
  },
  computed: {
    item() {
      if (this.$store.getters.HIKES) {
        const item = this.$store.getters.HIKES.find(item => item.id === +this.$route.params.id);
        this.title = item.name;
        return item;
      }
    }
  },
  mounted() {
    this.$store.dispatch("GET_HIKE");
  },
  methods: {
    dayDiff() {
      const date1 = new Date(this.item.date_start);
      const date2 = new Date(this.item.date_end);
      return Math.abs(date1.getTime() - date2.getTime()) / 86400000;
    }
  }
};
</script>

<style lang="scss" scoped></style>
