<template>
    <div class="setting-push">
        <ul class="mar-top item-fixed">
            <li>
                <div class="item border-bottom">
                    <span>播放问题</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.playStats}"
                        @click="emitClick('playStats')"></i>
                </div>
                <collapse :active="expandObj.playStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>直播问题</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.livingStats}"
                        @click="emitClick('livingStats')"></i>
                </div>
                <collapse :active="expandObj.livingStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>关于等级</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.rankStats}"
                        @click="emitClick('rankStats')"></i>
                </div>
                <collapse :active="expandObj.rankStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>第三方登录以及绑定</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.thirdStats}"
                        @click="emitClick('thirdStats')"></i>
                </div>
                <collapse :active="expandObj.thirdStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>密码找回</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.pwdStats}"
                        @click="emitClick('pwdStats')"></i>
                </div>
                <collapse :active="expandObj.pwdStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>出现闪退</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.suddenStats}"
                        @click="emitClick('suddenStats')"></i>
                </div>
                <collapse :active="expandObj.suddenStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
            <li>
                <div class="item border-bottom">
                    <span>联系我们</span>
                    <i class="fa fa-angle-down"
                        :class="{'rotate': expandObj.contactStats}"
                        @click="emitClick('contactStats')"></i>
                </div>
                <collapse :active="expandObj.contactStats">
                    <div class="content">
                        用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。<br>
                        如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。
                    </div>
                </collapse>
            </li>
        </ul>
    </div>
</template>

<script>
import collapse from '@/Utils/collapse';
export default {
    name: 'profile_setting_problem',
    components: { collapse },
    data() {
        return {
            expandObj: {
                playStats: false,
                livingStats: false,
                rankStats: false,
                thirdStats: false,
                pwdStats: false,
                suddenStats: false,
                contactStats: false
            }
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        emitClick(key) {
            this.expandObj[key] = !this.expandObj[key];
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
        color: $grey-dark;
        font-size: 28px;
        display: flex;
        padding: 0 36px;
        justify-content: space-between;
        align-items: center;
        .fa-angle-down {
            transition: transform 0.5s;
        }
        .rotate {
            transform: rotate(180deg);
        }
    }
    .content {
        padding: 40px 36px 20px 36px;
        background-color: $bg-body;
        font-size: 24px;
        color: $grey;
        line-height: 40px;
    }
    .item-fixed {
        position: relative;
        width: 100%;
        height: 100%;
        background: #ffffff;
        overflow-y: scroll;
    }
}
</style>
