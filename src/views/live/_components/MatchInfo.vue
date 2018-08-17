<template>
    <div class="matchInfo">
        <div class="teamInfo">
            <!-- cdn img -->
            <img src="/image/team/湖人.png" alt="data.hometeam">
            <div class="teamname">{{data.hometeam}}</div>
        </div>
        <div class="match">
            <div class="greyColor">{{$moment(data.finish_time).format('MM月DD日 HH:mm')}} {{status}}</div>
            <div class="score">{{data.home_score}} : {{data.away_score}}</div>
            <div class="greyColor">{{data.source}}</div>
        </div>
        <div class="teamInfo">
            <!-- cdn img -->
            <img src="/image/team/勇士.png" alt="data.awayteam">
            <div class="teamname">{{data.awayteam}}</div>
        </div>
    </div>
</template>

<script>
import { getMatchStatus } from '@/Utils/live';
export default {
    name: 'live_matchInfo',
    props: {
        data: {
            type: Object,
            require: true
        }
    },
    computed: {
        status() {
            return getMatchStatus(this.data.status);
        }
    }
};
</script>

<style scoped lang="scss">
.matchInfo {
    @include flex-center-between;
    padding: 25px 50px;
    text-align: center;
    .teamInfo {
        img {
            margin-bottom: 10px;
            width: 90px;
        }
        .teamname {
            color: $font-color-deep-grey;
            font-size: 24px;
        }
    }
    .match {
        .score {
            margin: 20px 0;
            color: $font-color-deep-grey;
            font-size: 36px;
        }
    }
    .greyColor {
        color: $font-color-grey;
        font-size: 24px;
    }
}
</style>
