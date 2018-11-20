<template>
    <div class="scheduleCalendar">
        <calendar
            :itemList="monthList"
            @chooseDay="chooseDay"
            @chooseMonth="chooseMonth"
            :cacheData="false">
        </calendar>

        <div v-if="monthList[chooseDayData.rowDate]" class="matchList border-top-1px">
            <div class="matchItem" v-for="item in monthList[chooseDayData.rowDate].match_list" :key="item.match_id">
                <text class="time">{{$moment(item.start_time).format('HH:mm')}}</text>

                <div class="matchInfo">
                    <text class="program" v-if="item.program">{{item.program}}</text>
                    <text class="program" v-else>{{item.hometeam}} VS {{item.awayteam}}</text>
                    <text class="source">{{item.source}}</text>
                </div>

                <text :style="{'color' : item.end_description_word === '详情' || item.end_description_word === '回看' ? '#b3b3b3' : '#00bbff'}" class="endDes">{{item.end_description_word}}</text>
            </div>
        </div>
    </div>
</template>

<script>
import calendar from './components/calendar'
const tabbar = weex.requireModule("bmTabbar");

export default {
    name: 'schedule_calendar',
    components: { calendar },
    data() {
        return {
            monthList: {},
            chooseDayData: {}
        }
    },
    beforeCreate() {
        this.$navigator.setRightItem({
            text: '今日赛程',
            fontSize: '24px',
            textColor: 'rgb(245, 48, 61)'
        }, () => {
            tabbar.openPage({
                index: 1
            });
        })
    },
    created() {
        this.chooseMonth({
            year: this.$moment().format('YYYY'),
            month: this.$moment().format('M')
        })
    },
    methods: {
        getMonthList(year, month) {
            this.$notice.loading.show()
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/GetMonthList'
            }).then((res) => {
                this.monthList = res.data
                this.$notice.loading.hide()
            })
        },
        chooseDay(obj) {
            this.chooseDayData = obj
        },
        chooseMonth(obj) {
            const year = obj.year
            const month = obj.month.match(/(.*?)月?$/)[1]
            this.getMonthList(year, month)
        }
    }
}
</script>

<style scoped>
.calendar {
    margin-top: 85px;
    padding-top: 20px;
}

.matchList {
    background-color: #f3f7f9;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 36px;
    padding-right: 36px;
}

.matchItem {
    flex-direction: row;
    align-items: center;
}

.time {
    width: 100px;
    font-size: 28px;
    color: #4d4d4d;
    margin-right: 50px;
}

.matchInfo {
    width: 450px;
}

.program {
    font-size: 28px;
    color: #4d4d4d;
}

.source {
    margin-top: 10px;
    font-size: 22px;
    color: #808080;
}

.endDes {
    width: 80px;
    text-align: right;
    font-size: 24px;
}
</style>
