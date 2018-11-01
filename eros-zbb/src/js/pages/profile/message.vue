<template>
    <div class="setting-index">
        <div class="setting-container item" @click="jump('myself')">
            <text class="leftWord">个人信息</text>
            <text class="icon">&#xf054;</text>
        </div>

        <div class="setting-container">
            <div class="item" @click="jump('push')">
                <text class="leftWord">推送通知</text>
                <text class="icon">&#xf054;</text>
            </div>
            <div class="item">
                <text class="leftWord">无图模式下(2G/3G/4G)</text>
                <text class="icon">&#xf00c;</text>
            </div>
            <div class="item">
                <text class="leftWord">WIFI下自动播放</text>
                <text class="icon">&#xf00c;</text>
            </div>
            <div class="item" @click="clearCache">
                <text class="leftWord">清除缓存</text>
                <div class="flex-row-center">
                    <text class="leftWord">39.9MB&nbsp;</text>
                    <text class="icon">&#xf054;</text>
                </div>
            </div>
        </div>

        <div class="setting-container">
            <div class="item" @click="jump('join')">
                <text class="leftWord">加入我们</text>
                <text class="icon">&#xf054;</text>
            </div>
            <div class="item" @click="jump('suggestion')">
                <text class="leftWord">意见反馈</text>
                <text class="icon">&#xf054;</text>
            </div>
        </div>

        <div class="setting-container">
            <div class="item" @click="showMask">
                <text class="leftWord">推荐给好友</text>
                <text class="icon">&#xf054;</text>
            </div>
            <div class="item">
                <text class="leftWord">给我们评分鼓励下吧</text>
                <text class="icon">&#xf054;</text>
            </div>
            <div class="item" @click="update">
                <text class="leftWord">检测新版本</text>
                <text class="icon">&#xf054;</text>
            </div>
            <div class="item" @click="jump('about')">
                <text class="leftWord">关于我们</text>
                <text>
                    <text class="leftWord">1.0.0&nbsp;</text>
                    <text class="icon">&#xf054;</text>
                </text>
            </div>
        </div>

        <text class="setting-container quit" @click="logout">退出当前账号</text>

        <!-- 弹窗，分享 -->
        <bmmask class="mask" animation="scale" position="center" :duration="400" ref="bmmask" :disableMaskEvent="true">
            <bmpop class="modal-top">
                <div class="share" ref='share'>
                    <div style="align-items: center">
                        <text class="shareHeader">分享到</text>
                    </div>
                    <div class="shareImgList">
                        <div class="shareImgDiv">
                            <image class="img" src="http://temp.im/60x60"></image>
                            <text class="shareImgText">微信</text>
                        </div>
                        <div class="shareImgDiv">
                            <image class="img" src="http://temp.im/60x60"></image>
                            <text class="shareImgText">朋友圈</text>
                        </div>
                        <div class="shareImgDiv">
                            <image class="img" src="http://temp.im/60x60"></image>
                            <text class="shareImgText">QQ</text>
                        </div>
                        <div class="shareImgDiv">
                            <image class="img" src="http://temp.im/60x60"></image>
                            <text class="shareImgText">微博</text>
                        </div>
                    </div>
                    <text class="closeMask" @click="closeMask">取消</text>
                </div>
            </bmpop>
        </bmmask>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom');

export default {
    data() {
        return {
        };
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        });
    },
    methods: {
        jump(name) {
            this.$router.open({
                name: `profile.${name}`
            })
        },
        clearCache() {
            this.$notice.confirm({
                title: '清除缓存',
                message: '是否清除缓存39.9MB',
                okTitle: '确认',
                cancelTitle: '取消',
                okCallback() {
                    console.log('yes');
                },
                cancelCallback() {
                    console.log('no');
                }
            });
        },
        update() {
            this.$notice.confirm({
                title: '更新',
                message: '当前版本:1.0.0,\n 是否更新至最新版本:2.2.2',
                okTitle: '确认',
                cancelTitle: '取消',
                okCallback() {
                    console.log('yes');
                },
                cancelCallback() {
                    console.log('no');
                }
            });
        },
        logout() {
            this.$notice.confirm({
                title: '退出',
                message: '是否退出当前账号',
                okTitle: '确认',
                cancelTitle: '取消',
                okCallback() {
                    console.log('yes');
                },
                cancelCallback() {
                    console.log('no');
                }
            });
        },
        showMask() {
            this.$refs['bmmask'].show();
        },
        closeMask() {
            this.$refs['bmmask'].hide();
        }
    }
};
</script>

<style scoped>
/* comment */
.flex-row-center {
    flex-direction: row;
    align-items: center;
}
/* comment end */

.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
    margin-right: 20px;
}

.setting-container {
    margin-top: 20px;
    background-color: #ffffff;
}
.item {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 36px;
    padding-right: 20px;
    height: 90px;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;
}

.leftWord {
    font-size: 28px;
    color: #4d4d4d;
}

.quit {
    font-size: 28px;
    color: #f5303d;
    text-align: center;
    line-height: 90px;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}


.share {
    width: 680px;
    margin-left: 35px;
    background-color: #eff0f3;
    border-radius: 10px;
}

.shareHeader {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 40px;
    margin-right: 40px;
}

.shareImgList {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.shareImgDiv {
    align-items: center;
}

.img {
    width: 108px;
    height: 108px;
}

.shareImgText {
    font-size: 28px;
    color: #b3b3b3;
    margin-top: 10px;
    margin-bottom: 10px;
}

.closeMask {
    width: 680px;
    height: 90px;
    background-color: #ffffff;
    color: #808080;
    line-height: 90px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
