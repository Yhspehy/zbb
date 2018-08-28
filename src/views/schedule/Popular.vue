<template>
    <div class="popular">
        <scroll ref="scroll" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
            <div>
                <div v-for="(val, key) in popularObj" :key="key">
                    <div class="timeBar">
                        <router-link
                            :to="{'name': 'schedule_calendar'}"
                            v-if="$moment(key).format('MM月DD号') === $moment().format('MM月DD号')">
                            <i class="far fa-calendar-alt"></i>
                            <span class="today-text"> 今天 </span>
                        </router-link>
                        <span>{{$moment(key).format('MM月DD号')}} {{$moment(key).format('dddd')}}</span>
                    </div>

                    <match-item v-for="item in popularObj[key]" :key="item.id" :matchData="item">
                    </match-item>
                </div>
            </div>

            <!-- 下拉加载 -->
            <template slot="pulldown" slot-scope="{beforePullDown,isPullingDown}">
                <div class="before-trigger" v-if="beforePullDown">
                    <div class="tip">
                        <loading></loading>
                        <span>松开立即刷新</span>
                    </div>
                </div>
                <div class="after-trigger" v-else>
                    <div v-if="isPullingDown" class="loading">
                        <loading></loading>
                    </div>
                    <div v-else class="tip">
                    </div>
                </div>
            </template>
        </scroll>

        <go-top word="今日赛事" @goTop="goTop"></go-top>
    </div>
</template> 

<script>
import matchItem from './_components/MatchItem';
import goTop from './_components/GoTop';
import Scroll from '@/components/Scroll';
import Loading from '@/components/loading/loading';
export default {
    name: 'schedule_popular',
    components: { matchItem, goTop, Scroll, Loading },
    data() {
        return {
            popularObj: {},
            pageIndex: 1
        };
    },
    created() {
        this.$moment.locale('zh-cn');
        if (Object.keys(this.$store.state.schedule.popularList).length) {
            this.popularObj = this.$store.state.schedule.popularList;
        } else {
            this.getPopularList();
        }
    },
    mounted() {
        this.$store.dispatch('schedule/GetMonthList', {
            year: this.$moment().format('YYYY'),
            month: this.$moment().format('M')
        });
    },
    methods: {
        async getPopularList() {
            let res = await this.$store.dispatch('schedule/GetPopularList');
            for (let key in res.data.data) {
                if (this.$moment(key).format('MM月DD号') === this.$moment().format('MM月DD号')) {
                    console.log('today');
                }
                this.$set(this.popularObj, key, res.data.data[key]);
            }
            this.pageIndex += 1;
        },
        goTop() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        async onPullingUp() {
            if (this.pageIndex < 2) {
                await this.getPopularList();
                this.$refs.scroll.forceUpdate(true);
            } else {
                this.$refs.scroll.forceUpdate(false);
            }
        },
        async onPullingDown() {
            this.pageIndex = 1;
            this.popularObj = {};
            this.getPopularList();
            this.$refs.scroll.forceUpdate(true);
        }
    }
};
</script>

<style scoped lang="scss">
.popular {
    height: calc(100vh - 182px);
    .a {
        padding: 20px;
    }
    .timeBar {
        padding: 25px 0;
        background: #f3f7f9;
        font-size: 24px;
        color: $font-color-deep-grey;
        @include flex-center;
        .fa-calendar-alt {
            font-size: 24px;
            color: #4c4c4c;
        }
        .today-text {
            margin: 0 10px;
        }
    }
}
</style>
