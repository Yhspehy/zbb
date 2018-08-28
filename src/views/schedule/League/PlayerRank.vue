<template>
    <div class="schedulePlayRank">
        <div class="navBar">
            <div
                class="navItem"
                v-for="(nav, key) in navObj[league]"
                :class="{'navActive': chosenNav === key}"
                @click="chosenNav = key"
                :key="nav">{{ nav }}</div>
        </div>

        <div class="listHead listItem border-bottom-1px">
            <div class="player">球员</div>
            <div class="team">球队</div>
            <div class="value">数据</div>
        </div>

        <div class="listItem border-bottom-1px" v-for="item in data[chosenNav]" :key="item.rank">
            <div class="player">
                <div class="rank">{{item.rank}}.</div>
                <div class="avatar">img</div>
                <div class="info">
                    <div class="name">{{item.name}}</div>
                    <div class="infoValue">{{item.points}}分 {{item.rebounds}}板 {{item.assists}}助</div>
                </div>
            </div>
            <div class="team">{{item.team}}</div>
            <div class="value">{{item[listType]}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule_league_playerRank',
    data() {
        return {
            league: 'NBA',
            chosenNav: 'points_rank',
            navObj: {
                NBA: {
                    points_rank: '得分榜',
                    assists_rank: '助攻榜',
                    rebounds_rank: '篮板榜',
                    steals_rank: '抢断榜',
                    blocks_rank: '盖帽榜'
                }
            },
            data: {}
        };
    },
    computed: {
        listType() {
            return this.chosenNav ? this.chosenNav.match(/^(.*)_.*/)[1] : '';
        }
    },
    created() {
        this.getPlayerRank();
    },
    methods: {
        async getPlayerRank() {
            let res = await this.$store.dispatch('schedule/GetPlayerRank', '1');
            this.data = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
@mixin navItem-border {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    z-index: 10;
}

.schedulePlayRank {
    .navBar {
        @include flex-center;
        .navItem {
            margin: 0 15px;
            padding: 14px 13px;
            background: rgba(179, 179, 179, 0.5);
            font-size: 28px;
            color: $grey-dark;
            position: relative;
        }
        .navItem:first-child:after {
            top: 0;
            right: -20px;
            @include navItem-border;
            border-width: 60px 0 0 20px;
            border-left-color: rgba(179, 179, 179, 0.5);
        }
        .navItem.navActive:first-child:after {
            border-left-color: $blue-light !important;
        }
        .navItem:last-child:before {
            top: 0;
            left: -20px;
            @include navItem-border;
            border-width: 60px 0 0 20px;
            border-top-color: rgba(179, 179, 179, 0.5);
        }
        .navItem.navActive:last-child:before {
            border-top-color: #0080ff !important;
        }
        .navItem:not(:first-child):not(:last-child) {
            &:before {
                top: 0;
                left: -20px;
                @include navItem-border;
                border-width: 60px 0 0 20px;
                border-top-color: rgba(179, 179, 179, 0.5);
            }
            &:after {
                top: 0;
                right: -20px;
                @include navItem-border;
                border-width: 60px 0 0 20px;
                border-left-color: rgba(179, 179, 179, 0.5);
            }
        }
        .navItem.navActive:not(:first-child):not(:last-child) {
            &:before {
                border-top-color: #0080ff !important;
            }
            &:after {
                border-left-color: $blue-light !important;
            }
        }
        .navActive {
            color: #fff;
            background-image: linear-gradient(
                to right,
                #0080ff 0%,
                #0077ff 0%,
                #006eff 0%,
                #0073ff 0%,
                #0077ff 0%,
                #0089ff 50%,
                #0091ff 79%,
                #0099ff 100%
            );
        }
    }
    .listItem {
        display: flex;
        flex-flow: row nowrap;
        padding: 16px 0 16px 30px;
        font-size: 28px;
        color: $grey-dark;
        @include border-bottom-1px;
        .player {
            width: 450px;
            display: flex;
            flex-flow: row nowrap;
            .rank {
                color: $red;
                margin-right: 20px;
            }
            .info {
                margin-left: 10px;
                .infoValue {
                    margin-top: 8px;
                    font-size: 24px;
                    color: $grey;
                }
            }
        }
        .team,
        .value {
            text-align: center;
            width: 100px;
            margin-right: 35px;
        }
    }
    .listHead {
        font-size: 24px;
        color: $grey;
    }
}
</style>
