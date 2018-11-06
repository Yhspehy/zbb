<template>
    <div class="setting-push">
        <div class="container" v-for="(item, idx) in content" :key="idx">
            <div v-for="(el, elIdx) in item" :key="elIdx" :class="['item', elIdx < item.length - 1?'border-bottom-1px':'']">

                <div v-if="typeof el.text !== 'string'">
                    <text v-for="(t, tIdx) in el.text" :key="tIdx" :class="[tIdx === el.text.length - 1?'tips':'title']">{{t}}</text>
                </div>

                <div v-else>
                    <text class="title">{{el.text}}</text>
                </div>

                <text class="icon" :style="{'color': check[el.key] ? '#07b5ff' : ''}">&#xf00c;</text>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    name: 'profile_setting_push',
    data () {
        return {
            check: {
                importantNews: true,
                followTeamGames: true,
                followTeamNews: false,
                mention: true,
                reply: true,
                noBorderInNight: false
            },
            content: [
                [
                    {
                        text: ['要闻通知', '精选内容或重要新闻通知提醒'],
                        key: 'importantNews'
                    }
                ],
                [
                    {
                        text: '关注球队比赛在开赛/进球/结束时通知',
                        key: 'followTeamGames'
                    },
                    {
                        text: '关注球队的重要新闻',
                        key: 'followTeamNews'
                    }
                ],
                [
                    {
                        text: '@我的',
                        key: 'mention'
                    },
                    {
                        text: '回复我的',
                        key: 'reply'
                    }
                ],
                [
                    {
                        text: ['夜间免打扰', '免打扰模式下24:00-次日8:00都不再接受@和回复提醒'],
                        key: 'noBorderInNight'
                    }
                ]
            ]
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        })
    },
    methods: {
        triggerPush (key) {
            this.check[key] = !this.check[key]
        }
    }
}
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
}

.container {
    margin-top: 20px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
}
.item {
    padding-top: 30px;
    padding-bottom: 30px;
    color: #4d4d4d;
    font-size: 28px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.title {
    font-size: 28px;
    color: #4d4d4d;
}

.tips {
    font-size: 24px;
    color: #808080;
    margin-top: 10px;
    font-weight: 300;
}
</style>
