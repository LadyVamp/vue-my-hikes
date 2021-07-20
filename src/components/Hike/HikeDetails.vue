<template>
    <div>
        <h1 v-if="$route.params.id">{{ $route.params.id }}</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            soluta illum, rem dolores dignissimos mollitia tempore quos
            inventore eum pariatur dolorum labore sapiente consequuntur, qui
            deleniti optio. Quidem, eligendi molestias?
        </p>
        <hr />
        <router-link to="/hikes">
            <v-btn>Назад</v-btn>
        </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>