<template>
    <div>
        <div class="percent">{{ percent }}%</div>
        <div class="countour">
            <div
                :style="'--p-height: ' + percent + 'px'"
                class="scale"
                :class="{
                    bound_79: percent >= 79,
                    bound_80: percent >= 80,
                    bound_82: percent >= 82,
                    bound_86: percent >= 86,
                    bound_88: percent >= 88,
                    bound_90: percent >= 90,
                    bound_92: percent >= 92,
                    bound_94: percent >= 94,
                    bound_96: percent >= 96,
                    bound_98: percent >= 98,
                }"
            ></div>
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

// туристов-готовок-дней 9-2-11 => 79%
// туристов-готовок-дней 9-2-1 => 98%
.bound_79 {
    border-top-left-radius: 2px 8px;
    border-top-right-radius: 2px 8px;
}
.bound_80 {
    border-top-left-radius: 3px 8px;
    border-top-right-radius: 3px 8px;
}
.bound_82 {
    border-top-left-radius: 3px 12px;
    border-top-right-radius: 3px 12px;
}
.bound_86 {
    border-top-left-radius: 6px 18px;
    border-top-right-radius: 6px 18px;
}
.bound_88 {
    border-top-left-radius: 7px 20px;
    border-top-right-radius: 7px 20px;
}
.bound_90 {
    border-top-left-radius: 9px 25px;
    border-top-right-radius: 9px 25px;
}
.bound_92 {
    border-top-left-radius: 11px 27px;
    border-top-right-radius: 11px 27px;
}
.bound_94 {
    border-top-left-radius: 13px 29px;
    border-top-right-radius: 13px 29px;
}
.bound_96 {
    border-top-left-radius: 19px 29px;
    border-top-right-radius: 19px 29px;
}
.bound_98 {
    border-top-left-radius: 24px 28px;
    border-top-right-radius: 24px 28px;
}
</style>