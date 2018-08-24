<template>
    <div class="stats">
        <!-- 比赛信息 -->
        <match-info :data="data"></match-info>
        <!-- 分割线 -->
        <cut-off-line></cut-off-line>


        <!-- NBA赛况 -->
        <div v-if="data.type === 0" class="period">
            <div class="periodTitle border-bottom-1px">赛况</div>
            <div class="periodRow periodRowTitle border-bottom-1px">
                <div v-for="item in periodTitle" :key="item">{{item}}</div>
            </div>
            <div class="periodRow" v-for="(val, key) in data.period_score" :key="key">
                <div><img src="/image/team/湖人.png" alt=""></div>
                <div v-for="(item, idx) in val" :key="idx">{{item}}</div>
                <div>{{data[`${key}_score`]}}</div>
            </div>
        </div>
        <!-- 分割线 -->
        <cut-off-line></cut-off-line>


        <!-- 球队统计 -->
        <stats-item-header name="球队统计" :isExpand="expandObj.teamStats" @expand="expand('teamStats')"></stats-item-header>
        <collapse v-if="data.type === 0" :active="expandObj.teamStats">
            <stats-team-nba v-if="data.team_stats" :data="data.team_stats"></stats-team-nba>
        </collapse>
        <collapse v-if="data.type === 1" :active="expandObj.teamStats">
            <stats-team-football v-if="data.team_stats" :data="data.team_stats"></stats-team-football>
        </collapse>


        <!-- NBA球员统计 -->
        <stats-item-header v-if="data.type === 0" :name="`球员统计-${data.hometeam}`" :isExpand="expandObj.playerStats" @expand="expand('homePlayer')"></stats-item-header>
        <collapse v-if="data.type === 0" :active="expandObj.homePlayer">
            <stats-player v-if="data.player_stats" :data="data.player_stats.home" id="PlayeStatsHome"></stats-player>
        </collapse>

        <!-- NBA球员统计 -->
        <stats-item-header v-if="data.type === 0" :name="`球员统计-${data.awayteam}`" :isExpand="expandObj.playerStats" @expand="expand('awayPlayer')"></stats-item-header>
        <collapse v-if="data.type === 0" :active="expandObj.awayPlayer">
            <stats-player v-if="data.player_stats" :data="data.player_stats.away" id="PlayeStatsAway"></stats-player>
        </collapse>

        <!-- NBA本场最佳 -->
        <stats-it1em-header v-if="data.type === 0" name="本场最佳" :isExpand="expandObj.bestPlayer" @expand="expand('bestPlayer')"></stats-it1em-header>
        <collapse v-if="data.type === 0" :active="expandObj.bestPlayer">
            <stats-best-player v-if="data.max_players" :data="data.max_players" id="bestPlayer"></stats-best-player>
        </collapse>

        <!-- 足球赛况 -->
        <stats-item-header v-if="data.type === 1" name="赛况" :isExpand="expandObj.footballEvents" @expand="expand('footballEvents')"></stats-item-header>
        <collapse :active="expandObj.footballEvents">
            <football-events v-if="data.football_events" :data="data.football_events" id="footballEvents"></football-events>
        </collapse>

        <!-- 交锋历史 -->
        <stats-item-header name="交锋历史" :isExpand="expandObj.history" @expand="expand('history')"></stats-item-header>
        <collapse :active="expandObj.history">
            <stats-history v-if="data.match_history" :data="data.match_history" id="history"></stats-history>
        </collapse>


    </div>
</template>

<script>
import { getStats } from '@/Api/live';
import cutOffLine from '@/components/CutOffLine';
import matchInfo from './_components/MatchInfo';
import collapse from '@/Utils/collapse';
import statsItemHeader from './_components/StatsItemHeader';
import StatsTeamNba from './_components/StatsTeamNBA';
import StatsTeamFootball from './_components/StatsTeamFootball';
import statsPlayer from './_components/StatsPlayer';
import statsBestPlayer from './_components/StatsBestPlayer';
import statsHistory from './_components/StatsHistory';
import footballEvents from './_components/StatsFootballEvents';

export default {
    name: 'live_stats',
    components: {
        cutOffLine,
        matchInfo,
        collapse,
        statsItemHeader,
        StatsTeamNba,
        StatsTeamFootball,
        statsPlayer,
        statsBestPlayer,
        statsHistory,
        footballEvents
    },
    data() {
        return {
            data: {},
            periodTitle: ['球队', '第1节', '第2节', '第3节', '第4节', '总分'],
            expandObj: {
                teamStats: true,
                playerStats: true,
                homePlayer: true,
                awayPlayer: true,
                bestPlayer: true,
                history: true,
                footballEvents: true
            }
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let res = await getStats(1);
            this.data = res.data.data;
        },
        expand(key) {
            this.expandObj[key] = !this.expandObj[key];
        }
    }
};
</script>

<style scoped lang="scss">
.stats {
    .period {
        font-size: 28px;
        padding: 30px 0;
        .periodTitle {
            color: $font-color-deep-grey;
            padding: 0 0 20px 35px;
            @include border-bottom-1px(#f2f2f2, 90%);
        }
        .periodRowTitle {
            font-size: 24px;
            padding: 10px 0;
            margin-bottom: 10px;
            @include border-bottom-1px(#f2f2f2, 90%);
        }
        .periodRow {
            display: flex;
            align-items: center;
            color: $font-color-grey;
            img {
                height: 50px;
            }
            & > div {
                flex: 1;
                text-align: center;
            }
        }
    }

    .expand {
        transition: height 1s;
        overflow: hidden;
    }

    .expand-enter-active,
    .expand-leave-active {
        transition: all 1s;
    }
    .expand-enter,
    .expand-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
}
</style>
