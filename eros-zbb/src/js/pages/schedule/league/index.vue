<template>
    <div>
        <wxc-tab-page
                ref="wxc-tab-page"
                :title-use-slot="true"
                :tab-styles="tabStyles"
                :tab-titles="tabTitles"
                :tabPageHeight="tabPageHeight"
                need-slider="true"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
        >
            <div v-for="(nav, navIdx) in tabTitles" :slot="'tab-title-' + navIdx" :key="navIdx" style="align-items: center">
                <text :class="[navActivity === navIdx?'navActivity': 'navNormal']">{{nav.title}}</text>
                <div v-if="navActivity === navIdx" class="navActivityLine"></div>
            </div>

            <!-- 比赛 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <schedule v-if="render[0]"></schedule>
            </div>

            <!-- 推荐 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <team-rank v-if="render[1]"></team-rank>
            </div>

            <!-- 关注 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <player-rank v-if="render[2]"></player-rank>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils } from 'weex-ui'
import schedule from './schedule'
import teamRank from './teamRank'
import playerRank from './playerRank'

export default {
    components: { WxcTabPage, schedule, teamRank, playerRank },
    data() {
        return {
            isAndroid: false,
            tabTitles: [
                {
                    title: '赛程'
                },
                {
                    title: '排行'
                },
                {
                    title: '球员榜'
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
                width: 160,
                height: 70,
                leftOffset: 140,
                boxShadow: 'inset 0 -1px rgba(0,0,0,0.4)'
            },
            navActivity: 0,
            render: [0, 0, 0]
        }
    },
    created() {
        this.isAndroid = Utils.env.isAndroid()
        this.tabPageHeight = Utils.env.getPageHeight()
        this.$set(this.render, this.navActivity, 1)
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs['wxc-tab-page'].setPage(this.navActivity)
        })
    },
    methods: {
        wxcTabPageCurrentTabSelected(e) {
            this.navActivity = e.page
            this.$set(this.render, e.page, 1)
        }
    }
}
</script>

<style scoped>
.item-container {
    width: 750px;
    background-color: #f2f3f4;
}

.navActivity {
    color: #0099ff;
    font-size: 34px;
}

.navNormal {
    font-size: 30px;
}

.navActivityLine {
    height: 4px;
    background-color: #0099ff;
    width: 30px;
    top: 5px;
}
</style>
