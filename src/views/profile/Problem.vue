<template>
    <div class="setting-push">
        <ul class="mar-top item-fixed">
            <li v-for="item in contentList" :key="item.title">
                <div class="item border-bottom" @click="emitClick(item.colClass)">
                    <span>{{item.title}}</span>
                    <i class="fa fa-angle-down" :class="{'rotate': expandObj[item.colClass]}"></i>
                </div>
                <collapse :active="expandObj[item.colClass]">
                    <div class="content">{{item.content}}</div>
                </collapse>
            </li>

            <!-- collapse 最后一条会出现视觉不协调的感觉 -->
            <!-- <li>
                <div class="item border-bottom">
                    <span>nothing</span>
                </div>
            </li> -->
        </ul>
    </div>
</template>

<script>
import collapse from '@/utils/collapse';
import { SafariSlideLeftTwiceTransitionAddLis, SafariSlideLeftTwiceTransitionRemoveLis } from '@/utils/index';

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
            },
            contentList: [
                {
                    title: '播放问题',
                    colClass: 'playStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '直播问题',
                    colClass: 'livingStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '关于等级',
                    colClass: 'rankStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '第三方登陆以及绑定',
                    colClass: 'thirdStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '密码找回',
                    colClass: 'pwdStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '出现闪退',
                    colClass: 'suddenStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                },
                {
                    title: '联系我们',
                    colClass: 'contactStats',
                    content:
                        '用户首先需要确认目前使用的是否在WIFI环境下，并且在个人中心系统设置中确认目前是不是最新版本。\n如果人就发现播放出现卡顿或者播放不了视频，请点击本页右上角的意见反馈，输入您观看的哪场比赛/哪个视频和对应情况，您的问题会直接反馈给我们。'
                }
            ]
        };
    },
    mounted() {
        SafariSlideLeftTwiceTransitionAddLis(this);
    },
    beforeDestroy() {
        SafariSlideLeftTwiceTransitionRemoveLis();
    },
    methods: {
        emitClick(key) {
            this.expandObj[key] = !this.expandObj[key];
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
        white-space: pre-line;
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
