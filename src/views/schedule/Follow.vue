<template>
    <div class="follow">
        <div>
            <div v-for="(val, key) in followObj" :key="key">
                <!-- 时间条 -->
                <div class="timeBar">
                    <span v-if="$moment(key).format('MM月DD号') === $moment().format('MM月DD号')">
                        <span class="today-text"> 今天 </span>
                    </span>
                    <span>{{$moment(key).format('MM月DD号')}} {{$moment(key).format('dddd')}}</span>
                </div>

                <match-item
                    v-for="item in followObj[key]"
                    :key="item.id"
                    :matchData="item">
                </match-item>
            </div>
        </div>

        <go-top word="今日赛事"></go-top>
    </div>
</template>

<script>
import matchItem from './_components/MatchItem';
import goTop from './_components/GoTop';
export default {
    name: 'schedule_follow',
    components: { matchItem, goTop },
    data() {
        return {
            followObj: {}
        };
    },
    created() {
        console.log('created');
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
            }
            this.followObj = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
.follow {
    .timeBar {
        padding: 25px 0;
        background: #f3f7f9;
        font-size: 24px;
        color: $font-color-deep-grey;
        display: flex;
        align-items: center;
        padding-left: 35px;
        .fa-calendar-alt {
            font-size: 30px;
            color: #4c4c4c;
        }
        .today-text {
            margin: 0 10px;
        }
    }
}
</style>
