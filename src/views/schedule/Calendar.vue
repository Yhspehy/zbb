<template>
    <div class="scheduleCalendar">
        <header-bar text="赛程日历" rightText="今日赛程" rightTextRouteName="schedule_popular"></header-bar>

        <calendar :header2="true" :itemList="monthList" @chooseDay="chooseDay"></calendar>

        <div v-if="monthList[chooseDayData.rowDate]" class="matchList border-top-1px">
            <div class="matchItem" v-for="item in monthList[chooseDayData.rowDate].match_list" :key="item.match_id">
                <div class="time">{{$moment(item.start_time).format('HH:mm')}}</div>

                <div class="matchInfo">
                    <div v-if="item.program">{{item.program}}</div>
                    <div v-else>{{item.hometeam}} VS {{item.awayteam}}</div>
                    <div class="source">{{item.source}}</div>
                </div>

                <div 
                    :style="{'color' : item.end_description_word === '详情' || item.end_description_word === '回看' ? '#b3b3b3' : '#0088ff'}"
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
    async created() {
        let res = await this.$store.dispatch('schedule/GetMonthList');
        this.monthList = res.data.data;
    },
    methods: {
        chooseDay(obj) {
            this.chooseDayData = obj;
        }
    }
};
</script>

<style scoped lang="scss">
.scheduleCalendar {
    .matchList {
        background: #f3f7f9;
        @include border-top-1px;
        font-size: 28px;
        padding: 25px 36px;
        color: $font-color-deep-grey;
        .matchItem {
            display: flex;
            .time {
                width: 75px;
                font-size: 28px;
                color: $font-color-deep-grey;
                margin-right: 50px;
                @include flex-center;
            }
            .matchInfo {
                width: 450px;
                .source {
                    margin-top: 10px;
                    font-size: 22px;
                    color: $font-color-grey;
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
