<template>
    <v-card>
        <v-card-title>
            Маршруты
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Поиск"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            v-if="hikesList"
            :headers="headers"
            :items="hikesList"
            :search="search"
            :sort-by="'date_start'"
            :sort-desc="true"
        >
            <template v-slot:[`item.type`]="{ item }">
                <v-icon v-if="item.type === 'bike'" large color="secondary" title="Вело">
                    mdi-bike
                </v-icon>
                <v-icon v-if="item.type === 'hiking'" large color="secondary" title="Пеший">
                    mdi-hiking
                </v-icon>
            </template>
            <template v-slot:[`item.name`]="{ item }">
                <router-link
                    :to="{ path: '/hike/' + item.id }"
                    title="Перейти к описанию"
                >
                    {{ item.name }}
                </router-link>
            </template>
            <template v-slot:[`item.region`]="{ item }">
                <FlagIcon :country="item.region" />
                {{ item.region }}
            </template>
            <template v-slot:[`item.date_start`]="{ item }">
                {{ formatDates(item.date_start, item.date_end)}}
            </template>
            <template v-slot:[`item.track`]="{ item }">
                <a :href="item.track" target="_blank">
                    {{ addEllipsisForMobile(item.track) }}
                </a>
            </template>
        </v-data-table>
        <div v-else class="text-center">
            <v-progress-circular
                class="my-4"
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
    </v-card>
</template>

<script>
import FlagIcon from "@/components/Hike/FlagIcon.vue";

export default {
    data() {
        return {
            search: "",
            headers: [
                { text: "", value: "type", sortable: false },
                { text: "Название", value: "name" },
                { text: "Регион", value: "region" },
                { text: "Даты", value: "date_start" },
                { text: "Трек", value: "track", sortable: false },
            ],
        };
    },
    computed: {
        hikesList() {
            return this.$store.getters.HIKES;
        },
    },
    mounted() {
        this.$store.dispatch("GET_HIKE");
    },
    methods: {
        addEllipsisForMobile(link) {
            return this.$vuetify.breakpoint.mobile
                ? link.slice(0, 30) + "..."
                : link;
        },
        formatDates(dateStart, dateEnd) {
            const date1 = dateStart.split('-').reverse().join('.').slice(0,5)
            const date2 = dateEnd.split('-').reverse().join('.')           
            return date1 + '-' + date2;
        }
    },
    components: {
        FlagIcon,
    },
};
</script>
<style lang="scss" scoped>
</style>