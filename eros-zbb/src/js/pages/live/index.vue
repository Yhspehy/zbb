<template>
    <div class="live">
        <!-- Fit IphoneX -->
        <status-bar bg="#000000"></status-bar>

        <div class="videoContainer">
            <!-- <image class="video" src="https://fakeimg.pl/750x422/"></image> -->
            <div class="video"></div>
            <text class="icon back" @click="back">&#xf053;</text>
        </div>

        <wxc-tab-page
                ref="wxc-tab-page"
                :tab-styles="tabStyles"
                :tab-titles="tabTitles"
                :duration="0"
                :tabPageHeight="tabPageHeight"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
        >

            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <live-room v-if="render[0]"></live-room>
            </div>

            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <chat-room v-if="render[1]"></chat-room>
            </div>

            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <news v-if="render[2]"></news>
            </div>

            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <stats v-if="render[3]"></stats>
            </div>

            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <quiz v-if="render[4]"></quiz>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils } from 'weex-ui'

import statusBar from '../components/statusBar'
import liveRoom from './liveRoom'
import chatRoom from './chatRoom'
import news from './news'
import stats from './stats'
import quiz from './quiz'

const domModule = weex.requireModule('dom')

export default {
    components: {
        statusBar,
        WxcTabPage,
        liveRoom,
        chatRoom,
        news,
        stats,
        quiz
    },
    data () {
        return {
            resData: null,
            tabTitles: [
                {
                    title: '直播室'
                },
                {
                    title: '聊天室'
                },
                {
                    title: '资讯'
                },
                {
                    title: '数据'
                },
                {
                    title: '竞猜'
                }
            ],
            tabPageHeight: 1334,
            touchBarHeight: weex.config.eros.touchBarHeight,
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3D3D3D',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 150,
                height: 100,
                fontSize: 30,
                hasActiveBottom: true,
                activeBottomColor: '#FFC900',
                activeBottomHeight: 6,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10
            },
            navActivity: 1,
            render: [0, 0, 0, 0, 0]
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    created () {
        this.$router.getParams().then(resData => {
            this.resData = resData
        })
        this.tabPageHeight = Utils.env.getPageHeight() - 422
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs['wxc-tab-page'].setPage(this.navActivity)
            this.$set(this.render, this.navActivity, 1)
        })
    },
    methods: {
        back () {
            this.$router.back()
        },
        wxcTabPageCurrentTabSelected (e) {
            this.navActivity = e.page
            this.$set(this.render, e.page, 1)
        }
    }
}
</script>

<style scoped>

.icon {
    font-family: fontAwesome;
    font-size: 32px;
    color: #ffffff;
}

.video {
    width: 750px;
    height: 422px;
    background-color: #000000;
}

.back {
    position: absolute;
    top: 10px;
    left: 20px;
}

.item-container {
    width: 750px;
    background-color: #f2f3f4;
}

.navActivity {
    color: #0099ff;
    font-size: 36px;
}

.navActivityLine {
    height: 4px;
    background-color: #0099ff;
    width: 40px;
    top: 14px;
}
</style>
