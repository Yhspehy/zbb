<template>
    <div class="img-report d-flex flex-column justify-content-between">
        <p class="title">{{picData.title}}</p>
        <div class="imgs d-flex justify-content-between">
            <img v-for="(val, key) in picData.imgs" :key="key" :src="val">
        </div>
        <p class="time d-flex justify-content-between align-items-center">
            <span class="report-time">{{picData.date}} {{picData.time}}</span>
            <span class="report-time">
                <img :src="picData.icon" alt="">
                <span>{{picData.author}}</span>报道
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'group_pic',
    props: {
        picData: {
            type: Object,
            require: true
        }
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.img-report {
    width: 100%;
    height: 255px;
    padding: 20px 10px 20px 10px;
    .title {
        font-size: 28px;
        color: $grey-dark;
    }
    .imgs {
        width: 100%;
        height: 144px;
        img {
            width: 212px;
            height: 144px;
        }
    }
    .time {
        font-size: 24px;
        .report-time {
            color: $grey;
        }
    }
}
</style>
