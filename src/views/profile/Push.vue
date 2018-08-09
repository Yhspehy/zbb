<template>
    <div class="setting-push">
        <div class="header">
            <i class="fa fa-angle-left"></i>
            <span>设置</span>
        </div>
        <div class="mar-top padding-36 item-127 d-flex justify-content-between align-items-center">
            <div>
                <p>要闻通知</p>
                <span class="tips">精选内容或重要新闻通知提醒</span>
            </div>
            <i class="fa fa-check" style="color:#07b5ff"></i>
        </div>
        <div class="mar-top padding-36 item-180">
            <div class="item border-bottom">
                <span>关注球队比赛在开赛/进球/结束时通知</span>
                <i class="fa fa-check" style="color:#07b5ff"></i>
            </div>
            <div class="item">
                <span>关注球队的重要新闻</span>
                <i class="fa fa-check" style="color:#07b5ff"></i>
            </div>
        </div>
        <div class="mar-top padding-36 item-180">
            <div class="item border-bottom">
                <span>@我的</span>
                <i class="fa fa-check" style="color:#07b5ff"></i>
            </div>
            <div class="item">
                <span>@我的</span>
                <i class="fa fa-check" style="color:#07b5ff"></i>
            </div>
        </div>
        <div class="mar-top padding-36 item-127 d-flex justify-content-between align-items-center">
            <div>
                <p>要闻通知</p>
                <span class="tips">精选内容或重要新闻通知提醒</span>
            </div>
            <i class="fa fa-check"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'setting_push',
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    }
};
</script>

<style scoped lang="scss">
.setting-push {
    position: relative;
    .mar-top {
        margin-top: 20px;
    }
    .border-bottom {
        @include border-bottom-1px;
    }
    .padding-36 {
        padding: 0 36px;
    }
    .item {
        height: 90px;
        color: #4d4d4d;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header {
        width: 100%;
        height: 90px;
        padding: 0 35px;
        background: #ffffff;
        text-align: center;
        line-height: 90px;
        .fa-angle-left {
            position: absolute;
            left: 35px;
            line-height: 90px;
            font-size: 50px;
            color: #808080;
        }
        span {
            font-size: 30px;
            color: #4d4d4d;
        }
    }
    .item-127 {
        position: relative;
        width: 100%;
        height: 127px;
        background: #ffffff;
        .tips {
            font-size: 24px;
            color: #808080;
        }
    }
    .item-180 {
        width: 100%;
        height: 180px;
        background: #ffffff;
    }
}
</style>
