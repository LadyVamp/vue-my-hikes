<template>
    <div v-if="item" class="d-flex flex-column">
        <div>
            <h2>{{ item.name }}</h2>
            <p>
                <b>Регион:</b> 
                <FlagIcon :country="item.region" class="d-inline px-1"/>{{ item.region }}
                <span v-if="item.district">({{ item.district }})</span>
            </p>
            <p><b>Даты:</b> {{ formatDates(item.dateStart, item.dateEnd)}}</p>
            <p><b>Ходовых дней: </b>{{ dayDiff() }}</p>
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
        </div>
        <div class="d-flex flex-column">
            <LinkButton v-if="item.report" label="Отчет" :link="item.report" :icon="'mdi-file'"/>
            <LinkButton
                :label="'Трек ' + extractHostname(item.track)"
                :link="item.track"
                :icon="'mdi-map-marker-multiple'"
            />
        </div>
        <BackButton />
    </div>
</template>

<script>
import LinkButton from "../Buttons/LinkButton.vue";
import BackButton from "../Buttons/BackButton.vue";
import FlagIcon from "./FlagIcon.vue";

export default {
    computed: {
        item() {
            if (this.$store.getters.HIKES) {
                const item = this.$store.getters.HIKES.find(
                    (item) => item.id === +this.$route.params.id
                );
                return item;
            }
        },
    },
    mounted() {
        this.$store.dispatch("GET_HIKE");
    },
    methods: {
        extractHostname(url) {
            let host = new URL(url).host;
            return host.includes("www.") ? host.slice(4) : host;
        },
        dayDiff() {
            const date1 = new Date(this.item.dateStart);
            const date2 = new Date(this.item.dateEnd);
            return Math.abs(date1.getTime() - date2.getTime()) / 86400000;
        },
        formatDates(dateStart, dateEnd) {
            const date1 = dateStart.split('-').reverse().join('.').slice(0,5)
            const date2 = dateEnd.split('-').reverse().join('.')           
            return date1 + '-' + date2;
        }
    },
    components: {
        LinkButton,
        BackButton,
        FlagIcon
    },
};
</script>

<style lang="scss" scoped>
</style>