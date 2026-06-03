<template>
  <v-container>
    <h2 class="font-weight-medium">Калькулятор расхода топлива</h2>
    <v-form>
      <v-row>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="distance"
            label="Расстояние (км)"
            type="number"
            min="0"
            autocomplete="off"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="consumption"
            label="Средний расход (литров на 100 км)"
            type="number"
            min="0"
            autocomplete="off"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="pricePerLiter"
            label="Цена за литр (руб)"
            type="number"
            min="0"
            autocomplete="off"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="fuelTankCapacity"
            label="Объём бензобака (л)"
            type="number"
            min="0"
            autocomplete="off"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4" md="3" lg="2">
          Израсходовано топлива
          <p>{{ fuelConsumed }} л</p>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          Стоимость
          <p>{{ price }} ₽</p>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          Количество дозаправок
          <p v-if="numberOfFefuelings > 0 || isFinite(numberOfFefuelings)">
            {{ numberOfFefuelings }}
          </p>
          <p v-else>&mdash;</p>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      distance: 0,
      consumption: 8.5,
      pricePerLiter: 70,
      fuelTankCapacity: 55,
    };
  },

  computed: {
    fuelConsumed() {
      return ((this.distance * this.consumption) / 100).toFixed(2);
    },
    price() {
      return (this.fuelConsumed * this.pricePerLiter).toLocaleString('ru-RU');
    },
    numberOfFefuelings() {
      return Math.ceil(this.fuelConsumed / this.fuelTankCapacity);
    },
  },
};
</script>

<style lang="scss" scoped></style>
