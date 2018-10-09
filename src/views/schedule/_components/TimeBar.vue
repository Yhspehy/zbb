<template>
    <div class="timeBar">
        <router-link :to="{'name': 'schedule_calendar'}" >
            <i class="far fa-calendar-alt"></i>
            <span class="today-text"> 今天 </span>
        </router-link>
        <span>{{$moment(currentDate).format('MM月DD号')}} {{$moment(currentDate).format('dddd')}}</span>
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
    }
};
</script>
<style lang="scss" scoped>
.timeBar {
    padding: 25px 0;
    height: 72px;
    background: $bg-body;
    font-size: 24px;
    color: $grey-dark;
    @include flex-center;
    .fa-calendar-alt {
        font-size: 24px;
        color: #4c4c4c;
    }
    .today-text {
        margin: 0 10px;
    }
}
</style>
