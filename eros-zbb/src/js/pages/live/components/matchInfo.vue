<template>
    <div class="matchInfo">
        <div class="teamInfo">
            <!-- cdn img -->
            <image class="teamImg" src="http://temp.im/90x90" alt="data.hometeam"></image>
            <text class="teamname">{{data.hometeam}}</text>
        </div>
        <div class="match">
            <text class="greyColor">{{$moment(data.finish_time).format('MM月DD日 HH:mm')}} {{status}}</text>
            <text class="score">{{data.home_score}} : {{data.away_score}}</text>
            <text class="greyColor">{{data.source}}</text>
        </div>
        <div class="teamInfo">
            <!-- cdn img -->
            <image class="teamImg" src="http://temp.im/90x90" alt="data.awayteam"></image>
            <text class="teamname">{{data.awayteam}}</text>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_matchInfo',
    props: {
        data: {
            type: Object,
            require: true
        }
    },
    computed: {
        status () {
            return this.getMatchStatus(this.data.status)
        }
    },
    methods: {
        getMatchStatus (status) {
            switch (status) {
            case 0:
                return '未开始'
            case 1:
                return '进行中'
            case 2:
                // eslint-disable-next-line vue/no-parsing-error
                return '已结束'
            }
        }
    }
}
</script>

<style scoped>
.matchInfo {
    margin-top: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.teamInfo {
    align-items: center;
}

.teamImg {
    margin-bottom: 10px;
    width: 90px;
    height: 90px;
}

.teamname {
    color: #4d4d4d;
    font-size: 24px;
}

.match {
    align-items: center;
}

.score {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4d4d4d;
    font-size: 36px;
}

.greyColor {
    color: #808080;
    font-size: 24px;
}
</style>
