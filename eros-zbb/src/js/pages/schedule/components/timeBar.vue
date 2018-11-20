<template>
    <div class="timeBar" @click="goCalendar">
        <text v-if="!isToday" class="today-text"> 今天 </text>
        <text class="date">{{date}} {{week}}</text>
    </div>
</template>
<script>
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
            return this.$moment(this.currentDate).locale('zh-cn').format('MM月DD号')
        },
        week() {
            return this.$moment(this.currentDate).locale('zh-cn').format('dddd')
        },
        isToday() {
            return this.$moment(this.currentDate).format('YYY-MM-DD') === this.$moment().format('YYY-MM-DD')
        }
    },
    methods: {
        goCalendar() {
            this.$router.open({
                name: 'schedule.calendar'
            })
        }
    }
}
</script>
<style scoped>
.timeBar {
    padding-top: 25px;
    padding-bottom: 25px;
    background-color: #f3f7f9;
    font-size: 24px;
    color: #4d4d4d;
    align-items: center;
    flex-direction: row;
    justify-content: center;
}
.fa-calendar-alt {
    font-size: 24px;
    color: #4c4c4c;
}

.today-text {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 24px;
    color: #4d4d4d;
}

.date {
    font-size: 24px;
    color: #4d4d4d;
}
</style>
