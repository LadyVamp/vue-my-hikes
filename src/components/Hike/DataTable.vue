<template>
  <v-card>
    <v-card-title>
      <h3 class="font-weight-medium">Список маршрутов</h3>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="'Поиск по ' + hikesCount + ' маршрутам'"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      v-if="hikesList"
      :headers="headers"
      :items="hikesList"
      :search="search"
      :sort-by="'date_start'"
      :sort-desc="true"
    >
      <template v-slot:[`item.type`]="{ item }">
        <v-icon v-if="item.type === 'bike'" large color="secondary" title="Вело">
          mdi-bike
        </v-icon>
        <v-icon v-if="item.type === 'hiking'" large color="secondary" title="Пеший">
          mdi-hiking
        </v-icon>
      </template>
      <template v-slot:[`item.name`]="{ item }">
        <router-link :to="{ path: '/hike/' + item.id }" title="Перейти к описанию">
          {{ item.name }}
        </router-link>
      </template>
      <template v-slot:[`item.region`]="{ item }">
        <FlagIcon :country="item.region" />
        {{ item.region }}
      </template>
      <template v-slot:[`item.date_start`]="{ item }">
        {{ item.dates }}
      </template>
      <template v-slot:[`item.track`]="{ item }">
        <a :href="item.track" target="_blank">
          {{ addEllipsisForMobile(item.track) }}
        </a>
      </template>
    </v-data-table>
    <div v-else class="text-center">
      <v-progress-circular class="my-4" indeterminate color="primary"></v-progress-circular>
    </div>
  </v-card>
</template>

<script>
import FlagIcon from '@/components/Hike/FlagIcon.vue';

export default {
  components: {
    FlagIcon,
  },
  data() {
    return {
      search: '',
      headers: [
        { text: '', value: 'type', sortable: false },
        { text: 'Название', value: 'name' },
        { text: 'Регион', value: 'region' },
        { text: 'Даты', value: 'date_start' },
        { text: 'Трек', value: 'track', sortable: false },
      ],
    };
  },
  computed: {
    hikesCount() {
      return this.$store.getters.getAllHikesCounter;
    },
    hikesList() {
      return this.$store.getters.getAllHikes;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHikes');
  },
  methods: {
    addEllipsisForMobile(link) {
      return this.$vuetify.breakpoint.mobile ? link.slice(0, 30) + '...' : link;
    },
  },
};
</script>
<style lang="scss" scoped></style>
