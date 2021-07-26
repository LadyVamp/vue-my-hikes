<template>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Поиск"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search">
            <template v-slot:[`item.name`]="{ item }">
                <div class="name">
                    <router-link
                        :to="{ path: '/hike/' + item.id }"
                        title="Перейти к описанию"
                    >
                        {{ item.name }}
                    </router-link>
                </div>
            </template>
            <template v-slot:[`item.region`]="{ item }">
                {{ item.region | hideDistrictOfRussia }}
            </template>
            <template v-slot:[`item.track`]="{ item }">
                <a :href="item.track" target="_blank">
                    {{ item.track }}
                </a>
            </template>
            <template v-slot:[`item.type`]="{ item }">
                <v-icon v-if="item.type === 'bike'" large color="secondary">
                    mdi-bike
                </v-icon>
                <v-icon v-if="item.type === 'hiking'" large color="secondary">
                    mdi-hiking
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import axios from "axios";
import hikes from "@/assets/hikes.json";

export default {
    name: "app",
    data: () => ({
        search: "",
        items: [],
        headers: [
            { text: "Название", value: "name" },
            { text: "Регион", value: "region" },
            { text: "Даты", value: "dates" },
            { text: "Трек", value: "track" },
            { text: "Тип", value: "type" },
        ],
    }),
    // mounted() {
    //     axios
    //         .get(
    //             "https://gist.githubusercontent.com/LadyVamp/722387f920c104e08f633cc20d54bfba/raw/3fdab542267378a266b079cad3ba15a8fba10d73/my-hikes-v1"
    //         )
    //         .then((response) => {
    //             console.log(response);
    //             this.items = response.data.items;
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // },
    mounted() {
        this.fillTable();
    },
    filters: {
        hideDistrictOfRussia: (region) => {
            if (
                region.includes("Россия") &&
                (region.includes("край") ||
                    region.includes("область") ||
                    region.includes("республика"))
            ) {
                return "Россия";
            } else {
                return region;
            }
        },
    },
    methods: {
        fillTable() {
            let hikesData = hikes.data;
            return this.items.push(...hikesData);
        },
    },
};
</script>
<style lang="scss" scoped>
.name {
    cursor: pointer;
    a {
        text-decoration: none;
    }
}
</style>