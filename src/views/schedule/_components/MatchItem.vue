<template>
    <!-- 比赛列表 -->
    <div class="matchItem border-top-1px">
        <!-- 比赛时间和联赛来源 -->
        <div class="timeAndSource">
            <div class="time">{{$moment(matchData.start_time).format('HH:mm')}}</div>
            <div class="source">{{matchData.source}}</div>
        </div>

        <!-- 比赛球队 -->
        <div class="team">
            <div class="hometeam">
                <img src="http://temp.im/15x15">
                <span>{{matchData.hometeam}}</span>
            </div>
            <div class="awayteam">
                <img src="http://temp.im/15x15">
                <span>{{matchData.awayteam}}</span>
            </div>
        </div>

        <!-- 比分预约 -->
        <div class="score team border-right-1px">
            <div v-if="matchData.status !== '未开始'">
                <div class="hometeam" :class="{'win': matchData.home_score > matchData.away_score}">{{matchData.home_score}}</div>
                <div class="awayteam" :class="{'win': matchData.away_score > matchData.home_score}">{{matchData.away_score}}</div>
            </div>
            <div v-else :style="{'color': matchData.is_trail ? '#0077ff' : '#808080'}">
                <div class="hometeam align-center"><i class="far fa-clock" ></i></div>
                <div class="awayteam fontsize-24">图文直播</div>
            </div>
        </div>

        <!-- 直播平台 -->
        <div class="media"> 
            <div>{{matchData.media}}</div>
            <div class="linkBtn" :class="{'live': matchData.end_description_word !== '直播'}" v-if="matchData.end_description_word">{{matchData.end_description_word}}</div>
        </div>
    </div>
</template>

<script>
export default {
    nama: 'schedule_matchItem',
    props: {
        matchData: {
            type: Object,
            require: true
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.matchItem {
    display: flex;
    margin: 0 24px 0 36px;
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
        width: 230px;
        font-size: 28px;
        color: $font-color-deep-grey;
        .hometeam {
            margin-bottom: 16px;
        }
        img {
            vertical-align: bottom;
            margin-right: 20px;
        }
        .win {
            color: #f63146;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                top: 6px;
                right: -20px;
                width: 0;
                height: 0;
                border: 10px solid transparent;
                border-right-color: #f3091a;
            }
        }
    }
    .score {
        width: 116px;
        & > div {
            padding-right: 20px;
            text-align: right;
            @include border-right-1px;
        }
        .align-center {
            text-align: center;
        }
        .fontsize-24 {
            font-size: 24px;
        }
    }
    .media {
        width: 120px;
        margin-left: 20px;
        font-size: 22px;
        color: $font-color-grey;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;
        .linkBtn {
            margin-top: 14px;
            width: 120px;
            height: 36px;
            color: #fff;
            border-radius: 18px;
            background: #fb413b;
            text-align: center;
            line-height: 36px;
        }
        .live {
            background: #0091ff;
        }
    }
}
</style>
