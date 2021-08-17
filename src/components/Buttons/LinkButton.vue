<template>
    <v-btn class="mt-4">
        <a :href="link" target="_blank">{{ label }}</a>
    </v-btn>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
    },
};
</script>

<style lang="scss" scoped>
</style>