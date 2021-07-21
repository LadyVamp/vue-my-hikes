<template>
    <div v-if="item">
        <h2>{{ item.name }}</h2>
        <p>Регион: {{ item.region }}</p>
        <p>Даты: {{ item.dates }}</p>
        <p>
            Трек:
            <a :href="item.track" target="_blank">
                {{ item.track }}
            </a>
        </p>
        <p v-if="item.report">
            Отчет:
            <a :href="item.report" target="_blank">
                {{ item.report }}
            </a>
        </p>

        <hr />
        <router-link to="/hikes">
            <v-btn>Назад</v-btn>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";
import hikes from '@/assets/hikes.json';

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
        this.item = hikesData.find(item => item.id === +this.$route.params.id)
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
</style>