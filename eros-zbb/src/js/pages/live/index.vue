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
                :tabPageHeight="tabPageHeight"
                :clickAnimation="false"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
        >

            <!-- 回顾 -->
            <div v-if="resData.status === '已结束'" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <review v-if="render[0]"></review>
            </div>

            <!-- 直播室/赛况 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <live-room v-if="(resData.status !== '已结束' && render[0]) || (resData.status === '已结束' && render[1])"></live-room>
            </div>

            <!-- 聊天室 -->
            <div v-if="resData.status !== '已结束'" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <chat-room v-if="render[1]"></chat-room>
            </div>

            <!-- 资讯 -->
            <div v-if="resData.status !== '已结束'" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <news v-if="render[2]"></news>
            </div>

            <!-- 热议 -->
            <div v-if="resData.status === '已结束'" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <hot-comments v-if="render[2]"></hot-comments>
            </div>

            <!-- 数据 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <stats v-if="render[3]"></stats>
            </div>

            <!-- 竞猜 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <quiz v-if="render[4]"></quiz>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils } from 'weex-ui'

import statusBar from '../components/statusBar'
import review from './review'
import liveRoom from './liveRoom'
import chatRoom from './chatRoom'
import news from './news'
import hotComments from './hotComments'
import stats from './stats'
import quiz from './quiz'

const domModule = weex.requireModule('dom')

export default {
    components: {
        statusBar,
        WxcTabPage,
        review,
        liveRoom,
        chatRoom,
        news,
        hotComments,
        stats,
        quiz
    },
    data () {
        return {
            resData: null,
            tabTitles: [
            ],
            firstNavType: [
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
            secondNavType: [
                {
                    title: '回顾'
                },
                {
                    title: '赛况'
                },
                {
                    title: '热议'
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
                textPaddingRight: 10,
                boxShadow: 'inset 0 -1px 1px rgba(0,0,0,0.4)'
            },
            navActivity: 0,
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
            this.tabTitles = resData.status === '已结束' ? this.secondNavType : this.firstNavType
        })
        // 全部的屏幕减去video的高度和状态栏的高度
        this.tabPageHeight = Utils.env.getScreenHeight() - 422 - weex.config.eros.statusBarHeight
        this.$set(this.render, this.navActivity, 1)
        // this.$storage.setSync('liveTab', this.tabTitles[this.navActivity].title)
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs['wxc-tab-page'].setPage(this.navActivity)
        })
    },
    methods: {
        back () {
            if (Utils.env.isIOS()) {
                this.$navigator.setNavigationInfo({
                    statusBarStyle: 'Default'
                })
            }
            this.$router.back()
        },
        wxcTabPageCurrentTabSelected (e) {
            this.navActivity = e.page
            this.$set(this.render, e.page, 1)
            // this.$storage.setSync('liveTab', this.tabTitles[this.navActivity].title)
            this.$event.emit('liveTabChange', this.tabTitles[this.navActivity].title)
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
    top: 0;
    left: 0;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
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
