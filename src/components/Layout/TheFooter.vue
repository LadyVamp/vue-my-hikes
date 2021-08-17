<template>
    <v-footer padless>
        <v-col class="text-center py-1" cols="12">
            © {{ new Date().getFullYear() }}
            <a href="https://ladyvamp.github.io/ng-portfolio/" target="_blank"
                >Nadezhda Dyakova aka LadyVamp</a
            >
        </v-col>
        <v-col class="text-right pt-0 pb-1 caption" cols="12">
            {{ version }}
        </v-col>
    </v-footer>
</template>
<script>
import { version } from "../../../package.json";
export default {
    data() {
        return {
            version: "v" + version,
        };
    },
};
</script>