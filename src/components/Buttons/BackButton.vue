<template>
    <div @click="$router.go(-1)">
        <v-btn class="mt-16" color="accent" dark>
            <v-icon dark left> mdi-arrow-left </v-icon>Назад
        </v-btn>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>