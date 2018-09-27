<template>
    <div class="horizontal-scroll" ref="scroll">
        <ul class="scroll-group">
            <slot></slot>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll';

export default {
    name: 'h-scroll',
    props: {
        click: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        this.update();
    },
    beforeDestroy() {
        this.scroll.destroy();
    },
    methods: {
        update() {
            if (this.scroll) {
                this.scroll.refresh();
            } else {
                this.$nextTick(() => {
                    this.init();
                });
            }
        },
        init() {
            this.scroll = new BScroll(this.$refs.scroll, {
                scrollX: true,
                scrollY: false,
                click: this.click
            });
        }
    }
};
</script>
<style lang="scss">
.horizontal-scroll {
    min-height: 1px;
    overflow: hidden;
    .scroll-group {
        width: auto;
        display: inline-block;
        white-space: nowrap;
    }
}
</style>
