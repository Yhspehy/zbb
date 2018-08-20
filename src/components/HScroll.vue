<template>
    <div class="horizontal-scroll" ref="scroll">
        <ul class="scroll-group" ref="scrollGroup">
            <slot>
            </slot>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
// import { addClass } from '@/assets/js/dom';
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
    methods: {
        update() {
            if (this.scroll) {
                this.scroll.destroy();
            }
            this.initTimer = setTimeout(() => {
                this.$nextTick(() => {
                    this.init();
                });
            }, 60);
        },
        refresh() {
            this._setScrollWidth();
            this.scroll.refresh();
        },
        init() {
            this._setScrollWidth();
            this._initScroll();
        },
        _setScrollWidth() {
            this.children = this.$refs.scrollGroup.children;
            let width = 0;
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                // addClass(child, 'scroll-item');
                width += child.clientWidth + 10;
            }
            this.$refs.scrollGroup.style.width = (width * 4) / 15 + 'vw';
        },
        _initScroll() {
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
    .scroll-group {
        position: relative;
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        .scroll-item {
            overflow: hidden;
        }
    }
}
</style>
