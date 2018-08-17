<template>
    <div class="setting-push">
        <div class="header">
            <i @click="goBack" class="fa fa-angle-left"></i>
            <span>常见问题</span>
        </div>
        <ul class="mar-top item-fixed">
            <li>
                <div class="item border-bottom" @click="play_state = !play_state">
                    <span>播放问题</span>
                    <transition name="rotate">
                        <i class="fa fa-angle-down"></i>
                    </transition>
                </div>
                <transition name="bounce">
                    <div class="fn-collapse" v-if="play_state">
                        <div class="content">
                            用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                            如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                        </div>
                    </div>
                </transition>
            </li>
            <li>
                <div class="item border-bottom" @click="online_state = !online_state">
                    <span>直播问题</span>
                    <i class="fa fa-angle-down"></i>
                </div>
                <div class="fn-collapse" v-if="online_state">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </div>
            </li>
            <li>
                <div class="item border-bottom" @click="rank_state = !rank_state">
                    <span>关于等级</span>
                    <i class="fa fa-angle-down"></i>
                </div>
                <div class="fn-collapse" v-if="rank_state">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </div>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>第三方登录以及绑定</span>
                    <i class="fa fa-angle-down"></i>
                </div>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>密码找回</span>
                    <i class="fa fa-angle-down"></i>
                </div>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>出现闪退</span>
                    <i class="fa fa-angle-down"></i>
                </div>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>如何联系我们</span>
                    <i class="fa fa-angle-down"></i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'setting_push',
    data() {
        return {
            play_state: false,
            online_state: false,
            rank_state: false
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        isShow(state) {
            console.log(state);
        },
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
    .item {
        height: 90px;
        color: #4d4d4d;
        font-size: 28px;
        display: flex;
        padding: 0 36px;
        justify-content: space-between;
        align-items: center;
    }
    .content {
        padding: 40px 36px 20px 36px;
        background-color: #f3f7f9;
        font-size: 24px;
        color: #808080;
        line-height: 40px;
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
    .item-fixed {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 90px;
        background: #ffffff;
        overflow-y: scroll;
    }
    /*----------  fn-collapse  ----------*/
    // .fn-collapse
    //     height: auto;
    //     overflow: hidden;
    //     transition-duration: 0.5s;
    //     transition-property: height, visibility;
    //

    .fn-collapse-hide {
        height: 0;
        display: none;
    }

    .fn-collapse-prev-show {
        i {
            transform: rotate(180deg);
        }
    }
    .bounce-enter-active {
        transition: all 0.5s;
    }
    .bounce-leave-active {
        transition: all 0.5s;
    }
    .bounce-enter,
    .bounce-leave-to {
        height: 0;
        opacity: 0;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
}
</style>
