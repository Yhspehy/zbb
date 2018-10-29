<template>
    <div>
        <!-- Fit IphoneX -->
        <status-bar></status-bar>

        <wxc-tab-page
                ref="wxc-tab-page"
                title-use-slot="true"
                :tab-styles="tabStyles"
                :tab-titles="tabTitles"
                :tabPageHeight="tabPageHeight"
                need-slider="true"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
        >
            <div v-for="(nav, navIdx) in tabTitles" :slot="'tab-title-' + navIdx" :key="navIdx" style="align-items: center">
                <text :class="[navActivity === navIdx?'navActivity': '']">{{nav.title}}</text>
                <div v-if="navActivity === navIdx" class="navActivityLine"></div>
            </div>

            <!-- 比赛 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <match></match>
            </div>

            <!-- 推荐 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <popular></popular>
            </div>

            <!-- 关注 -->
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height - touchBarHeight) + 'px' }">
                <follow></follow>
            </div>

        </wxc-tab-page>
    </div>
</template>

<script>
const dom = weex.requireModule('dom');
import { WxcTabPage, WxcPanItem, Utils } from 'weex-ui';
import statusBar from '../components/statusBar';
import popular from './popular';
import match from './match'
import follow from './follow'

export default {
    components: { statusBar, WxcTabPage, popular, match, follow },
    data() {
        return {
            tabTitles: [
                {
                    title: '赛事'
                },
                {
                    title: '热门'
                },
                {
                    title: '关注'
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
                fontSize: 30
            },
            navActivity: 1
        };
    },
    created() {
        this.tabPageHeight = Utils.env.getPageHeight();
    },
    mounted () {
        this.$nextTick(() => {
            this.$refs['wxc-tab-page'].setPage(this.navActivity)
        })
    },
    methods: {
        wxcTabPageCurrentTabSelected(e) {
            this.navActivity = e.page
        },
        wxcPanItemPan(e) {
            if (Utils.env.supportsEBForAndroid()) {
                this.$refs['wxc-tab-page'].bindExp(e.element);
            }
        }
    }
};
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
