<template>
  <div>
    <LinkButton
      label="Список станций с валидаторами"
      link="https://www.central-ppk.ru/new/help/help_item.php?page=2776052"
      :icon="'mdi-map-marker-check-outline'"
    />
    <LinkButton
      label="VPN. Список станций с турникетами"
      link="https://vk.com/topic-155711_21967995"
      :icon="'mdi-vpn'"
    />
    <v-row>
      <v-col class="d-flex justify-end">
        <div>
          <v-text-field
            v-model.trim="search"
            append-icon="mdi-magnify"
            label="Поиск"
            single-line
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="20"
      :search="search"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'Диаметр', value: 'diameter' },
        { text: 'Станция', value: 'station' },
        { text: 'Направление', value: 'direction' },
        { text: 'Описание', value: 'description' },
      ],
      items: [
        {
          diameter: 'D2',
          station: 'Трикотажная',
          direction: 'Рижское',
          description: 'верх',
        },
        {
          diameter: 'D2',
          station: 'Щербинка',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D2',
          station: 'Битца',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D2',
          station: 'Красный строитель',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D2',
          station: 'Перерва',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D2',
          station: 'Щербинка',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D2',
          station: 'Щербинка',
          direction: 'Курское',
          description: 'низ',
        },
        {
          diameter: 'D3',
          station: 'по Ленинградскому направлению на сайте ЦППК нет инфы про валидаторы',
          direction: 'Ленинградское',
          description: 'верх',
        },
        {
          diameter: 'D3',
          station: 'по Казанскому направлению на сайте ЦППК нет инфы про валидаторы',
          direction: 'Казанское',
          description: 'низ',
        },
        {
          diameter: 'D1',
          station: 'Марк',
          direction: 'Савеловское',
          description: 'верх',
        },
        {
          diameter: 'D1',
          station: 'Дегунино',
          direction: 'Савеловское',
          description: 'верх',
        },
        {
          diameter: 'D1',
          station: 'по Белорусскому направлению нет валидаторов в центральной зоне',
          direction: 'Белорусское',
          description: 'низ',
        },
        {
          diameter: 'D4',
          station: 'Кусково',
          direction: 'Нижегородское',
          description: 'верх',
        },
        {
          diameter: 'D4',
          station: 'по Калужскому направлению на сайте ЦППК нет инфы про валидаторы',
          direction: 'Калужское',
          description: 'низ',
        },
      ],
    };
  },
};
</script>
