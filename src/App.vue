<template>
    <v-app>
        <AppBar />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import AppBar from "@/components/Layout/AppBar";
import Footer from "@/components/Layout/Footer";

export default {
    name: "App",
    components: {
        AppBar,
        Footer,
    },

    data: () => ({
        //
    }),
};
</script>
