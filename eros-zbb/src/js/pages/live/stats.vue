<template>
    <list class="list">

        <!-- 比赛详情 -->
        <cell>
            <match-info :data="data"></match-info>
        </cell>

        <!-- 比赛每节分数 -->
        <cell>
            <text class="header">赛况</text>
            <period
                v-if="data.type === 0"
                :period_score="data.period_score"
                :home_score="data.home_score"
                :away_score="data.away_score">
            </period>
        </cell>

        <!-- NBA球队统计 -->
        <cell>
            <text class="header">球队统计</text>
            <stats-team-nba v-if="data.team_stats"  :data="data.team_stats"></stats-team-nba>
        </cell>

        <!-- NBA球员统计 -->
        <cell>
            <text class="header">球员统计-{{data.hometeam}}</text>
            <stats-player v-if="data.player_stats.home" :data="data.player_stats.home"></stats-player>
        </cell>

        <cell>
            <text class="header">球员统计-{{data.awayteam}}</text>
            <stats-player v-if="data.player_stats.away" :data="data.player_stats.away"></stats-player>
        </cell>

        <!-- 本场最佳 -->
        <cell>
            <text class="header">本场最佳</text>
            <stats-best-player v-if="data.max_players" :data="data.max_players"></stats-best-player>
        </cell>

        <!-- 交锋历史 -->
        <cell>
            <text class="header">交锋历史</text>
            <stats-history v-if="data.match_history" :data="data.match_history"></stats-history>
        </cell>

    </list>
</template>

<script>
import matchInfo from './components/matchInfo'
import period from './components/period'
import statsTeamNba from './components/statsTeamNBA'
import statsPlayer from './components/statsPlayer'
import statsBestPlayer from './components/statsBestPlayer'
import statsHistory from './components/statsHistory'
export default {
    components: {
        matchInfo,
        period,
        statsTeamNba,
        statsPlayer,
        statsBestPlayer,
        statsHistory
    },
    data () {
        return {
            data: {}
        }
    },
    created () {
        this.$notice.loading.show()
        this.getData()
    },
    beforeDestroy () {
        this.$notice.loading.hide()
    },
    methods: {
        getData () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/stats/1'
            }).then(res => {
                this.data = res.data
                this.$notice.loading.hide()
            })
        }
    }
}
</script>

<style scoped>
.list {
    background-color: #f3f7f9;
}

.header {
    font-size: 32px;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 20px;
    padding-left: 35px;
    padding-right: 35px;
    background-color: #ffffff;
    margin-top: 20px;
    color: #4d4d4d;
}
</style>
