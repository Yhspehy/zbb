<template>
    <scroller class="setting-problem">
        <div class="problem" v-for="(item, idx) in contentList" :key="item.title">
            <div class="item" @click="emitClick(item.colClass, idx)">
                <text class="title">{{item.title}}</text>
                <text :class="['icon', expandObj[item.colClass]?'expandIconCss':'']">&#xf078;</text>
            </div>
            <text class="content" v-if="expandObj[item.colClass]">{{item.content}}</text>
        </div>

        <text>{{res}}</text>
    </scroller>
</template>

<script>
const domModule = weex.requireModule('dom');

export default {
    name: 'profile_setting_problem',
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
            ],
            res: null
        };
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        });
    },
    methods: {
        emitClick(key, idx) {
            this.expandObj[key] = !this.expandObj[key];
        }
    }
};
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
    transform: rotate(0);
    transition-property: transform;
    transition-duration: 0.3s;
}

.expandIconCss {
    transform: rotate(180deg);
}

.setting-problem {
    background-color: #f2f2f2;
}

.problem {
    background-color: #ffffff;
}

.item {
    height: 90px;
    color: #4d4d4d;
    font-size: 28px;
    padding-left: 36px;
    padding-right: 36px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 28px;
    color: #4d4d4d;
}

.content {
    padding-top: 40px;
    padding-right: 36px;
    padding-bottom: 20px;
    padding-left: 36px;
    background-color: #f3f7f9;
    font-size: 24px;
    color: #808080;
    line-height: 40px;
    white-space: pre-line;
}
</style>
