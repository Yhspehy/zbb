<template>
    <div class="follow">
        <scroll ref="scroll" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
            <div>
                <div v-for="(val, key) in followObj" :key="key">
                    <div class="timeBar">
                        <router-link 
                            :to="{'name': 'schedule_calendar'}"
                            v-if="$moment(key).format('MM月DD号') === $moment().format('MM月DD号')">
                            <i class="far fa-calendar-alt"></i>
                            <span class="today-text"> 今天 </span>
                        </router-link >
                        <span>{{$moment(key).format('MM月DD号')}} {{$moment(key).format('dddd')}}</span>
                    </div>

                    <match-item
                        v-for="item in followObj[key]"
                        :key="item.id"
                        :matchData="item">
                    </match-item>
                </div>
            </div>
        </scroll>

        <go-top word="今日赛事" :goTop="goTop"></go-top>
    </div>
</template>

<script>
import matchItem from './_components/MatchItem';
import goTop from './_components/GoTop';
import Scroll from '@/components/Scroll';
export default {
    name: 'schedule_follow',
    components: { matchItem, goTop, Scroll },
    data() {
        return {
            followObj: {},
            pageIndex: 1
        };
    },
    created() {
        this.$moment.locale('zh-cn');
        if (Object.keys(this.$store.state.schedule.followList).length) {
            this.followObj = this.$store.state.schedule.followList;
        } else {
            this.getFollowList();
        }
    },
    methods: {
        async getFollowList() {
            let res = await this.$store.dispatch('schedule/GetFollowList');
            for (let key in res.data.data) {
                if (this.$moment(key).format('MM月DD号') === this.$moment().format('MM月DD号')) {
                    console.log('today');
                }
                this.$set(this.followObj, key, res.data.data[key]);
            }
            this.pageIndex += 1;
        },
        goTop() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        async onPullingUp() {
            if (this.pageIndex < 2) {
                await this.getFollowList();
                this.$refs.scroll.forceUpdate(true);
            } else {
                this.$refs.scroll.forceUpdate(false);
            }
        },
        async onPullingDown() {
            this.pageIndex = 1;
            this.followObj = {};
            this.getFollowList();
            this.$refs.scroll.forceUpdate(true);
        }
    }
};
</script>

<style scoped lang="scss">
.follow {
    height: calc(100vh - 182px);
    .timeBar {
        padding: 25px 0;
        background: #f3f7f9;
        font-size: 24px;
        color: $font-color-deep-grey;
        display: flex;
        align-items: center;
        padding-left: 35px;
        .today-text {
            margin: 0 10px;
        }
    }
}
</style>
