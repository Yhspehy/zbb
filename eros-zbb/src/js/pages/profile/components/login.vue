<template>
    <div class="loginContainer">
        <div class="loginHeader">
            <text class="icon back">&#xf053;</text>
            <div style="flex-direction: row">
                <text class="icon">&#xf013;</text>
                <text class="icon">&#xf0e0;</text>
            </div>
        </div>

        <div v-if="!isLogin" class="loginContent flex-dire-row">
            <image class="avatar" src="http://temp.im/60x60"></image>
            <div class="loginInfos">
                <div class="flex-dire-row">
                    <text class="loginBtn">登录/</text>
                    <text class="registerBtn">注册</text>
                </div>
                <div>
                    <text class="loginRe">登录可享受更多服务</text>
                </div>
            </div>
        </div>

        <div class="loginFooter flex-dire-row">
            <div class="footerItem border-right-1px">
                <text class="footerIcon">&#xf02d;</text>
                <div>
                    <text class="footerText">每日任务</text>
                    <div class="flex-dire-row">
                        <text class="footerText">做任务送</text>
                        <text class="highlight">海量G币</text>
                    </div>
                </div>
            </div>
            <div class="footerItem">
                <text class="footerIcon">&#xf044;</text>
                <div>
                    <text class="footerText">每日签到</text>
                    <div class="flex-dire-row">
                        <text class="footerText">签到</text>
                        <text class="highlight">+100G币</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom');

export default {
    data() {
        return {
            isLogin: false
        };
    },
    created() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        });
    }
};
</script>

<style scoped>
/* 登陆框 */

.loginContainer {
    height: 416px;
    background-color: #000000;
    opacity: 0.8;
}
.loginHeader {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    padding-top: 30px;
    padding-bottom: 40px;
}
.icon {
    font-family: fontAwesome;
    color: #ffffff;
    margin-right: 20px;
}

/* 登陆注册 */
.flex-dire-row {
    flex-direction: row;
}
.loginContent {
    align-items: center;
    margin-left: 36px;
}
.loginInfos {
    margin-left: 30px;
    height: 120px;
    justify-content: space-around;
}
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 60px;
}
.loginBtn,
.registerBtn {
    font-size: 36px;
    color: #fff;
}
.loginRe {
    font-size: 28px;
    color: #fff;
}


/* 底部 */
.loginFooter {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 750px;
    background-color: rgba(255, 255, 255, 0.1);
    padding-top: 10px;
    padding-bottom: 10px;
}
.footerItem {
    width: 375px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.footerIcon {
    font-family: fontAwesome;
    color: #ffffff;
    font-size: 48px;
    margin-right: 20px;
}
.footerText {
    font-size: 28px;
    color: #ffffff;
}
.highlight {
    font-size: 28px;
    color: #ffbb00;
}
.border-right-1px {
    border-right-style: solid;
    border-right-color: #fff;
    border-right-width: 1px;
}
</style>
