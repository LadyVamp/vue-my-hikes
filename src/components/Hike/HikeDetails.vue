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
                <LinkButton label="Отчет" :link="item.report" />
            </p>
        </div>
        <div>
            <LinkButton
                :label="'Трек ' + extractHostname(item.track)"
                :link="item.track"
            />
        </div>
        <BackButton />
    </div>
</template>

<script>
import axios from "axios";
import hikes from "@/assets/hikes.json";
import LinkButton from "../Buttons/LinkButton.vue";
import BackButton from "../Buttons/BackButton.vue";

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
    methods: {
        extractHostname(url) {
            let host = new URL(url).host;
            return host.includes('www.') ? host.slice(4) : host;
        },
    },
    mounted() {
        let hikesData = hikes.data;
        this.item = hikesData.find(
            (item) => item.id === +this.$route.params.id
        );
    },
    components: {
        LinkButton,
        BackButton,
    },
};
</script>

<style lang="scss">
a {
    text-decoration: none;
}
</style>