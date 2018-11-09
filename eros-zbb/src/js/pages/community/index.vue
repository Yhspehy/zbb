<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar :bg="isAndroid?'#000000':'#ffffff'"></status-bar>

        <wxc-tab-page
            ref="wxc-tab-page"
            :title-use-slot="true"
            :tab-styles="tabStyles"
            :tab-titles="tabTitles"
            :tabPageHeight="tabPageHeight"
            need-slider="true"
            @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">

            <div v-for="(nav, navIdx) in tabTitles" :slot="'tab-title-' + navIdx" :key="navIdx" style="align-items: center">
                <text :class="[navActivity === navIdx?'navActivity': '']">{{nav.title}}</text>
                <div v-if="navActivity === navIdx" class="navActivityLine"></div>
            </div>

            <!-- 推荐 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <recommend :ref="$refs['wxc-tab-page']"></recommend>
            </div>

            <!-- 圈子 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <circle></circle>
            </div>

            <!-- 圈子 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <activity></activity>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils } from 'weex-ui'
import statusBar from '../components/statusBar'
import recommend from './recommend'
import circle from './circle'
import activity from './activity'

export default {
    components: { statusBar, WxcTabPage, recommend, circle, activity },
    data () {
        return {
            isAndroid: false,
            tabTitles: [
                {
                    title: '推荐'
                },
                {
                    title: '圈子'
                },
                {
                    title: '活动'
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
                height: 100,
                leftOffset: 140,
                fontSize: 30,
                hasActiveBottom: true,
                activeBottomColor: '#0099ff',
                activeBottomHeight: 6,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10,
                boxShadow: 'inset 0 -1px 4px rgba(0,0,0,0.4)'
            },
            navActivity: 0
        }
    },
    created () {
        this.isAndroid = Utils.env.isAndroid()
        this.tabPageHeight = Utils.env.getPageHeight()
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs['wxc-tab-page'].setPage(this.navActivity)
        })
    },
    methods: {
        wxcTabPageCurrentTabSelected (e) {
            this.navActivity = e.page
        },
        wxcPanItemPan (e) {
            if (Utils.env.supportsEBForAndroid()) {
                this.$refs['wxc-tab-page'].bindExp(e.element)
            }
        }
    }
}
</script>

<style scoped>
.item-container {
    width: 750px;
    background-color: #f2f3f4;
}

.border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
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
