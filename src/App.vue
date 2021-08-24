<template>
    <v-app>
        <TheHeader />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
        <TheFooter />
    </v-app>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader";
import TheFooter from "@/components/Layout/TheFooter";

export default {
    name: "App",
    components: {
        TheHeader,
        TheFooter,
    },

    data: () => ({
        //
    }),
};
</script>

<style lang='scss'>
a {
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
}
</style>
