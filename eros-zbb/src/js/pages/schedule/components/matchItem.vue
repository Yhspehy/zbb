<template>
    <!-- 比赛列表 -->
    <div class="matchItem" @click="goLive">
        <!-- 比赛时间和联赛来源 -->
        <div class="timeAndSource">
            <text class="time">{{startTime}}</text>
            <text class="source">{{matchData.source}}</text>
        </div>

        <!-- 比赛球队 -->
        <div class="team">
            <div class="teamLayout margin-bottom-16">
                <image class="img" src="http://temp.im/30x30"></image>
                <text class="teamName">{{matchData.hometeam}}</text>
            </div>
            <div class="teamLayout">
                <image class="img" src="http://temp.im/30x30"></image>
                <text class="teamName">{{matchData.awayteam}}</text>
            </div>
        </div>

        <!-- 比分预约 -->
        <div class="score">
            <div v-if="matchData.status !== '未开始'">
                <div style="flex-direction: row; justify-content: flex-end;">
                    <text :class="['teamLayout', 'margin-bottom-16', matchData.home_score > matchData.away_score?'win': '']">{{matchData.home_score}}</text>
                    <text v-if="matchData.home_score > matchData.away_score" class="winArrow">&#xf0d9;</text>
                </div>
                <div style="flex-direction: row; justify-content: flex-end;">
                    <text :class="['teamLayout', matchData.away_score > matchData.home_score?'win': '']">{{matchData.away_score}}</text>
                    <text v-if="matchData.home_score < matchData.away_score" class="winArrow">&#xf0d9;</text>
                </div>
            </div>
            <div v-else>
                <div class="teamLayout align-center" style="margin-bottom: 8px">
                    <wxc-icon name="clock" class="clockImg" :style="{'color': matchData.is_trail ? '#0077ff' : '#808080'}"></wxc-icon>
                </div>
                <text class="awayteam fontsize-24" :style="{'color': matchData.is_trail ? '#0077ff' : '#808080'}">图文直播</text>
            </div>
        </div>

        <!-- 直播平台 -->
        <div class="media">
            <text class="mediaName">{{matchData.media}}</text>
            <text class="linkBtn" :class="[matchData.end_description_word !== '直播'?'live': '']" v-if="matchData.end_description_word">{{matchData.end_description_word}}</text>
        </div>

    </div>
</template>

<script>
import { Utils } from 'weex-ui'
const domModule = weex.requireModule('dom')

export default {
    nama: 'schedule_matchItem',
    props: {
        matchData: {
            type: Object,
            require: true
        }
    },
    data () {
        return {}
    },
    computed: {
        startTime () {
            return this.$moment(this.matchData.start_time).format('HH:mm')
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    methods: {
        goLive () {
            this.$router.open({
                name: 'live',
                params: this.matchData,
                statusBarStyle: 'LightContent'
            })
        }
    }
}
</script>

<style scoped>
.matchItem {
    padding-right: 24px;
    padding-left: 36px;
    padding-top: 23px;
    padding-bottom: 23px;
    flex-direction: row;
    align-items:center;
    border-bottom-style: solid;
    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;
    background-color: #ffffff;
}
.timeAndSource {
    width: 160px;
    margin-right: 30px;
}
.time {
    font-size: 28px;
    color: #4d4d4d;
    margin-bottom: 18px;
}
.source {
    font-size: 22px;
    color: #808080;
}
.team {
    width: 230px;
}
.teamLayout {
    font-size: 28px;
    flex-direction: row;
}
.margin-bottom-16 {
    margin-bottom: 16px;
}
.img {
    vertical-align: bottom;
    margin-right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.teamName {
    font-size: 28px;
    color: #4d4d4d;
}

.clockImg {
    font-size: 28px;
}

.win {
    color: #f5303d;
}

.winArrow {
    font-family: fontAwesome;
    color: #f5303d;
    font-size: 26px;
    margin-left: 10px;
}

.score {
    width: 116px;
    padding-right: 20px;
}
.align-center {
    justify-content: center;
}
.fontsize-24 {
    font-size: 24px;
}
.media {
    width: 120px;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
}
.mediaName {
    font-size: 22px;
    color: #808080;
}
.linkBtn {
    margin-top: 14px;
    width: 120px;
    height: 36px;
    color: #fff;
    border-radius: 18px;
    font-size: 22px;
    background-color: #fb413b;
    text-align: center;
    line-height: 36px;
}
.live {
    background-color: #0091ff;
}
</style>
