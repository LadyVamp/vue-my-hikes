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
              Лыжи 2022
              <LinkButton
                :label="'Треки на карте'"
                :link="links['ski2022']"
                :icon="'mdi-map-marker-multiple'"
              />
              Лыжи 2021
              <LinkButton
                :label="'Треки на карте'"
                :link="links['ski2021']"
                :icon="'mdi-map-marker-multiple'"
              />
              Лыжи 2019
              <LinkButton
                :label="'Треки на карте'"
                :link="links['ski2019']"
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
        ski2022: 'https://nakarte.me/#m=10/55.83716/38.20221&l=O&nktl=q-moXVXl2vvYp0i4P9MKGQ',
        ski2021: 'https://nakarte.me/#m=9/55.70622/37.89734&l=O&nktl=O1XNrzzifW9lYXGnYAg-Zg',
        ski2019: 'https://nakarte.me/#m=9/55.68146/37.88361&l=O&nktl=4jcvaIU4Va78zDAgNSoP9g',
        kayak2022: 'https://nakarte.me/#m=8/55.62334/38.28186&l=O&nktl=WMwSOEN_FnB3iynPmfCE6Q',
      },
    };
  },
};
</script>

<style></style>
