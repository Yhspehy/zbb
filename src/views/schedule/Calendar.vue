<template>
    <div class="scheduleCalendar">
        <header-bar text="赛程日历" rightText="今日赛程" rightTextRouteName="schedule_popular"></header-bar>

        <calendar  
            :header2="true"
            :itemList="monthList"
            @chooseDay="chooseDay"
            @chooseMonth="chooseMonth"
            :cacheData="false">
        </calendar>

        <div v-if="monthList[chooseDayData.rowDate]" class="matchList border-top-1px">
            <div class="matchItem" v-for="item in monthList[chooseDayData.rowDate].match_list" :key="item.match_id">
                <div class="time">{{$moment(item.start_time).format('HH:mm')}}</div>

                <div class="matchInfo">
                    <div v-if="item.program">{{item.program}}</div>
                    <div v-else>{{item.hometeam}} VS {{item.awayteam}}</div>
                    <div class="source">{{item.source}}</div>
                </div>

                <div 
                    :style="{'color' : item.end_description_word === '详情' || item.end_description_word === '回看' ? '#b3b3b3' : '#00bbff'}"
                    class="endDes"
                >{{item.end_description_word}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import Calendar from './_components/Calendar';
export default {
    name: 'schedule_calendar',
    components: { HeaderBar, Calendar },
    data() {
        return {
            monthList: {},
            chooseDayData: {}
        };
    },
    created() {
        this.chooseMonth({
            year: this.$moment().format('YYYY'),
            month: this.$moment().format('M')
        });
    },
    methods: {
        async getMonthList(year, month) {
            let res = await this.$store.dispatch('schedule/GetMonthList', {
                year: year,
                month: month
            });
            this.monthList = res;
        },
        chooseDay(obj) {
            this.chooseDayData = obj;
            this.$C_Alert.open('aaa');
        },
        chooseMonth(obj) {
            const year = obj.year;
            const month = obj.month.match(/(.*?)月?$/)[1];
            this.getMonthList(year, month);
        }
    }
};
</script>

<style scoped lang="scss">
.scheduleCalendar {
    .calendar {
        margin-top: 85px;
        padding-top: 20px;
    }
    .matchList {
        background: $bg-body;
        @include border-top-1px;
        font-size: 28px;
        padding: 25px 36px;
        color: $grey-dark;
        .matchItem {
            display: flex;
            .time {
                width: 75px;
                font-size: 28px;
                color: $grey-dark;
                margin-right: 50px;
                @include flex-center;
            }
            .matchInfo {
                width: 450px;
                .source {
                    margin-top: 10px;
                    font-size: 22px;
                    color: $grey;
                }
            }
            .endDes {
                width: 80px;
                text-align: right;
                font-size: 24px;
                @include flex-center;
            }
        }
    }
}
</style>
