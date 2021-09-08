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
                    label="Число человек"
                    v-model="countPeople"
                    type="number"
                    min="1"
                ></v-text-field>
                <v-text-field
                    label="Число готовок в день"
                    v-model="countCooksPerDay"
                    type="number"
                    min="1"
                ></v-text-field>
                <v-text-field
                    label="Число дней"
                    v-model="countDays"
                    type="number"
                    min="1"
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
            <v-col>
                Баллонов, шт (1 баллон 450 г): {{ Math.ceil(gasWeight / 450) }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    /* 
        Число человек	2
        Число готовок в день	2
        Число дней	7
        Время закипания	4 минуты 43 секунды
        Расход газа	140 (г/час)
    */
    data() {
        return {
            countPeople: 2,
            countCooksPerDay: 2,
            countDays: 7,
            boilingTime: "04:43",
            gasConsumption: 140,
            gasWeight: 0,
        };
    },
    methods: {
        calculateGasWeight() {
            const potVolume = 0.5 * this.countPeople;

            const boilingTimeInSeconds =
                +this.boilingTime.split(":")[0] * 60 +
                +this.boilingTime.split(":")[1];

            const gasConsumptionPerOneLiter =
                (boilingTimeInSeconds * this.gasConsumption) / 3600;

            const result =
                potVolume *
                gasConsumptionPerOneLiter *
                this.countPeople *
                this.countCooksPerDay *
                this.countDays;

            this.gasWeight = Math.round(result);

            console.group("calculateGasWeight");
            console.log("potVolume", potVolume);
            console.log("boilingTimeInSeconds", boilingTimeInSeconds);
            console.log("gasConsumptionPerOneLiter", gasConsumptionPerOneLiter);
            console.log("result", result);
            console.log("Math.ceil(result)", Math.ceil(result));
            console.groupEnd();

            return this.gasWeight;
        },
    },
};
</script>

<style>
.v-input {
    width: 200px;
}
</style>