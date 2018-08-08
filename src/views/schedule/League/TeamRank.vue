<template>
    <div class="scheduleTeamRank">

        <!-- NBA -->
        <div v-if="NBA.east" class="NBA">
            <div class="area" v-for="area in NBA" :key="area.name">
                <div class="areaTitle areaItem">
                    <div class="name">{{area.name}}</div>
                    <div class="wins">胜</div>
                    <div class="losses">负</div>
                    <div class="winPercent">胜率</div>
                    <div class="gameBack">胜差</div>
                </div>

                <div
                    v-for="team in area.list"
                    :key="team.team_name"
                    :style="{'background': team.rank < 9 ? '#fff9f9' : ''}"
                    class="areaItem">
                    <div class="name">{{team.rank}}. {{team.team_name}}</div>
                    <div class="wins">{{team.wins}}</div>
                    <div class="losses">{{team.losses}}</div>
                    <div class="winPercent">{{team.win_percent}}%</div>
                    <div class="gameBack">{{team.game_back}}</div>
                </div>

                <div class="cutOffLine"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule_league_teamRank',
    data() {
        return {
            NBA: {}
        };
    },
    created() {
        this.getTeamRank();
    },
    methods: {
        async getTeamRank() {
            let res = await this.$store.dispatch('schedule/GetTeamRank', '1');
            this.NBA = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
.scheduleTeamRank {
    .NBA {
        .area {
            .areaItem {
                display: flex;
                font-size: 28px;
                padding: 33px 0 33px 30px;
                .name {
                    width: 300px;
                }
                .wins,
                .losses,
                .winPercent,
                .gameBack {
                    width: 100px;
                    margin-right: 30px;
                    text-align: center;
                }
            }
            .areaTitle {
                font-size: 24px;
                padding: 20px 0 20px 30px;
            }
        }
    }
    .cutOffLine {
        background: #f3f7f9;
        height: 20px;
        width: 100%;
    }
}
</style>
