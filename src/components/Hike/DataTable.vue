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
        <v-data-table v-if="hikesList" :headers="headers" :items="hikesList" :search="search">
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
export default {
    name: "app",
    data() {
        return {
            search: "",
            headers: [
                { text: "Название", value: "name" },
                { text: "Регион", value: "region" },
                { text: "Даты", value: "dates" },
                { text: "Трек", value: "track" },
                { text: "Тип", value: "type" },
            ],
        };
    },
    mounted() {
        this.$store.dispatch("GET_HIKE");
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
    computed: {
        hikesList() {
            console.log('hikesList', this.$store.getters.HIKES);
            return this.$store.getters.HIKES;
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