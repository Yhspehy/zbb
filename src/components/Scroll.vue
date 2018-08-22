<template>
    <div ref="wrapper" class="list-wrapper">
        <div class="scroll-content">
            <div ref="listWrapper">
                <slot>
                </slot>
            </div>
            <div class="pullup-wrapper" v-if="options.pullUpLoad">
                <div class="before-trigger" v-if="!isPullUpLoad">
                    <span>{{pullUpTxt}}</span>
                </div>
                <div class="after-trigger" v-else>
                    <loading></loading>
                </div>
            </div>
        </div>
        <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="options.pullDownRefresh">
            <div class="before-trigger" v-if="beforePullDown">
                <bubble :y="bubbleY"></bubble>
            </div>
            <div class="after-trigger" v-else>
                <div v-if="isPullingDown" class="loading">
                    <loading></loading>
                </div>
                <div v-else>
                    <span>{{refreshTxt}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import Loading from '@/components/loading/loading';
import Bubble from '@/components/bubble/bubble';
import { getRect } from '@/assets/js/dom';
import merge from 'lodash/merge';

export default {
    name: 'c_scroll',
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        listenScrollEnd: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        options: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data() {
        return {
            beforePullDown: true,
            isRebounding: false,
            isPullingDown: false,
            isPullUpLoad: false,
            pullUpDirty: true,
            pullDownStyle: '',
            bubbleY: 0,
            pullDownInitTop: -50
        };
    },
    computed: {
        pullUpTxt() {
            const moreTxt =
                (this.options.pullUpLoad && this.options.pullUpLoad.txt && this.options.pullUpLoad.txt.more) ||
                '加载数据';

            const noMoreTxt =
                (this.options.pullUpLoad && this.options.pullUpLoad.txt && this.options.pullUpLoad.txt.noMore) ||
                '没有更多数据了';

            return this.options.pullUpDirty ? moreTxt : noMoreTxt;
        },
        refreshTxt() {
            return (this.options.pullDownRefresh && this.options.pullDownRefresh.txt) || '数据已更新';
        }
    },
    created() {},
    mounted() {
        setTimeout(() => {
            this.initScroll();
        }, 20);
    },
    destroyed() {
        this.$refs.scroll && this.$refs.scroll.destroy();
    },
    methods: {
        initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            if (this.$refs.listWrapper && (this.options.pullDownRefresh || this.options.pullUpLoad)) {
                this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`;
            }

            const options = merge(
                {
                    probeType: 1,
                    click: true
                },
                this.options
            );

            this.scroll = new BScroll(this.$refs.wrapper, options);

            if (this.listenScroll) {
                this.scroll.on('scroll', pos => {
                    this.$emit('scroll', pos);
                });
            }

            if (this.listenScrollEnd) {
                this.scroll.on('scrollEnd', pos => {
                    this.$emit('scroll-end', pos);
                });
            }

            if (this.listenBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStart');
                });

                this.scroll.on('scrollStart', () => {
                    this.$emit('scroll-start');
                });
            }

            if (this.options.pullDownRefresh) {
                this._initPullDownRefresh();
            }

            if (this.options.pullUpLoad) {
                this._initPullUpLoad();
            }
        },
        disable() {
            this.scroll && this.scroll.disable();
        },
        enable() {
            this.scroll && this.scroll.enable();
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
        },
        clickItem(e, item) {
            console.log(e);
            this.$emit('click', item);
        },
        destroy() {
            this.scroll.destroy();
        },
        forceUpdate(dirty) {
            if (this.options.pullDownRefresh && this.isPullingDown) {
                this.isPullingDown = false;
                this._reboundPullDown().then(() => {
                    this._afterPullDown();
                });
            } else if (this.options.pullUpLoad && this.isPullUpLoad) {
                this.isPullUpLoad = false;
                this.scroll.finishPullUp();
                this.pullUpDirty = dirty;
                this.refresh();
            } else {
                this.refresh();
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.beforePullDown = false;
                this.isPullingDown = true;
                this.$emit('pullingDown');
            });

            this.scroll.on('scroll', pos => {
                if (!this.options.pullDownRefresh) {
                    return;
                }
                if (this.beforePullDown) {
                    this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop);
                    this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
                } else {
                    this.bubbleY = 0;
                }

                if (this.isRebounding) {
                    this.pullDownStyle = `top:${10 - (this.options.pullDownRefresh.stop - pos.y)}px`;
                }
            });
        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.isPullUpLoad = true;
                this.$emit('pullingUp');
            });
        },
        _reboundPullDown() {
            const { stopTime = 600 } = this.options.pullDownRefresh;
            return new Promise(resolve => {
                setTimeout(() => {
                    this.isRebounding = true;
                    this.scroll.finishPullDown();
                    resolve();
                }, stopTime);
            });
        },
        _afterPullDown() {
            setTimeout(() => {
                this.pullDownStyle = `top:${this.pullDownInitTop}px`;
                this.beforePullDown = true;
                this.isRebounding = false;
                this.refresh();
            }, this.scroll.options.bounceTime);
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this.forceUpdate(true);
            }, this.refreshDelay);
        }
    },
    components: {
        Loading,
        Bubble
    }
};
</script>

<style lang="scss">
.list-wrapper {
    position: relative;
    height: 100%;
    /*position: absolute*/
    /*left: 0*/
    /*top: 0*/
    /*right: 0*/
    /*bottom: 0*/
    overflow: hidden;
    .scroll-content {
        position: relative;
        z-index: 1;
    }

    .list-content {
        position: relative;
        z-index: 10;
        background: #fff;
        .list-item {
            height: 60px;
            line-height: 60px;
            font-size: 18px;
            padding-left: 20px;
            border-bottom: 1px solid #e5e5e5;
        }
    }
}

.pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    .after-trigger {
        margin-top: 10px;
    }
}

.pullup-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
}
</style>
