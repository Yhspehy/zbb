<template>
    <div class="timeBar">
        <div v-if="isToday">
            <text class="today-text"> 今天 </text>
        </div>
        <text class="date">{{date}} {{week}}</text>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'schedule_timeBar',
    props: {
        currentDate: {
            type: String,
            require: true
        }
    },
    computed: {
        date() {
            return moment(this.currentDate).locale('zh-cn').format('MM月DD号')
        },
        week() {
            return moment(this.currentDate).locale('zh-cn').format('dddd')
        },
        isToday() {
            return moment(this.currentDate).format('YYY-MM-DD') === moment().format('YYY-MM-DD')
        }
    }
};
</script>
<style scoped>
.timeBar {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #f3f7f9;
    font-size: 24px;
    color: #4d4d4d;
    align-items: center;
}
.fa-calendar-alt {
    font-size: 24px;
    color: #4c4c4c;
}

.today-text {
    margin-right: 10px;
    margin-left: 10px;
}

.date {
    font-size: 24px;
    color: #4d4d4d;
}
</style>
