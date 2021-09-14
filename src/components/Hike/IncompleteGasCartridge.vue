<template>
    <div>
        <div class="progress-container">
            <v-progress-linear v-model="percent" height="70" color="teal">
                <strong class="rotated">{{ Math.ceil(percent) }}%</strong>
            </v-progress-linear>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.progress-container {
    width: 90px;
    border-radius: 5px;
    transform: rotate(-90deg);
}
.rotated {
    transform: rotate(45deg);
}
</style>