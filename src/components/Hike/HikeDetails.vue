<template>
    <div v-if="item">
        <h2>{{ item.name }}</h2>
        <ul>
            <li><b>Регион:</b> {{ item.region }}</li>
            <li><b>Даты:</b> {{ item.dates }}</li>
            <li>
                <b>Тип:</b>
                <span v-if="item.type === 'bike'" title="Велосипедный поход">
                    <v-icon large color="secondary" class="ml-2">
                        mdi-bike
                    </v-icon>
                </span>
                <span v-if="item.type === 'hiking'" title="Пеший поход">
                    <v-icon large color="secondary" class="ml-2">
                        mdi-hiking
                    </v-icon>
                </span>
            </li>
            <li>
                <b>Трек:</b>
                <a :href="item.track" target="_blank">
                    {{ item.track }}
                </a>
            </li>
            <li v-if="item.report">
                <b>Отчет:</b>
                <a :href="item.report" target="_blank">
                    {{ item.report }}
                </a>
            </li>
            <li><b>Протяженность:</b> {{ item.distance }} км</li>
        </ul>

        <router-link to="/hikes">
            <v-btn class="mt-2" color="accent" dark>
                <v-icon dark left> mdi-arrow-left </v-icon>Назад
            </v-btn>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
import hikes from "@/assets/hikes.json";

export default {
    data() {
        return {
            item: null,
        };
    },
    // mounted() {
    //     axios
    //         .get(
    //             "https://gist.githubusercontent.com/LadyVamp/722387f920c104e08f633cc20d54bfba/raw/3fdab542267378a266b079cad3ba15a8fba10d73/my-hikes-v1"
    //         )
    //         .then((response) => {
    //             this.item = response.data.items.find(
    //                 (x) => x.id === +this.$route.params.id
    //             );
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
    mounted() {
        let hikesData = hikes.items;
        this.item = hikesData.find(
            (item) => item.id === +this.$route.params.id
        );
    },
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
.v-btn {
    margin-top: 10px;
}
li {
    list-style-type: none;
}
</style>