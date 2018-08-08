<template>
    <div class="schedulePlayoff">

        <!-- 东部赛程 -->
        <div class="east">
            <div class="eastRound1" v-if="data.Round_1">
                <div class="eastRound1Item" v-if="data.Round_1.east" v-for="item in data.Round_1.east" :key="item.team_one">
                    <div class="eastRound1ItemTeam">
                        <span>{{item.team_one}}</span>
                        <span>{{item.team_two}}</span>
                    </div>
                    <div class="eastRound1ItemScore">
                        <span>1</span>
                        <span>{{item.team_one_score}}: {{item.team_two_score}}</span>
                        <span>2</span>
                    </div>
                </div>
            </div>

            <div class="eastRound2 Round2" v-if="data.Round_2">
                <div class="Round2Item" v-if="data.Round_2.east" v-for="item in data.Round_2.east" :key="item.team_one">
                    <span>img1</span>
                    <span>{{item.team_one_score}}: {{item.team_two_score}}</span>
                    <span>img2</span>
                </div>
            </div>

            <div class="eastFinal" v-if="data.Semi_final">
                <div class="SemiFinalItem">
                    <span>img1</span>
                    <span>{{data.Semi_final.east.team_one_score}}: {{data.Semi_final.east.team_two_score}}</span>
                    <span>img2</span>
                </div>
            </div>
        </div>

        <!-- 总决赛 -->
        <div class="final" v-if="data.Final">
            <div class="finalItem">
                <span>img1</span>
                <span>{{data.Final.team_one_score}}: {{data.Final.team_two_score}}</span>
                <span>img2</span>
            </div>
        </div>

        <!-- 西部赛程 -->
        <div class="west">
             <div class="westFinal" v-if="data.Semi_final">
                <div class="SemiFinalItem">
                    <span>img1</span>
                    <span>{{data.Semi_final.west.team_one_score}}: {{data.Semi_final.west.team_two_score}}</span>
                    <span>img2</span>
                </div>
            </div>

            <div class="westRound2 Round2" v-if="data.Round_2">
                <div class="Round2Item" v-if="data.Round_2.west" v-for="item in data.Round_2.west" :key="item.team_one">
                    <span>img1</span>
                    <span>{{item.team_one_score}}: {{item.team_two_score}}</span>
                    <span>img2</span>
                </div>
            </div>

            <div class="westRound1" v-if="data.Round_1">
                <div class="westRound1Item" v-if="data.Round_1.west" v-for="item in data.Round_1.west" :key="item.team_one">
                    <div class="westRound1ItemScore">
                        <span>1</span>
                        <span>{{item.team_one_score}}: {{item.team_two_score}}</span>
                        <span>2</span>
                    </div>
                    <div class="westRound1ItemTeam">
                        <span>{{item.team_one}}</span>
                        <span>{{item.team_two}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule_league_playoff',
    data() {
        return {
            data: {}
        };
    },
    created() {
        this.getPlayoff();
    },
    methods: {
        async getPlayoff() {
            let res = await this.$store.dispatch('schedule/GetPlayoff', '1');
            this.data = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
@mixin white-bg {
    background: #fff;
    border-radius: 30px;
    padding: 10px;
}
@mixin flex-center-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.schedulePlayoff {
    width: 750px;
    height: 1054px;
    background: url(../../../../public/image/playoff.png) no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    padding: 40px 27px;
    font-size: 22px;
    .eastRound1 {
        height: 163px;
        display: flex;
        .eastRound1Item {
            width: 156px;
            height: 103px;
            margin: 0 9px;
            .eastRound1ItemTeam {
                display: flex;
                justify-content: space-between;
                padding: 0 5px;
            }
            .eastRound1ItemScore {
                margin-top: 16px;
                height: 60px;
                @include white-bg;
                @include flex-center-between;
            }
        }
    }
    .westRound1 {
        height: 163px;
        display: flex;
        .westRound1Item {
            width: 156px;
            height: 103px;
            margin: 0 9px;
            .westRound1ItemTeam {
                display: flex;
                justify-content: space-between;
                padding: 0 5px;
                margin-top: 16px;
            }
            .westRound1ItemScore {
                height: 60px;
                @include white-bg;
                @include flex-center-between;
            }
        }
    }
    .Round2 {
        height: 120px;
        display: flex;
        padding: 0 54px;
        justify-content: space-between;
        .Round2Item {
            width: 240px;
            height: 60px;
            @include white-bg;
            @include flex-center-between;
        }
    }
    .eastFinal,
    .westFinal {
        height: 120px;
        padding: 0 228px;
        .SemiFinalItem {
            width: 240px;
            height: 60px;
            @include white-bg;
            @include flex-center-between;
        }
    }
    .final {
        height: 140px;
        padding: 0 128px;
        .finalItem {
            width: 460px;
            height: 80px;
            padding: 0 128px !important;
            @include white-bg;
            @include flex-center-between;
        }
    }
}
</style>
