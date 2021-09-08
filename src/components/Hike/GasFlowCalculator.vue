<template>
    <v-container fluid>
        <h2>Калькулятор расхода газа для горелки</h2>
        <v-row>
            <v-col>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, at. Aliquam, recusandae voluptate accusantium
                    aperiam minus architecto ducimus sunt sed officia esse
                    repellat odit, maiores inventore quisquam id necessitatibus
                    aliquid.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field
                    label="Количество туристов"
                    v-model="countTourist"
                    type="number"
                    min="1"
                    max="30"
                ></v-text-field>
                <v-text-field
                    label="Количество готовок в день"
                    v-model="countCooksPerDay"
                    type="number"
                    min="1"
                    max="3"
                ></v-text-field>
                <v-text-field
                    label="Количество дней"
                    v-model="countDays"
                    type="number"
                    min="1"
                    max="30"
                ></v-text-field>
                <v-text-field
                    label="Время закипания 1 литра воды"
                    v-model="boilingTime"
                    type="time"
                    suffix="мм:сс"
                ></v-text-field>
                <v-text-field
                    label="Расход газа"
                    v-model="gasConsumption"
                    type="number"
                    min="0"
                    suffix="г/час"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="accent" @click="calculateGasWeight()">
                    <v-icon class="pr-1"> mdi-fire </v-icon>
                    Рассчитать
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-if="gasWeight !== 0" class="d-flex flex-column">
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
                    
                <figure v-if="gas450Cartridge < 20">
                    <img
                        v-for="n in gas450Cartridge"
                        :key="n"
                        src="../../assets/gas/gas450.jpg"
                    />
                </figure>
                <figure v-else class="d-flex">
                    <img src="../../assets/gas/gas450.jpg" alt="" />
                    <p class="py-4">
                        × {{ gas450Cartridge }}
                    </p>                        
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
.v-input {
    width: 200px;
}
img {
    height: 100px;
}
figure p {
    font-size: 40px;
}
</style>