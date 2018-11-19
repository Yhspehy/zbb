<template>
    <scroller class="scheduleTeamRank">
        <!-- NBA -->
            <!-- <header class="areaTitle areaItem header">
                <text class="name title">{{NBA.east.name}}</text>
                <text class="wins title">胜</text>
                <text class="losses title">负</text>
                <text class="winPercent title">胜率</text>
                <text class="gameBack title">胜差</text>
            </header>

        <cell
            v-for="team in NBA.east.list"
            :key="team.team_name"
            :style="{'backgroundColor': team.rank < 9 ? '#fff9f9' : ''}"
            class="areaItem">
            <text class="name">{{team.rank}}. {{team.team_name}}</text>
            <text class="wins">{{team.wins}}</text>
            <text class="losses">{{team.losses}}</text>
            <text class="winPercent">{{team.win_percent}}%</text>
            <text class="gameBack">{{team.game_back}}</text>
        </cell>

         <header class="areaTitle areaItem header">
                <text class="name title">{{NBA.west.name}}</text>
                <text class="wins title">胜</text>
                <text class="losses title">负</text>
                <text class="winPercent title">胜率</text>
                <text class="gameBack title">胜差</text>
            </header>

            <cell
            v-for="team in NBA.east.list"
            :key="team.team_name"
            :style="{'backgroundColor': team.rank < 9 ? '#fff9f9' : ''}"
            class="areaItem">
            <text class="name">{{team.rank}}. {{team.team_name}}</text>
            <text class="wins">{{team.wins}}</text>
            <text class="losses">{{team.losses}}</text>
            <text class="winPercent">{{team.win_percent}}%</text>
            <text class="gameBack">{{team.game_back}}</text>
        </cell> -->
        <div class="area" v-for="area in NBA" :key="area.name">
            <div class="areaTitle areaItem header">
                <text class="name title">{{area.name}}</text>
                <text class="wins title">胜</text>
                <text class="losses title">负</text>
                <text class="winPercent title">胜率</text>
                <text class="gameBack title">胜差</text>
            </div>

            <div
                v-for="team in area.list"
                :key="team.team_name"
                :style="{'backgroundColor': team.rank < 9 ? '#fff9f9' : ''}"
                class="areaItem"
            >
                <text class="name">{{team.rank}}. {{team.team_name}}</text>
                <text class="wins">{{team.wins}}</text>
                <text class="losses">{{team.losses}}</text>
                <text class="winPercent">{{team.win_percent}}%</text>
                <text class="gameBack">{{team.game_back}}</text>
            </div>

            <div v-if="area.name === '东部联盟'" class="cutOffLine"></div>
        </div>
    </scroller>
</template>

<script>
export default {
    name: 'schedule_league_teamRank',
    data() {
        return {
            NBA: {}
        }
    },
    created() {
        this.$notice.loading.show()
        this.fetchTeamRankList()
    },
    methods: {
        fetchTeamRankList() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/rank/team/1'
            }).then(res => {
                this.NBA = res.data
                this.$nextTick(() => {
                    this.$notice.loading.hide()
                })
            })
        }
    }
}
</script>

<style scoped>

.scheduleTeamRank {
    background-color: #ffffff;
}

.header {
    position: sticky;
    background-color: #ffffff;
}

.name {
    flex: 3;
    font-size: 26px;
}
.wins,
.losses,
.winPercent,
.gameBack {
    flex: 1;
    margin-right: 30px;
    text-align: center;
    font-size: 26px;
}

.areaTitle {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
}

.areaItem {
    padding-top: 33px;
    padding-bottom: 33px;
    padding-left: 30px;
    flex-direction: row;
}

.title {
    font-size: 24px;
}

.cutOffLine {
    background-color: #f3f7f9;
    height: 20px;
    width: 750px;
}
</style>
