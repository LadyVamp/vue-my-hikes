<template>
    <div class="my-2">
        <v-btn>
            <v-icon v-if="icon" color="primary">
                {{ icon }}
            </v-icon>
            <a :href="link" target="_blank">{{ label }}</a>
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