<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar></status-bar>

        <wxc-tab-page ref="wxc-tab-page" :tab-styles="tabStyles" :tab-titles="tabTitles" :tabPageHeight="tabPageHeight" need-slider="true" @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">

            <!-- 推荐 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <recommend></recommend>
            </div>

            <!-- 集锦 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <highlights></highlights>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
import { WxcTabPage, Utils } from 'weex-ui'
import statusBar from '../components/statusBar'
import recommend from './recommend'
import highlights from './highlights'

export default {
    components: { statusBar, WxcTabPage, recommend, highlights },
    data () {
        return {
            tabTitles: [
                {
                    title: '推荐'
                },
                {
                    title: '集锦'
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
                textPaddingRight: 10
            }
        }
    },
    created () {
        this.tabPageHeight = Utils.env.getPageHeight()
    },
    methods: {
        wxcTabPageCurrentTabSelected (e) {
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
</style>
