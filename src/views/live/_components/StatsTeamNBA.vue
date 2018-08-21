<template>
    <div class="statsTeam">
        <stats-team-item
            title="两分球"
            :lineHome="data.home.two_point_goals/data.home.two_point_attempted"
            :lineAway="data.away.two_point_goals/data.away.two_point_attempted"
            :home="`${data.home.two_point_goals}/${data.home.two_point_attempted}(${data.home.two_point_goals/data.home.two_point_attempted*100}%)`"
            :away="`${data.away.two_point_goals}/${data.away.two_point_attempted}(${data.away.two_point_goals/data.away.two_point_attempted*100}%)`">
        </stats-team-item>

        <!-- 三分球 -->
        <stats-team-item
            title="三分球"
            :lineHome="data.home.three_point_goals/data.home.three_point_attempted"
            :lineAway="data.away.three_point_goals/data.away.three_point_attempted"
            :home="`${data.home.three_point_goals}/${data.home.three_point_attempted}(${data.home.three_point_goals/data.home.three_point_attempted*100}%)`"
            :away="`${data.away.three_point_goals}/${data.away.three_point_attempted}(${data.away.three_point_goals/data.away.three_point_attempted*100}%)`">
        </stats-team-item>

        <!-- 命中率 -->
        <stats-team-item
            title="命中率"
            :lineHome="data.home.field_goals/data.home.field_goals_attempted"
            :lineAway="data.away.field_goals/data.away.field_goals_attempted"
            :home="`${data.home.field_goals/data.home.field_goals_attempted*100}%`"
            :away="`${data.away.field_goals/data.away.field_goals_attempted*100}%`">
        </stats-team-item>

        <!-- 篮板数 -->
        <stats-team-item
            title="篮板数"
            :home="data.home.rebounds"
            :away="data.away.rebounds">
        </stats-team-item>

        <!-- 助攻数 -->
        <stats-team-item
            title="助攻数"
            :home="data.home.assists"
            :away="data.away.assists">
        </stats-team-item>

        <!-- 篮板数 -->
        <stats-team-item
            title="抢断数"
            :home="data.home.steals"
            :away="data.away.steals">
        </stats-team-item>

        <!-- 篮板数 -->
        <stats-team-item
            title="罚球数"
            :home="data.home.free_throws_attempted"
            :away="data.away.free_throws_attempted">
        </stats-team-item>

        <!-- 篮板数 -->
        <stats-team-item
            title="犯规数"
            :home="data.home.personal_fouls"
            :away="data.away.personal_fouls">
        </stats-team-item>

        <!-- 篮板数 -->
        <stats-team-item
            title="失误数"
            :home="data.home.turnovers"
            :away="data.away.turnovers">
        </stats-team-item>
        

    </div>
</template>

<script>
import statsTeamItem from './StatsTeamItem';

export default {
    name: 'live_statsTeamNBA',
    components: { statsTeamItem },
    props: {
        data: {
            type: Object,
            require: true
        }
    }
};
</script>

<style scoped lang="scss">
</style>
