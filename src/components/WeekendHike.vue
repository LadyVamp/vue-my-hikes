<template>
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
            <div v-for="value in skiTracks" :key="value.key">
              <LinkButton
                :label="value.title"
                :link="value.link"
                :icon="'mdi-map-marker-multiple'"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <div v-for="value in kayakTracks" :key="value.key">
              <LinkButton
                :label="value.title"
                :link="value.link"
                :icon="'mdi-map-marker-multiple'"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
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
      skiTracks: [
        {
          title: 'Лыжи 2024',
          key: 'ski2024',
          link: 'https://nakarte.me/#m=9/55.84217/37.94952&l=O&nktl=YU_Ur7WKPRYctasoL3P14g',
        },
        {
          title: 'Лыжи 2023',
          key: 'ski2023',
          link: 'https://nakarte.me/#m=9/55.73175/37.97424&l=O&nktl=XnnSO2dAohvXstKVbrjz7g',
        },
        {
          title: 'Лыжи 2022',
          key: 'ski2022',
          link: 'https://nakarte.me/#m=10/55.83716/38.20221&l=O&nktl=q-moXVXl2vvYp0i4P9MKGQ',
        },
        {
          title: 'Лыжи 2021',
          key: 'ski2021',
          link: 'https://nakarte.me/#m=9/55.70622/37.89734&l=O&nktl=O1XNrzzifW9lYXGnYAg-Zg',
        },
        {
          title: 'Лыжи 2019',
          key: 'ski2019',
          link: 'https://nakarte.me/#m=9/55.68146/37.88361&l=O&nktl=4jcvaIU4Va78zDAgNSoP9g',
        },
        {
          title: 'Лыжи 2018',
          key: 'ski2018',
          link: 'https://nakarte.me/#m=9/55.72634/37.83966&l=O&nktl=qI8i0o0k_hWUc9T2s18L3Q',
        },
      ],
      kayakTracks: [
        {
          title: 'Байдарка 2023',
          key: 'kayak2023',
          link: 'https://nakarte.me/#m=12/55.50103/38.73919&l=O&nktl=G5HYVB837AxD7mzguSjBqw',
        },
        {
          title: 'Байдарка 2022',
          key: 'kayak2022',
          link: 'https://nakarte.me/#m=8/55.62334/38.28186&l=O&nktl=WMwSOEN_FnB3iynPmfCE6Q',
        },
        {
          title: 'Надувная лодка 2021',
          key: 'inflatableBoat2021',
          link: 'https://nakarte.me/#m=8/55.70081/37.96326&l=O&nktl=YEm6gnF3OXVZHSwor-BuTQ',
        },
      ],
    };
  },
};
</script>

<style></style>
