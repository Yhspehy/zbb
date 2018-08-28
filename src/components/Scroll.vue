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
            <slot name="pulldown" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown">
                <div class="before-trigger" v-if="beforePullDown">
                    <div class="tip">
                        <loading></loading>
                        <span>松开立即刷新</span>
                    </div>
                    <div class="date">最近更新：{{updateDate}}</div>
                    <!-- <bubble :y="bubbleY"></bubble> -->
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="isPullingDown" class="loading">
                        <loading></loading>
                    </div>
                    <div v-else class="tip">
                        <div class="up">已更新{{updateCount}}条新闻</div>
                        <div class="down">最近更新：{{updateDate}}</div>
                    </div>
                </div>
            </slot>
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
        scrollOptions: {
            type: Object,
            default: function() {
                return {};
            }
        },
        updateCount: {
            type: Number,
            default: 0
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
            pullDownInitTop: -50,
            options: {}
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

            return this.pullUpDirty ? moreTxt : noMoreTxt;
        },
        refreshTxt() {
            return (this.options.pullDownRefresh && this.options.pullDownRefresh.txt) || '数据已更新';
        },
        updateDate() {
            return this.$moment().calendar();
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

            // 初始化设置
            this.options = merge(
                {
                    probeType: 1,
                    click: true,
                    scrollbar: {
                        fade: true
                    },
                    pullDownRefresh: {
                        threshold: 60,
                        stop: 70
                    },
                    pullUpLoad: {
                        threshold: 0,
                        txt: {
                            more: '加载更多',
                            noMore: '没有更多数据了'
                        }
                    }
                },
                this.scrollOptions
            );

            this.scroll = new BScroll(this.$refs.wrapper, this.options);

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

<style lang="scss" scoped>
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
}

.pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    font-size: 22px;
    color: #4d4d4d;
    display: flex;
    justify-content: center;
    transition: all;
    color: #4d4d4d;
    .after-trigger {
        .loading {
            margin-top: 45px;
        }
        .tip {
            width: 750px;
            height: 120px;
            display: flex;
            flex-direction: column;
        }
        .up {
            flex: 1;
            line-height: 60px;
            color: #fff;
            text-align: center;
            font-size: 24px;
            @include gradient();
        }
        .down {
            flex: 1;
            line-height: 60px;
            text-align: center;
        }
    }
    .before-trigger {
        @include flex-center;
        flex-direction: column;
        .tip {
            @include flex-center;
            line-height: 50px;
            span {
                margin-left: 10px;
            }
        }
    }
}

.pullup-wrapper {
    width: 100%;
    @include flex-center;
    padding: 16px 0;
}
</style>
