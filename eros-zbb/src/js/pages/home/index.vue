<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar :bg="isAndroid?'#000000':'#ffffff'"></status-bar>

        <wxc-tab-page
            ref="wxc-tab-page"
            :rightIconStyle="rightIconStyle"
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

            <wxc-icon slot="rightIcon" name="add" @wxcIconClicked="iconClicked"></wxc-icon>

            <!-- 推荐 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <recommend v-if="render[0]" :ref="$refs['wxc-tab-page']"></recommend>
            </div>

            <!-- 集锦 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <highlights v-if="render[1]" :ref="$refs['wxc-tab-page']"></highlights>
            </div>

            <!-- 集锦 -->
            <div v-for="item in (tabTitles.length - 2)" :key="item" class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <league v-if="render[item + 1]" :ref="$refs['wxc-tab-page']"></league>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils, WxcIcon } from 'weex-ui'
import statusBar from '../components/statusBar'
import recommend from './recommend'
import highlights from './highlights'
import league from './league'

export default {
    components: {
        statusBar,
        WxcTabPage,
        WxcIcon,
        recommend,
        highlights,
        league
    },
    data() {
        return {
            isAndroid: false,
            tabTitles: [
                {
                    title: '推荐'
                },
                {
                    title: '集锦'
                },
                {
                    title: 'NBA'
                },
                {
                    title: 'CBA'
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
                fontSize: 30,
                hasActiveBottom: true,
                activeBottomColor: '#FFC900',
                activeBottomHeight: 6,
                activeBottomWidth: 120,
                textPaddingLeft: 10,
                textPaddingRight: 10,
                hasRightIcon: true,
                rightOffset: 70,
                boxShadow: 'inset 0 -1px 1px rgba(0,0,0,0.4)'
            },
            rightIconStyle: {
                top: (weex.config.eros.statusBarHeight + 20) + 'px'
            },
            navActivity: 0,
            render: []
        }
    },
    created() {
        this.render = new Array(this.tabTitles.length).fill(0)
        this.tabPageHeight = Utils.env.getPageHeight()
        if (Utils.env.isAndroid()) {
            this.isAndroid = true
            this.$navigator.setNavigationInfo({
                statusBarStyle: 'LightContent'
            })
        }
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
        },
        iconClicked() {
            this.$router.open({
                name: 'home.addChannel'
            })
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
