<template>
    <div class="scroll-list-wrapper">
        <scroll
            ref="scroll"
            :data="data"
            :scrollOptions="scrollOptions"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
            @scroll="scroll"
            :listenScroll="listenScroll">

            <ul class="scroll-list">
                <li class="scroll-item" v-for="(val, key) in data" :key="key">
                    <time-bar :currentDate="key"></time-bar>
                    <match-item v-for="item in data[key]" :key="item.id" :matchData="item">
                    </match-item>
                </li>
            </ul>
            <!-- 下拉加载 -->
            <template slot="pulldown" slot-scope="{beforePullDown,isPullingDown,pullDownStyle}">
                <div class="pulldown-wrapper" :style="pullDownStyle">
                    <div class="before-trigger" v-if="beforePullDown">
                        <div class="tip">
                            <loading></loading>
                            <span>下拉显示更多比赛</span>
                        </div>
                    </div>
                    <div class="after-trigger" v-else>
                        <div v-if="isPullingDown" class="loading">
                            <loading></loading>
                        </div>
                        <div v-if="!isPullingDown" class="pulldown-loaded">
                        </div>
                    </div>
                </div>
            </template>
        </scroll>
        <div class="index-list-fixed index-list-anchor" v-show="isShowFixed">
            <time-bar :currentDate="currentDate"></time-bar>
        </div>
        <scroll-to word="今日赛事" @scrollTo="_scrollTo(0, -_getElTop(today))" :isShow="isShowScrollTo" :direction="direction"></scroll-to>
    </div>
</template> 

<script>
/**
 *
 * 注意修改mock里的数据，一定要有当前日期的数据
 *
 *
 */
'use strict';
import matchItem from './MatchItem';
import ScrollTo from './ScrollTo';
import TimeBar from './TimeBar';
import Scroll from '@/components/Scroll';
import Loading from '@/components/loading/loading';
import { getRect } from '@/assets/js/dom';
export default {
    name: 'schedule_scrollList',
    components: { matchItem, Scroll, TimeBar, ScrollTo, Loading },
    data() {
        return {
            scrollY: 0,
            listenScroll: true, //监听scroll事件
            isShowScrollTo: false, //是否显示返回当日
            direction: 'down',
            dataKeys: [], //所有赛程日期列表
            topMap: new Map(), // 存储所有赛程日期与其Top值
            today: '', // 当天日期
            currentDate: '', //显示当前赛程的日期
            scrollOptions: {
                bounceTime: 0, // 这里不需要回弹时间
                pullDownRefresh: {
                    stopTime: 0 // 这里不需要
                }
            },
            TimeBarheight: 0,
            fixedTop: 0
        };
    },
    props: {
        data: {
            type: Object,
            default() {
                return {};
            }
        },
        startY: {
            type: Number,
            default: null
        },
        isNoMoreData: {
            type: Boolean,
            require: true
        }
    },
    computed: {
        isShowFixed() {
            return this.scrollY <= -this.TimeBarheight;
        }
    },
    created() {
        this.today = this.$moment().format('YYYY-MM-DD');
        this.currentDate = this.today;
    },
    mounted() {
        this.$store.dispatch('schedule/GetMonthList', {
            year: this.$moment().format('YYYY'),
            month: this.$moment().format('M')
        });
        setTimeout(() => {
            let scrollEl = this.$refs.scroll.scroll;
            let todayPosY = parseInt(this._getElTop(this.today));
            if (scrollEl.scrollerHeight - todayPosY <= scrollEl.wrapperHeight) {
                this._scrollTo(0, -(scrollEl.scrollerHeight - scrollEl.wrapperHeight), 0);
            } else {
                this._scrollTo(0, -todayPosY, 0);
            }
        }, 50);
    },
    methods: {
        scroll(pos) {
            this.scrollY = pos.y;
        },
        //计算timeBar高度
        _calculateTimeBarHeight() {
            const timeBarEl = document.querySelector('.timeBar');
            this.TimeBarheight = timeBarEl ? getRect(timeBarEl).height : 0;
        },
        //计算每条数据(日期)的top并保存到topMap
        _calculateTop() {
            const scrollItemList = document.querySelectorAll('.scroll-item');
            this.dataKeys = Object.keys(this.data);
            for (let i = 0; i < this.dataKeys.length; i++) {
                let elTop = getRect(scrollItemList[i]).top;
                this.topMap.set(this.dataKeys[i], elTop);
            }
        },
        //获取该日期所在dom的top值
        _getElTop(date) {
            return this.topMap.has(date) ? this.topMap.get(date) : 0;
        },
        _scrollTo(x = 0, y = 0, time = 500) {
            this.$refs.scroll.scrollTo(x, y, time);
        },
        onPullingUp() {
            let lastDate = this.dataKeys[this.dataKeys.length - 1];
            this.$emit('onPullingUp', lastDate);
        },
        onPullingDown() {
            let firstDate = this.dataKeys[0];
            this.$emit('onPullingDown', firstDate);
            setTimeout(() => {
                this._scrollTo(0, -parseInt(this._getElTop(firstDate)) + 60, 0);
            }, 20);
        }
    },
    watch: {
        data: {
            immediate: true,
            handler: function() {
                this.$nextTick(() => {
                    let els = document.querySelectorAll('.timeBar');
                    if (els.length > 1) {
                        this._calculateTimeBarHeight();
                        this._calculateTop();
                    }
                });
            }
        },
        scrollY(val, old) {
            let distance = val + this._getElTop(this.today);
            if (distance > 60 || distance < -130) {
                this.isShowScrollTo = true;
                this.direction = distance < -130 ? 'up' : 'down';
            } else {
                this.isShowScrollTo = false;
            }

            let nowDatePosY = this.topMap.get(this.currentDate);
            let dataKeysIndexNow = this.dataKeys.findIndex(e => e === this.currentDate);
            const nextPosY =
                this.dataKeys[dataKeysIndexNow + 1] && this.topMap.get(this.dataKeys[dataKeysIndexNow + 1]);

            if (nowDatePosY > -val) this.currentDate = this.dataKeys[dataKeysIndexNow - 1];
            if (val < old && -val > nextPosY) this.currentDate = this.dataKeys[dataKeysIndexNow + 1];

            let fixedTop = -val + this.TimeBarheight > nextPosY ? nextPosY + val - this.TimeBarheight : 0;
            if (fixedTop === this.fixedTop) return;
            let fixedEl = document.querySelector('.index-list-fixed');
            fixedEl.style['transform'] = `translateY(${fixedTop}px)`;
            this.fixedTop = fixedTop;
        },
        isNoMoreData(val) {
            val ? this.$refs.scroll.forceUpdate(false) : '';
        }
    }
};
</script>

<style scoped lang="scss">
.scroll-list-wrapper {
    position: relative;
    height: 100%;
}
.a {
    padding: 20px;
}
.scroll-list {
    background: #fff;
}

.index-list-fixed {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>
