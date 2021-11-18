<template>
    <div class="my-2">
        <v-btn
            :href="link"
            target="_blank"
            title="Смотреть видео о походе на канале Кинетика"
        >
            <v-icon class="pr-1" color="#ff0000"> mdi-youtube </v-icon>
            Видео
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
a {
    &:hover {
        text-decoration: none;
    }
}
</style>