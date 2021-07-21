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
        // this.hideDistrictOfRussia(this.items);
    },
    methods: {
        fillTable() {
            let hikesData = hikes.data;
            return this.items.push(...hikesData);
        },
        hideDistrictOfRussia(itemsArr) {
            console.log(itemsArr);
            itemsArr.forEach((item, i) => {
                if (
                    item.region.indexOf("Россия") !== -1 &&
                    (item.region.indexOf("край") !== -1 || item.region.indexOf("область") !== -1 ||  item.region.indexOf("республика") !== -1)
                ) {
                    itemsArr[i].region = "Россия";
                }
            });
            console.log(itemsArr);
            this.items = itemsArr;
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