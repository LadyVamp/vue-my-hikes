<template>
  <div>
    <v-card>
      <v-toolbar flat color="primary" dark>
        <v-toolbar-title>Походы выходного дня</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>
            mdi-ski
          </v-icon>
          Лыжи
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-kayaking
          </v-icon>
          Сплавы
        </v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Лыжи 2021-2022
              <LinkButton
                :label="'Треки на карте'"
                :link="links['ski2021']"
                :icon="'mdi-map-marker-multiple'"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              Сплавы 2022
              <LinkButton
                :label="'Треки на карте'"
                :link="links['kayak2022']"
                :icon="'mdi-map-marker-multiple'"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import LinkButton from '@/components/Buttons/LinkButton.vue';

export default {
  name: 'WeekendHike',
  components: {
    LinkButton,
  },
  data() {
    return {
      links: {
        ski2021: 'https://nakarte.me/#m=10/55.83716/38.20221&l=O&nktl=q-moXVXl2vvYp0i4P9MKGQ',
        kayak2022: 'https://nakarte.me/#m=8/55.62334/38.28186&l=O&nktl=WMwSOEN_FnB3iynPmfCE6Q',
      },
    };
  },
};
</script>

<style></style>
