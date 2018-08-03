<template>
    <div class="popular">
        <div>
            <div v-for="(val, key) in popularObj" :key="key">
                <!-- 时间条 -->
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
                    v-for="item in popularObj[key]"
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
    name: 'schedule_popular',
    components: { matchItem, goTop },
    data() {
        return {
            popularObj: {}
        };
    },
    created() {
        console.log('created');
        this.$moment.locale('zh-cn');
        if (Object.keys(this.$store.state.schedule.popularList).length) {
            this.popularObj = this.$store.state.schedule.popularList;
        } else {
            this.getPopularList();
        }
    },
    methods: {
        async getPopularList() {
            let res = await this.$store.dispatch('schedule/GetPopularList');
            for (let key in res.data.data) {
                if (this.$moment(key).format('MM月DD号') === this.$moment().format('MM月DD号')) {
                    console.log('today');
                }
            }
            this.popularObj = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
.popular {
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
