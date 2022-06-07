<template>
  <v-container>
    <h2 class="font-weight-medium">Калькулятор расхода газа для горелки</h2>
    <v-row class="d-flex">
      <v-col sm="12" md="6" lg="6">
        <div class="description">
          <p>
            Калькулятор поможет рассчитать, сколько баллонов с газом взять в поход.
          </p>
          <p>
            В расчете используются резьбовые баллоны объемом 100г/230г/450г.
          </p>
          <p>
            Параметры горелки: время закипания одного литра воды (определяется эмпирическим путем) и
            расход газа (определяется из характеристик горелки). Значения по умолчанию заданы для
            горелки BRS-3000T
            <v-btn
              title="Показать таблицу с эмпирическими данными"
              fab
              dark
              x-small
              color="#73C573"
              @click="isShowTable = !isShowTable"
            >
              <v-icon dark> mdi-flask </v-icon>
            </v-btn>
          </p>
        </div>
      </v-col>
      <v-col v-if="isShowTable">
        <EmpiricTable />
      </v-col>
    </v-row>

    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="countTourist"
            label="Количество туристов"
            type="number"
            min="1"
            max="30"
            autocomplete="off"
            :rules="countTouristRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="countCooksPerDay"
            label="Количество готовок в день"
            type="number"
            min="1"
            max="3"
            autocomplete="off"
            :rules="countCooksPerDayRules"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="countDays"
            label="Количество дней"
            type="number"
            min="1"
            max="30"
            autocomplete="off"
            :rules="countDaysRules"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="boilingTime"
            label="Время закипания 1 литра воды"
            type="time"
            suffix="мм:сс"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" lg="2">
          <v-text-field
            v-model="gasConsumption"
            label="Расход газа"
            type="number"
            min="1"
            suffix="г/час"
            autocomplete="off"
            :rules="gasConsumptionRules"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>

    <v-btn color="accent" :disabled="!valid" @click="calculateGasWeight()">
      <v-icon class="pr-1"> mdi-fire </v-icon>
      Рассчитать
    </v-btn>

    <v-row v-if="totalGasWeight !== 0" class="d-flex flex-column my-2">
      <v-col>Вес газа (нетто): {{ totalGasWeight }} г</v-col>
      <v-col v-if="totalGasWeight <= 100">
        Баллонов, шт (1 баллон <b>100</b> г):
        {{ Math.ceil(totalGasWeight / 100) }}
        <br />
        Вес баллонов (брутто): {{ GAS_100_CARTRIDGE_GROSS_WEIGHT }} г
        <figure>
          <img src="../../assets/gas/gas100.jpg" alt="" />
        </figure>
      </v-col>
      <v-col v-else-if="totalGasWeight > 100 && totalGasWeight <= 230">
        Баллонов, шт (1 баллон <b>230</b> г):
        {{ Math.ceil(totalGasWeight / 230) }}
        <br />
        Вес баллонов (брутто): {{ GAS_230_CARTRIDGE_GROSS_WEIGHT }} г
        <figure>
          <img src="../../assets/gas/gas230.jpg" alt="" />
        </figure>
      </v-col>
      <v-col v-else>
        Количество баллонов 450г: <b>{{ gas450Cartridge }}</b>
        <br />
        Вес баллонов (брутто): {{ totalWeight }} г
        <transition-group
          v-if="gas450Cartridge < 15 && this.$vuetify.breakpoint.width > 768"
          name="fade"
          tag="figure"
        >
          <img v-for="n in gas450Cartridge" :key="n" src="../../assets/gas/gas450.jpg" />
        </transition-group>
        <figure v-else class="d-flex">
          <img src="../../assets/gas/gas450.jpg" alt="" />
          <p class="py-4">× {{ gas450Cartridge }}</p>
        </figure>
      </v-col>
      <v-col v-if="totalGasWeight > 230">
        <p v-if="gas450Cartridge === 1">1 неполный баллон {{ calculateResidue() }} г</p>
        <p v-else>
          {{ gas450Cartridge - 1 }} полных баллонов + 1 неполный {{ calculateResidue() }} г:
        </p>
        <IncompleteGasCartridge :percent="Math.floor((calculateResidue() / 450) * 100)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IncompleteGasCartridge from '@/components/Calculator/IncompleteGasCartridge.vue';
import EmpiricTable from '@/components/Calculator/EmpiricTable.vue';

export default {
  components: {
    IncompleteGasCartridge,
    EmpiricTable,
  },
  data() {
    return {
      GAS_100_CARTRIDGE_GROSS_WEIGHT: 210,
      GAS_230_CARTRIDGE_GROSS_WEIGHT: 380,
      GAS_450_CARTRIDGE_GROSS_WEIGHT: 670,
      countTourist: 2,
      countCooksPerDay: 2,
      countDays: 10,
      boilingTime: '06:29',
      gasConsumption: 140,
      totalGasWeight: 0,
      gas450Cartridge: 0,

      valid: false,
      countTouristRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => (v > 0 && v <= 30) || 'Введите реальное количество туристов',
        (v) => Number.isInteger(+v) || 'Ожидается целое число',
      ],
      countCooksPerDayRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => (v > 0 && v <= 3) || 'Введите реальное количество готовок в день',
      ],
      countDaysRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => (v > 0 && v <= 30) || 'Введите реальное количество дней',
      ],
      gasConsumptionRules: [
        (v) => !!v || 'Поле обязательно для заполнения',
        (v) => v > 0 || 'Ожидается положительное число',
      ],

      isShowTable: false,
    };
  },
  computed: {
    totalWeight() {
      return this.gas450Cartridge * this.GAS_450_CARTRIDGE_GROSS_WEIGHT;
    },
  },
  methods: {
    /**
     * Вес газа = Объем кана * Расход газа на 1 литр воды * Кол-во туристов * Кол-во готовок в день * Кол-во дней
     * где
     *      Объем кана = пол-литра на человека
     *      Расход газа на 1 литр воды = Время закипания 1 литра воды (сек) * Расход газа (г/час) / 3600
     */
    calculateGasWeight() {
      const potVolume = 0.5 * this.countTourist;

      const boilingTimeInSeconds =
        +this.boilingTime.split(':')[0] * 60 + +this.boilingTime.split(':')[1];

      const gasConsumptionPerOneLiter = (boilingTimeInSeconds * this.gasConsumption) / 3600;

      const result =
        potVolume *
        gasConsumptionPerOneLiter *
        this.countTourist *
        this.countCooksPerDay *
        this.countDays;

      this.totalGasWeight = Math.round(result);

      this.gas450Cartridge = Math.ceil(this.totalGasWeight / 450);

      console.group('calculateGasWeight');
      console.log('potVolume', potVolume);
      console.log('boilingTimeInSeconds', boilingTimeInSeconds);
      console.log('gasConsumptionPerOneLiter', gasConsumptionPerOneLiter);
      console.log('result', result);
      console.log('gas450Cartridge', this.gas450Cartridge);
      console.log(
        'percent for IncompleteGasCartridge',
        Math.floor(((this.totalGasWeight % 450) / 450) * 100),
      );
      console.groupEnd();

      return this.totalGasWeight;
    },

    /**
     * Остаток газа в неполном баллоне
     */
    calculateResidue() {
      return this.totalGasWeight % 450;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 100px;
}
figure p {
  font-size: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 900px) {
  .description {
    height: 320px;
  }
}
</style>
