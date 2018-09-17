<template>
    <div class="setting-index clearfix">
        <router-link :to="{'name':'profile_setting_myself'}" class="setting-container item">
            <span>个人信息</span>
            <i class="fa fa-angle-right"></i>
        </router-link>


        <div class="setting-container">
            <router-link :to="{'name':'profile_setting_push'}" class="item border-bottom-1px">
                <span>推送通知</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
            <div class="item border-bottom-1px">
                <span>无图模式下(2G/3G/4G)</span>
                <i  class="fa fa-check"
                    @click="triggerSetting('noImgMode')"
                    :style="{'color': check.noImgMode ? '#07b5ff' : ''}"></i>
            </div>
            <div class="item border-bottom-1px">
                <span>WIFI下自动播放</span>
                <i  class="fa fa-check"
                    @click="triggerSetting('autoPlayInWifi')"
                    :style="{'color': check.autoPlayInWifi ? '#07b5ff' : ''}"></i>
            </div>
            <div class="item" @click="confirm(`<p>清除缓存文件</p><p>89.3MB</p>`)">
                <span>清除缓存</span>
                <span>
                    <span>39.9MB&nbsp;</span>
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
        </div>


        <div class="setting-container">
            <router-link :to="{'name':'profile_setting_join'}" class="item border-bottom-1px">
                <span>加入我们</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
            <router-link :to="{'name':'profile_setting_suggestion'}" class="item">
                <span>意见反馈</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
        </div>


        <div class="setting-container">
            <div class="item border-bottom-1px" @click="show">
                <span>推荐给好友</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="item border-bottom-1px">
                <span>给我们评分鼓励下吧</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="item border-bottom-1px" @click="confirm(`<p>当前版本:1.0.0</p><p>是否更新至最新版本:2.2.2</p>`)">
                <span>检测新版本</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <router-link :to="{'name':'profile_setting_about'}" class="item">
                <span>关于我们</span>
                <span>
                    <span>1.0.0&nbsp;</span>
                    <i class="fa fa-angle-right"></i>
                </span>
            </router-link>
        </div>


        <div class="setting-container quit" @click="confirm('是否确认退出？')">
            退出当前账号
        </div>


        <transition name="translateY-20">
            <show-dialog
                v-if="chosen.showStats"
                @close="close">
            </show-dialog>
        </transition>
    </div>
</template>

<script>
import showDialog from './_components/ShowDialog';
export default {
    name: 'profile_setting_index',
    components: { showDialog },
    data() {
        return {
            chosen: {
                showStats: false
            },
            check: {
                noImgMode: false,
                autoPlayInWifi: true
            }
        };
    },
    methods: {
        triggerSetting(key) {
            this.check[key] = !this.check[key];
        },
        show() {
            this.chosen.showStats = true;
        },
        close() {
            this.chosen.showStats = false;
        },
        confirm(content) {
            this.$dialog.confirm(content, { html: true });
        }
    }
};
</script>

<style scoped lang="scss">
.setting-index {
    .setting-container {
        background: #fff;
        margin-top: 20px;
        padding: 0 36px;
    }
    .border-bottom-1px {
        @include border-bottom-1px;
    }
    .item {
        height: 90px;
        color: $grey-dark;
        font-size: 28px;
        @include flex-center-between;
    }
    .quit {
        font-size: 28px;
        color: $red;
        text-align: center;
        line-height: 90px;
    }

    .translateY-20-enter-active,
    .translateY-20-leave-active {
        transition: all 0.5s;
    }
    .translateY-20-enter,
    .translateY-20-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>
