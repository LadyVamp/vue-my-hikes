<template>
    <div class="my-2">
        <v-btn :href="link" target="_blank" color="primary">
            <v-icon class="pr-1">
                {{ icon }}
            </v-icon>
            {{ label }}
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        // icons http://materialdesignadmin.com/icons.html
        icon: {
            type: String,
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