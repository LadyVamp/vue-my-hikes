<template>
    <div v-if="item" class="d-flex flex-column">
        <div>
            <h2>{{ item.name }}</h2>
            <p><b>Регион:</b> {{ item.region }}</p>
            <p><b>Даты:</b> {{ item.dates }}</p>
            <p>
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
            </p>
            <p><b>Протяженность:</b> {{ item.distance }} км</p>
            <p v-if="item.report">
                <v-btn>
                    <a :href="item.report" target="_blank"> Отчет </a>
                </v-btn>
            </p>
        </div>

        <div v-if="item.track.includes('nakarte.me')">
            <vue-friendly-iframe :src="item.track"></vue-friendly-iframe>
        </div>
        <div v-if="item.track.includes('gpsies.com')">
            <v-btn>
                <a :href="item.track" target="_blank"> Трек на gpsies.com </a>
            </v-btn>
        </div>
        <div>
            <router-link to="/hikes">
                <v-btn class="mt-2" color="accent" dark>
                    <v-icon dark left> mdi-arrow-left </v-icon>Назад
                </v-btn>
            </router-link>
        </div>
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
        let hikesData = hikes.data;
        this.item = hikesData.find(
            (item) => item.id === +this.$route.params.id
        );
    },
};
</script>

<style lang="scss">
.vue-friendly-iframe {
    iframe {
        width: 100%;
        height: 800px;
    }
}
a {
    text-decoration: none;
}
</style>