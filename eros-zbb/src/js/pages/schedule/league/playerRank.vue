<template>
    <div class="player_rank">
        <div class="navBar flex-row-center">
            <text
                v-for="(nav, key) in navObj[league]"
                :class="['navItem', chosenNav === key?'navActive': 'navNormal']"
                @click="chosenNav = key"
                :key="nav">{{ nav }}</text>
        </div>

        <div class="listHead listItem flex-row-center">
            <text class="player">球员</text>
            <text class="team">球队</text>
            <text class="value">数据</text>
        </div>

        <div class="listItem flex-row-center" v-for="item in data[chosenNav]" :key="item.rank">
            <div class="player flex-row-center">
                <text class="rank">{{item.rank}}.</text>
                <image class="avatar" src="http://temp.im/60x60"></image>
                <div class="info">
                    <text class="name">{{item.name}}</text>
                    <text class="infoValue">{{item.points}}分 {{item.rebounds}}板 {{item.assists}}助</text>
                </div>
            </div>
            <text class="team">{{item.team}}</text>
            <text class="value">{{item[listType]}}</text>
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
        }
    },
    computed: {
        listType() {
            return this.chosenNav ? this.chosenNav.match(/^(.*)_.*/)[1] : ''
        }
    },
    created() {
        this.$notice.loading.show()
        this.fetchPlayerRank()
    },
    methods: {
        fetchPlayerRank() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/rank/player/1'
            }).then(res => {
                this.data = res.data
                this.$nextTick(() => {
                    this.$notice.loading.hide()
                })
            })
        }
    }
}
</script>

<style scoped>
.player_rank {
    padding-top: 20px;
    background-color: #ffffff;
}

.flex-row-center {
    flex-direction: row;
    align-items: center;
}

.navBar {
    justify-content: center;
}

.navItem {
    margin-left: 15px;
    margin-right: 15px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 13px;
    padding-right: 13px;
    font-size: 28px;
}

.navNormal {
    color: #4d4d4d;
    background-image: linear-gradient(to right,rgba(179, 179, 179, 0.5), rgba(179, 179, 179, 0.6));
}

.navActive {
    color: #fff;
    background-image: linear-gradient(to right,#0077ff,#0089ff, #0091ff, #0099ff);
}

.listItem {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 30px;
    font-size: 28px;
    color: #4d4d4d;
}

.player {
    font-size: 28px;
    flex: 4;
    color: #4d4d4d;
}

.rank {
    width: 30px;
    font-size: 28px;
    margin-right: 20px;
    color: #f5303d;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border-style: solid;
    border-color: #000000;
    border-width: 1px;
}

.info {
    flex: 1;
    margin-left: 20px;
}

.name {
    font-size: 28px;
    color: #4d4d4d;
}

.infoValue {
    font-size: 24px;
    margin-top: 8px;
    color: #808080;
}

.team,
.value {
    font-size: 28px;
    text-align: center;
    flex: 1;
    margin-right: 35px;
    color: #808080;
}

.listHead {
    font-size: 24px;
    color: #808080;
}
</style>
