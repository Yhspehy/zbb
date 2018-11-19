<template>
    <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh">
        <cell v-for="item in typeList" :key="item.id">
            <text class="typeName">{{item.name}}</text>
            <div
                v-for="el in item.list"
                :key="el" class="leagueItem"
                @click="goLeagueMatch(el)">

                <text class="leagueName">{{el}}</text>
                <div class="count" >
                    <text
                        class="countText"
                        :style="{'color': matchCountObj[el]? '#00bbff': ''}"
                        v-if="matchCountObj[el]">今日共有{{matchCountObj[el]}}场比赛</text>
                    <wxc-icon
                        name="more"
                        :style="{'color': matchCountObj[el]? '#00bbff': ''}"
                        class="fa-chevron-right"></wxc-icon>
                </div>
            </div>
        </cell>

    </list>
</template>

<script>
import find from 'lodash/find'
import { WxcIcon } from 'weex-ui'
export default {
    name: 'schedule_match',
    components: { WxcIcon },
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
        }
    },
    created() {
        this.initCount()
    },
    mounted() {
        this.getLeagueTodaMatchCount()
    },
    methods: {
        onrefresh() {
            setTimeout(() => {
                this.$refs['list'].refreshEnd()
            }, 2000)
        },
        initCount() {
            const self = this
            this.allLeagueList.forEach(e => {
                if (!self.matchCountObj[e]) self.$set(self.matchCountObj, e, 0)
            })
        },
        getLeagueTodaMatchCount() {
            const date = this.$moment().format('YYYY-MM-DD')
            let todayMatchList = {}
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/GetMonthList'
            }).then((res) => {
                if (res.data[date]) {
                    todayMatchList = res.data[date]
                    todayMatchList.match_list.forEach(e => {
                        let l = find(this.allLeagueList, t => {
                            return t === e.league
                        })
                        this.matchCountObj[l] += 1
                    })
                }
            })
        },
        goLeagueMatch(item) {
            this.$router.open({
                name: 'schedule.league',
                navTitle: item
            })
        }
    }
}
</script>

<style scoped>
.schedule_match {
    color: #4d4d4d;
}

.typeName {
    font-size: 24px;
    padding: 25px 36px;
    background-color: #f3f7f9;
}
.leagueItem {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 36px;
    padding-left: 36px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom-style: solid;
    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;
}

.leagueName {
    font-size: 28px;
}
.count {
    flex-direction: row;
    align-items: center;
}
.countText {
    font-size: 24px;
}
.fa-chevron-right {
    font-size: 22px;
    margin-left: 20px;
}
</style>
