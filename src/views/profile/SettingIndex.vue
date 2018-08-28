<template>
    <div class="setting-index">
        <router-link :to="{'name':'profile_setting_myself'}" class="mar-top padding-36 myself item">
            <span>个人信息</span>
            <i class="fa fa-angle-right"></i>
        </router-link>
        <div class="mar-top padding-36 push">
            <router-link :to="{'name':'profile_setting_push'}" class="item border-bottom">
                <span>推送通知</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
            <div class="item border-bottom">
                <span>无图模式下(2G/3G/4G)</span>
                <i class="fa fa-check"></i>
            </div>
            <div class="item border-bottom">
                <span>WIFI下自动播放</span>
                <i class="fa fa-check" style="color:#07b5ff"></i>
            </div>
            <div class="item" @click="confirm(`<p>清除缓存文件</p><p>89.3MB</p>`)">
                <span>清除缓存</span>
                <span>
                    39.9MB&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </div>
        </div>
        <div class="mar-top padding-36 join">
            <router-link :to="{'name':'profile_setting_join'}" class="item border-bottom">
                <span>加入我们</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
            <router-link :to="{'name':'profile_setting_suggestion'}" class="item">
                <span>意见反馈</span>
                <i class="fa fa-angle-right"></i>
            </router-link>
        </div>
        <div class="mar-top padding-36 recommend">
            <div class="item border-bottom" @click="show">
                <span>推荐给好友</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="item border-bottom">
                <span>给我们评分鼓励下吧</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <div class="item border-bottom" @click="confirm(`<p>当前版本:1.0.0</p><p>是否更新至最新版本:2.2.2</p>`)">
                <span>检测新版本</span>
                <i class="fa fa-angle-right"></i>
            </div>
            <router-link :to="{'name':'profile_setting_about'}" class="item">
                <span>关于我们</span>
                <span>
                    1.0.0&nbsp;
                    <i class="fa fa-angle-right"></i>
                </span>
            </router-link>
        </div>
        <div class="mar-top padding-36 quit" @click="confirm('是否确认退出？')">
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
            }
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        show() {
            this.chosen.showStats = true;
        },
        close() {
            this.chosen.showStats = false;
        },
        goBack() {
            if (this.goBackRouteName) this.$router.push({ name: this.goBackRouteName });
            this.$router.back();
        },
        toast() {
            this.$toast('message');
        },
        alert() {
            this.$dialog.alert('alert').then(() => {
                // This will be triggered when user clicks on ok
                console.log('ok');
            });
        },
        alertWithHtml() {
            this.$dialog.alert(`<p>当前版本:1.0.0</p></br><p>是否更新至最新版本:2.2.2</p>`, { html: true }).then(() => {
                // This will be triggered when user clicks on ok
                console.log('ok');
            });
        },
        confirm(content) {
            this.$dialog.confirm(content, { html: true }).then(
                () => {
                    // This will be triggered when user clicks on ok
                    console.log('ok');
                },
                () => {
                    // This will be triggered when user clicks on cancel
                    console.log('cancel');
                }
            );
        }
    }
};
</script>

<style scoped lang="scss">
.setting-index {
    position: relative;
    .mar-top {
        margin-top: 20px;
    }
    .border-bottom {
        @include border-bottom-1px;
    }
    .padding-36 {
        padding: 0 36px;
    }
    .item {
        height: 90px;
        color: $grey-dark;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .myself {
        width: 100%;
        height: 90px;
        background: #ffffff;
    }
    .push {
        width: 100%;
        height: 360px;
        background: #ffffff;
    }
    .join {
        width: 100%;
        height: 180px;
        background: #ffffff;
    }
    .recommend {
        width: 100%;
        height: 360px;
        background: #ffffff;
    }
    .quit {
        width: 100%;
        height: 90px;
        background: #ffffff;
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
