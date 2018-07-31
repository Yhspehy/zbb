<template>
    <div class="popular">
        <div>
            <div v-for="(val, key) in popularObj" :key="key">
                <!-- 时间条 -->
                <div class="timeBar">
                    <i></i>
                    <span>今天 {{$moment(key).format('MM月DD号')}} {{$moment(key).format('dddd')}}</span>
                </div>

                <!-- 比赛列表 -->
                <div class="matchItem border-top-1px" v-for="item in popularObj[key]" :key="item.match_id">
                    <!-- 比赛时间和联赛来源 -->
                    <div class="timeAndSource">
                        <div class="time">{{$moment(item.start_time).format('HH:mm')}}</div>
                        <div class="source">{{item.source}}</div>
                    </div>

                    <!-- 比赛球队 -->
                    <div class="team">
                        <div class="hometeam">
                            <i></i>
                            <span>{{item.hometeam}}</span>
                        </div>
                        <div class="awayteam">
                            <i></i>
                            <span>{{item.awayteam}}</span>
                        </div>
                    </div>

                    <!-- 比分预约 -->
                    <div class="score team border-right-1px">
                        <div class="hometeam">72</div>
                        <div class="awayteam">108</div>
                    </div>

                    <!-- 直播平台 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule',
    data() {
        return {
            popularObj: {}
        };
    },
    created() {
        console.log('created');
        this.$moment.locale('zh-cn');
        this.getPopularList();
    },
    activated() {
        console.log('activated');
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
        padding: 25px 247px;
        background: #f3f7f9;
        font-size: 24px;
        color: $font-color-deep-grey;
    }

    .matchItem {
        display: flex;
        margin: 0 36px;
        padding: 23px 0;
        @include border-bottom-1px;
        .timeAndSource {
            width: 160px;
            margin-right: 30px;
            .time {
                font-size: 28px;
                color: $font-color-deep-grey;
                margin-bottom: 18px;
            }
            .source {
                font-size: 22px;
                color: $font-color-grey;
            }
        }
        .team {
            width: 190px;
            font-size: 28px;
            color: $font-color-deep-grey;
            .hometeam {
                margin-bottom: 16px;
            }
        }
        .score {
            width: 100px;
            @include border-right-1px;
        }
    }
}
</style>
