<template>
    <div class="cMask"></div>
</template>

<script>
export default {
    name: 'c_Mask',
    mounted() {
        this.$el.addEventListener(
            'touchstart',
            e => {
                e.preventDefault();
            },
            false
        );
    },
    beforeDestroy() {
        this.$el.removeEventListener(
            'touchstart',
            e => {
                e.preventDefault();
            },
            false
        );
    },
    methods: {
        stopScroll(e) {
            e.preventDefault();
        }
    }
};
</script>

<style scoped lang="scss">
.cMask {
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
}
</style>
