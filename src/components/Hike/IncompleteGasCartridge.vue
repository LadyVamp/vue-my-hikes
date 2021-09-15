<template>
    <div>
        <div class="percent">{{ percent }}%</div>
        <div class="countour">
            <div class="scale" :style="'--p-height: ' + percent + 'px'"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        percent: {
            type: Number,
            required: true,
            default: 0,
        },
    },
};
</script>



<style lang="scss" scoped>
.countour {
    width: 70px;
    height: 100px;
    background-color: lightgrey;
    position: relative;
    border: 2px solid black;

    border-bottom-left-radius: 20px 10px;
    border-bottom-right-radius: 20px 10px;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
}
.scale {
    height: var(--p-height);
    width: 100%;
    background-color: skyblue;
    position: absolute;
    bottom: 0;
    left: 0;

    border-bottom-left-radius: 17px 8px;
    border-bottom-right-radius: 17px 8px;
}
</style>