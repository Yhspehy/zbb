<template>
    <div class="setting-push">
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
    name: 'profile_setting_push',
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        goBack() {
            if (this.goBackRouteName) this.$router.push({ name: this.goBackRouteName });
            this.$router.back();
        }
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
        color: $grey-dark;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item-127 {
        position: relative;
        width: 100%;
        height: 127px;
        background: #ffffff;
        .tips {
            font-size: 24px;
            color: $grey;
        }
    }
    .item-180 {
        width: 100%;
        height: 180px;
        background: #ffffff;
    }
}
</style>
