<template>
    <div>
        <h2>{{ item.name }}</h2>
        <p>Страна: {{ item.country }}</p>
        <p>Даты: {{ item.dates }}</p>
        <p>
            Трек:
            <a :href="item.track" target="_blank">
                {{ item.track }}
            </a>
        </p>
        <p>
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

export default {
    data() {
        return {
            item: [],
        };
    },
    created() {
        console.log(this.$route.params);
    },
    mounted() {
        axios
            .get(
                "https://gist.githubusercontent.com/LadyVamp/d362ab08c4150f9350a57f0cd59552bf/raw/d36a9e83c7def67bdfea36bcb830e81c0c4c3416/my-hikes"
            )
            .then((response) => {
                this.item = response.data.items.find(
                    (x) => x.id === +this.$route.params.id
                );
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
}
</style>