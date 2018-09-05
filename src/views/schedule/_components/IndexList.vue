<template>
    <div class="scroll-list-wrapper">
        <scroll ref="scroll" :data="data" :scrollOptions="scrollOptions" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @scroll="scroll" :listenScroll="listenScroll">
            <ul class="scroll-list" ref="dataList">
                <li class="scroll-item" v-for="(val, key) in data" :key="key" :ref="key">
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
        <div ref="fixed" class="index-list-fixed index-list-anchor" v-show="isShowFixed">
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
            diff: -1,
            today: '', // 当天日期
            currentDate: '', //显示当前赛程的日期
            scrollOptions: {
                bounceTime: 0, // 这里不需要回弹时间
                pullDownRefresh: {
                    stopTime: 0 // 这里不需要
                }
            }
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
        let vm = this;
        this.$store.dispatch('schedule/GetMonthList', {
            year: this.$moment().format('YYYY'),
            month: this.$moment().format('M')
        });
        setTimeout(function() {
            vm._calculateTimeBarHeight();
            vm._calculateTop();
            if (vm.startY !== null) {
                vm._scrollTo(0, vm.startY, 0);
            } else {
                vm._scrollTo(0, -parseInt(vm._getElTop(vm.today)), 0);
            }
        }, 50);
    },
    beforeDestroy() {
        console.log(this.$refs.scroll);
    },
    methods: {
        scroll(pos) {
            this.scrollY = pos.y;
        },
        //计算timeBar高度
        _calculateTimeBarHeight() {
            const timeBarEl = this.$el.getElementsByClassName('timeBar')[0];
            this.TimeBarheight = timeBarEl ? getRect(timeBarEl).height : 0;
        },
        //计算每条数据(日期)的top并保存到topMap
        _calculateTop() {
            console.log(document.querySelectorAll('.timeBar'));
            this.dataKeys = Object.keys(this.data);
            for (let i = 0; i < this.dataKeys.length; i++) {
                let elTop = getRect(this.$refs[this.dataKeys[i]][0]).top;
                this.topMap.set(this.dataKeys[i], elTop);
            }
        },
        //获取该日期所在dom的top值
        _getElTop(date) {
            // optomize
            if (this.topMap.has(date)) {
                return this.topMap.get(date);
            } else {
                return 0;
            }
        },
        _scrollTo(x = 0, y = 0, time = 500) {
            this.$refs.scroll.scrollTo(x, y, time);
        },
        onPullingUp() {
            let lastDate = this.dataKeys.pop();
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
        data() {
            this.$nextTick(() => {
                this._calculateTimeBarHeight();
                this._calculateTop();
            });
        },
        scrollY(val) {
            let distance = val + this._getElTop(this.today);
            if (distance > 60 || distance < -130) {
                this.isShowScrollTo = true;
                if (distance < -130) {
                    this.direction = 'up';
                } else {
                    this.direction = 'down';
                }
            } else {
                this.isShowScrollTo = false;
            }
            for (let i = 0; i < this.dataKeys.length - 1; i++) {
                let top1 = this.topMap.get(this.dataKeys[i]);
                let top2 = this.topMap.get(this.dataKeys[i + 1]);
                if (-val >= top1 && -val < top2) {
                    this.currentDate = this.dataKeys[i];
                    this.diff = top2 + val;
                    return;
                }
            }
        },
        diff(newVal) {
            let fixedTop = newVal > 0 && newVal < this.TimeBarheight ? newVal - this.TimeBarheight : 0;
            if (this.fixedTop === fixedTop) {
                return;
            }
            this.fixedTop = fixedTop;
            this.$refs.fixed.style['transform'] = `translate3d(0,${fixedTop}px,0)`;
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
