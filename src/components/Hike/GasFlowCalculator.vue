<template>
    <v-container>
        <h2 class="font-weight-medium">Сколько газа взять в поход?</h2>
        <div>
            <p>
                Калькулятор поможет рассчитать, сколько баллонов с газом взять в
                поход.
            </p>
            <p>
                Параметры горелки: время закипания одного литра воды
                (определяется эмпирическим путем) и расход газа (определяется из
                характеристик горелки). Значения по умолчанию заданы для горелки
                BRS-3000T.
            </p>
            <p>
                В расчете используются резьбовые баллоны объемом 100г/230г/450г.
            </p>
        </div>
        <v-form v-model="valid">
            <v-row>
                <v-col cols="12" sm="4" md="3" lg="2">
                    <v-text-field
                        label="Количество туристов"
                        v-model="countTourist"
                        type="number"
                        min="1"
                        max="30"
                        autocomplete="off"
                        :rules="countTouristRules"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3" lg="2">
                    <v-text-field
                        label="Количество готовок в день"
                        v-model="countCooksPerDay"
                        type="number"
                        min="1"
                        max="3"
                        autocomplete="off"
                        :rules="countCooksPerDayRules"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3" lg="2">
                    <v-text-field
                        label="Количество дней"
                        v-model="countDays"
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
                        label="Время закипания 1 литра воды"
                        v-model="boilingTime"
                        type="time"
                        suffix="мм:сс"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="3" lg="2">
                    <v-text-field
                        label="Расход газа"
                        v-model="gasConsumption"
                        type="number"
                        min="1"
                        suffix="г/час"
                        autocomplete="off"
                        :rules="gasConsumptionRules"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-form>

        <v-btn color="accent" @click="calculateGasWeight()" :disabled="!valid">
            <v-icon class="pr-1"> mdi-fire </v-icon>
            Рассчитать
        </v-btn>

        <v-row v-if="gasWeight !== 0" class="d-flex flex-column my-2">
            <v-col>Результат, г: {{ gasWeight }} </v-col>
            <v-col v-if="gasWeight <= 100">
                Баллонов, шт (1 баллон <b>100</b> г):
                {{ Math.ceil(gasWeight / 100) }}
                <figure>
                    <img src="../../assets/gas/gas100.jpg" alt="" />
                </figure>
            </v-col>
            <v-col v-else-if="gasWeight > 100 && gasWeight <= 230">
                Баллонов, шт (1 баллон <b>230</b> г):
                {{ Math.ceil(gasWeight / 230) }}
                <figure>
                    <img src="../../assets/gas/gas230.jpg" alt="" />
                </figure>
            </v-col>
            <v-col v-else>
                Баллонов, шт (1 баллон <b>450</b> г):
                {{ gas450Cartridge }}
                <transition-group
                    v-if="gas450Cartridge < 20"
                    name="fade"
                    tag="figure"
                >
                    <img
                        v-for="n in gas450Cartridge"
                        :key="n"
                        src="../../assets/gas/gas450.jpg"
                    />
                </transition-group>
                <figure v-else class="d-flex">
                    <img src="../../assets/gas/gas450.jpg" alt="" />
                    <p class="py-4">× {{ gas450Cartridge }}</p>
                </figure>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            countTourist: 2,
            countCooksPerDay: 2,
            countDays: 10,
            boilingTime: "04:43",
            gasConsumption: 140,
            gasWeight: 0,
            gas450Cartridge: 0,

            valid: false,
            countTouristRules: [
                (v) => !!v || "Поле обязательно для заполнения",
                (v) =>
                    (v > 0 && v <= 30) ||
                    "Введите реальное количество туристов",
            ],
            countCooksPerDayRules: [
                (v) => !!v || "Поле обязательно для заполнения",
                (v) =>
                    (v > 0 && v <= 3) ||
                    "Введите реальное количество готовок в день",
            ],
            countDaysRules: [
                (v) => !!v || "Поле обязательно для заполнения",
                (v) => (v > 0 && v <= 30) || "Введите реальное количество дней",
            ],
            gasConsumptionRules: [
                (v) => !!v || "Поле обязательно для заполнения",
                (v) => v > 0 || "Ожидается положительное число",
            ],
        };
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
                +this.boilingTime.split(":")[0] * 60 +
                +this.boilingTime.split(":")[1];

            const gasConsumptionPerOneLiter =
                (boilingTimeInSeconds * this.gasConsumption) / 3600;

            const result =
                potVolume *
                gasConsumptionPerOneLiter *
                this.countTourist *
                this.countCooksPerDay *
                this.countDays;

            this.gasWeight = Math.round(result);

            this.gas450Cartridge = Math.ceil(this.gasWeight / 450);

            console.group("calculateGasWeight");
            console.log("potVolume", potVolume);
            console.log("boilingTimeInSeconds", boilingTimeInSeconds);
            console.log("gasConsumptionPerOneLiter", gasConsumptionPerOneLiter);
            console.log("result", result);
            console.log("Math.ceil(result)", Math.ceil(result));
            console.log("gas450Cartridge", this.gas450Cartridge);
            console.groupEnd();

            return this.gasWeight;
        },
    },
};
</script>

<style scoped>
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
</style>