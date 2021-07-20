<template>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="items" :search="search">
            <template v-slot:[`item.name`]="{ item }">
                <div class="name">
                    <router-link :to="{ path: '/hike/' + item.id }" title="Перейти к описанию">
                        {{ item.name }}
                    </router-link>
                </div>
            </template>
            <template v-slot:[`item.track`]="{ item }">
                <a :href="item.track" target="_blank">
                    {{ item.track }}
                </a>
            </template>
            <template v-slot:[`item.report`]="{ item }">
                <a :href="item.report" target="_blank">
                    {{ item.report }}
                </a>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import axios from "axios";

export default {
    name: "app",
    data: () => ({
        search: "",
        items: [],
        headers: [
            { text: "Id", value: "id" },
            { text: "Name", value: "name" },
            { text: "Country", value: "country" },
            { text: "Dates", value: "dates" },
            { text: "Track", value: "track" },
            { text: "Report", value: "report" },
        ],
    }),
    mounted() {
        axios
            .get(
                "https://gist.githubusercontent.com/LadyVamp/d362ab08c4150f9350a57f0cd59552bf/raw/d36a9e83c7def67bdfea36bcb830e81c0c4c3416/my-hikes"
            )
            .then((response) => {
                console.log(response);
                this.items = response.data.items;
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
</script>
<style lang="scss" scoped>
.name {
    cursor: pointer;
    color: navy;
}
</style>