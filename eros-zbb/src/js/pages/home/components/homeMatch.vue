<template>
    <div class="container">
        <scroller class="home-match" scroll-direction="horizontal" :show-scrollbar="false">
            <div class="home-match-item" v-for="(item, index) in result" :key="index">
                <text class="home-match-title">{{item.source}}</text>
                <div class="home-match-result">
                    <image class="home-match-img" :src="item.hometeam_img"></image>
                    <div style="flex-direction: row" v-if="item.status !== '未开始'">
                        <text :class="['score', item.home_score > item.away_score?'win': '']">{{item.home_score}}</text>
                        <text class="score"> : </text>
                        <text :class="['score', item.home_score < item.away_score?'win':'']">{{item.away_score}}</text>
                    </div>
                    <div v-else>
                        <text class="time">{{item.start_time}}</text>
                    </div>
                    <image class="home-match-img" :src="item.awayteam_img"></image>
                </div>
                <div class="home-match-info">
                    <text class="home-match-team">{{item.hometeam}}(主)</text>
                    <text class="home-match-state" :class="{'is-not-trail': !item.is_trail && item.status === '未开始', 'is-online': item.status === '已开始'}">{{item.end_description_word}}</text>
                    <text class="home-match-team">{{item.awayteam}}</text>
                </div>
            </div>
        </scroller>

        <text class="info">10月8号 | Mavis下午好，今天有5场赛事直播</text>
    </div>
</template>

<script>
export default {
    props: {
        liveTrailList: {
            type: Array,
            require: true
        }
    },
    computed: {
        result() {
            let arr = this.liveTrailList.map(e => {
                let d = new Date(e.start_time)
                let hour = this.tranHour(d.getHours())
                let min = this.tranMins(d.getMinutes())
                e.start_time = `${hour}:${min}`
                return e
            })
            return arr
        }
    },
    methods: {
        tranHour(hour) {
            return hour < 10 ? `0${hour}` : hour
        },
        tranMins(mins) {
            return mins < 10 ? `0${mins}` : mins
        }
    }
}
</script>

<style scoped>
/* homeMatch */

.container {
    background-color: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
}

.info {
    color: #0088ff;
    font-size: 24px;
    margin-left: 30px;
}

.home-match {
    height: 212px;
    flex-direction: row;
}

.home-match-item {
    width: 480px;
    height: 192px;
    background-color: #f2f2f2;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    border-radius: 6px;
    box-shadow: 0px 0px 8px rgba(0, 51, 109, 0.25);
    justify-content: space-around;
}

.home-match-title {
    font-size: 24px;
    color: #808080;
}

.home-match-img {
    width: 68px;
    height: 68px;
    border-radius: 34px;
}

.home-match-result {
    flex-direction: row;
    align-items: center;
    width: 400px;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
}

.home-match-info {
    flex-direction: row;
    justify-content: space-between;
    width: 480px;
}

.win {
    color: #f3091a;
}

.home-match-team {
    font-size: 24px;
    width: 150px;
    text-align: center;
}

.home-match-state {
    font-size: 24px;
    background-color: #0077ff;
    width: 120px;
    text-align: center;
    height: 36px;
    border-radius: 18px;
    line-height: 36px;
    color: #ffffff;
}

.score,
.time {
    color: #808080;
    font-size: 24px;
}

</style>
