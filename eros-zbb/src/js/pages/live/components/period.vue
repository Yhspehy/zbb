<template>
    <div class="period">
        <div class="periodRow periodRowTitle">
            <text class="scoreTitle" v-for="item in periodTitle" :key="item">{{item}}</text>
        </div>
        <div class="periodRow" v-for="(val, key) in period_score" :key="key">
            <div style="flex: 1; align-items: center;">
                <image class="teamImg" src="http://temp.im/25x25" alt="">
            </div>
            <text class="scoreText" v-for="(item, idx) in val" :key="idx">{{item}}</text>
            <text v-if="key === 'home'" class="scoreText">{{home_score}}</text>
            <text v-if="key === 'away'" class="scoreText">{{away_score}}</text>
        </div>
    </div>
</template>

<script>
export default {
    props: ['period_score', 'home_score', 'away_score'],
    data () {
        return {
            periodTitle: ['球队', '第1节', '第2节', '第3节', '第4节', '总分']
        }
    }
}
</script>

<style scoped>
.period {
    font-size: 28px;
    padding-bottom: 30px;
    background-color: #ffffff;
}

.periodRowTitle {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.scoreTitle {
    font-size: 24px;
    flex: 1;
    text-align: center;
}
.periodRow {
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
}
.scoreText {
    color: #808080;
    font-size: 24px;
    flex: 1;
    text-align: center;
}
.teamImg {
    width: 50px;
    height: 50px;
}
</style>
