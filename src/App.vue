<template>
    <v-app>
        <TheHeader />
        <v-main>
            <v-container>
                <v-tabs>
                    <v-tab to="/">
                        <v-icon class="pr-1">mdi-routes</v-icon>
                        Маршруты
                    </v-tab>
                    <v-tab to="/calculator">
                        <v-icon class="pr-1">mdi-calculator</v-icon>
                        Калькулятор
                    </v-tab>
                </v-tabs>
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
}
</style>
