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
import BScroll from 'better-scroll';

export default {
    name: 'c_slide',
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
            default: true
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
        },
        eventPassthrough: {
            type: String,
            default: ''
        },
        length: {
            type: Number,
            require: true
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
        if (!this.slide.enabled) this.slide.enable();
        // let pageIndex = this.slide.getCurrentPage().pageX;
        // this.slide.goToPage(pageIndex, 0, 0);
        // this.currentPageIndex = pageIndex;
        // if (this.autoPlay) {
        //     this._play();
        // }
    },
    deactivated() {
        if (this.slide) {
            this.slide.disable();
            if (this.timer) clearTimeout(this.timer);
        }
    },
    beforeDestroy() {
        if (this.slide) {
            this.slide.destroy();
            if (this.timer) clearTimeout(this.timer);
        }
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
            }, 20);
        },
        refresh() {
            this.slide.refresh();
        },
        prev() {
            this.slide.prev();
        },
        next() {
            this.slide.next();
        },
        init() {
            this.currentPageIndex = 0;
            if (this.showDot) {
                this._initDots();
            }
            this._initSlide();
        },
        _initSlide() {
            if (this.loop) {
                const width = this.$refs.slide.clientWidth;
                this.$refs.slideGroup.style.width = (this.length + 2) * width + 'px';
            }

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
                eventPassthrough: this.eventPassthrough,
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
                if (this.autoPlay || this.timer) {
                    clearTimeout(this.timer);
                }
            });

            if (this.autoPlay) {
                this._play();
            }
        },
        _onScrollEnd() {
            let pageIndex = this.slide.getCurrentPage().pageX;
            this.currentPageIndex = pageIndex;
            if (this.autoPlay) {
                this._play();
            }
        },
        _initDots() {
            this.dots = new Array(this.length);
        },
        _play() {
            if (this.timer) clearTimeout(this.timer);
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


<style lang="scss" scoped>
.slide {
    overflow: hidden;
    position: relative;
    .slide-group {
        position: relative;
        width: auto;
        white-space: nowrap;
        display: inline-block;
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
            background: pink;
            &.active {
                width: 20px;
                border-radius: 5px;
                background: $blue;
            }
        }
    }
}
</style>
