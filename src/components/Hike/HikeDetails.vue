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
            <LinkButton v-if="item.report" label="Отчет" :link="item.report" />
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
import LinkButton from "../Buttons/LinkButton.vue";
import BackButton from "../Buttons/BackButton.vue";

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