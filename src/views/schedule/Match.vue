<template>
    <div class="schedule_match">
        <div v-for="item in typeList" :key="item.id">
            <div class="typeName">{{item.name}}</div>
            <div v-for="el in item.list" :key="el" class="leagueItem border-bottom-1px" @click="goLeagueMatch(el)">
                <span class="leagueName">{{el}}</span>
                <span class="count" :style="{'color': matchCountObj[el]? '#00bbff': ''}">
                    <span v-if="matchCountObj[el]">今日共有{{matchCountObj[el]}}场比赛</span>
                    <i class="fas fa-chevron-right"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import find from 'lodash/find';
export default {
    name: 'schedule_match',
    data() {
        return {
            typeList: [
                {
                    name: '篮球',
                    list: ['NBA', 'CBA']
                },
                {
                    name: '足球',
                    list: ['世界杯', '英超', '西甲', '意甲', '德甲', '法甲', '欧冠', '中超']
                }
            ],
            allLeagueList: ['NBA', 'CBA', '世界杯', '英超', '西甲', '意甲', '德甲', '法甲', '欧冠', '中超'],
            matchCountObj: {}
        };
    },
    created() {
        this.initCount();
    },
    mounted() {
        this.getLeagueTodaMatchCount();
    },
    methods: {
        initCount() {
            const self = this;
            this.allLeagueList.forEach(e => {
                if (!self.matchCountObj[e]) self.$set(self.matchCountObj, e, 0);
            });
        },
        async getLeagueTodaMatchCount() {
            const self = this;
            const date = this.$moment().format('YYYY-MM-DD');
            let todayMatchList = {};
            let res = await this.$store.dispatch('schedule/GetMonthList', {
                year: this.$moment().format('YYYY'),
                month: this.$moment().format('M')
            });
            todayMatchList = res[date];
            todayMatchList.match_list.forEach(e => {
                let l = find(self.allLeagueList, t => {
                    return t === e.league;
                });
                self.matchCountObj[l] += 1;
            });
        },
        goLeagueMatch(item) {
            this.$store.commit('schedule/SET_MATCHLEAGUENAME', item);
            this.$router.push({
                path: `/schedule/league/1/match`
            });
        }
    }
};
</script>

<style scoped lang="scss">
.schedule_match {
    color: $font-color-deep-grey;
    .typeName {
        font-size: 24px;
        padding: 25px 36px;
        background-color: #f3f7f9;
    }
    .leagueItem {
        padding: 30px 36px;
        display: flex;
        justify-content: space-between;
        @include border-bottom-1px;
        .leagueName {
            font-size: 28px;
        }
        .count {
            font-size: 24px;
        }
        .fa-chevron-right {
            font-size: 22px;
            margin-left: 20px;
        }
    }
}
</style>
