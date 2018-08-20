<template>
    <div class="slide" ref="slide">
        <div class="slide-group" ref="slideGroup">
            <slot>
            </slot>
        </div>
        <div v-if="showDot" class="dots">
            <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots" :key=index></span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import { addClass } from '@/assets/js/dom';
import BScroll from 'better-scroll';
export default {
    name: 'slide',
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        autoPlay: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 4000
        },
        showDot: {
            type: Boolean,
            default: false
        },
        click: {
            type: Boolean,
            default: true
        },
        threshold: {
            type: Number,
            default: 0.3
        },
        speed: {
            type: Number,
            default: 400
        }
    },
    data() {
        return {
            dots: [],
            currentPageIndex: 0
        };
    },
    mounted() {
        this.update();
    },
    activated() {
        if (!this.slide) {
            return;
        }
        this.slide.enable();
        let pageIndex = this.slide.getCurrentPage().pageX;
        this.slide.goToPage(pageIndex, 0, 0);
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
            this._play();
        }
    },
    deactivated() {
        this.slide.disable();
        clearTimeout(this.timer);
        clearTimeout(this.initTimer);
    },
    beforeDestroy() {
        this.slide.disable();
        clearTimeout(this.timer);
        clearTimeout(this.initTimer);
    },
    methods: {
        update() {
            if (this.slide) {
                this.slide.destroy();
            }
            this.initTimer = setTimeout(() => {
                this.$nextTick(() => {
                    this.init();
                });
            }, 100);
        },
        refresh() {
            this._setSlideWidth(true);
            this.slide.refresh();
        },
        prev() {
            this.slide.prev();
        },
        next() {
            this.slide.next();
        },
        init() {
            clearTimeout(this.timer);
            this.currentPageIndex = 0;
            this._setSlideWidth();
            if (this.showDot) {
                this._initDots();
            }
            this._initSlide();

            if (this.autoPlay) {
                this._play();
            }
        },
        _setSlideWidth(isResize) {
            this.children = this.$refs.slideGroup.children;
            let width = 0;
            let slideWidth = (this.$refs.slide.clientWidth * 4) / 15;
            for (let i = 0; i < this.children.length; i++) {
                let child = this.children[i];
                addClass(child, 'slide-item');
                child.style.width = slideWidth + 'vw';
                width += slideWidth;
            }
            if (this.loop && !isResize) {
                width += 2 * slideWidth;
            }
            this.$refs.slideGroup.style.width = width + 'vw';
        },
        _initSlide() {
            this.slide = new BScroll(this.$refs.slide, {
                scrollX: true,
                scrollY: false,
                momentum: false,
                snap: {
                    loop: this.loop,
                    threshold: this.threshold,
                    speed: this.speed
                },
                bounce: false,
                // stopPropagation: true,
                click: this.click
            });

            this.slide.on('scrollEnd', this._onScrollEnd);

            this.slide.on('touchEnd', () => {
                if (this.autoPlay) {
                    this._play();
                }
            });

            this.slide.on('beforeScrollStart', () => {
                if (this.autoPlay) {
                    clearTimeout(this.timer);
                }
            });
        },
        _onScrollEnd() {
            let pageIndex = this.slide.getCurrentPage().pageX;
            this.currentPageIndex = pageIndex;
            if (this.autoPlay) {
                this._play();
            }
        },
        _initDots() {
            this.dots = new Array(this.children.length);
        },
        _play() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.slide.next();
            }, this.interval);
        }
    },
    watch: {
        loop() {
            this.update();
        },
        autoPlay() {
            this.update();
        },
        speed() {
            this.update();
        },
        threshold() {
            this.update();
        }
    }
};
</script>
<style lang="scss">
.slide {
    min-height: 1px;
    .slide-group {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        .slide-item {
            float: left;
            overflow: hidden;
            a {
                display: block;
                position: relative;
                width: 100%;
                overflow: hidden;
                text-decoration: none;
            }
            img {
                display: block;
                width: 100%;
            }
        }
        .dots {
            position: absolute;
            right: 0;
            left: 0;
            bottom: 12px;
            transform: translateZ(1px);
            text-align: center;
            font-size: 0;
            .dot {
                display: inline-block;
                margin: 0 4px;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #f2f2f2;
                &.active {
                    width: 20px;
                    border-radius: 5px;
                    background: #fff;
                }
            }
        }
    }
}
</style>