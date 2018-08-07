<template>
    <div class="headerBar" :style="{'padding': padding}">
        <i @click="goBack" class="fas fa-chevron-left"></i>
        <span class="text">{{text}}</span>
        <router-link v-if="rightText" class="rightText" :to="{'name': rightTextRouteName}">{{rightText}}</router-link>
    </div>
</template>

<script>
/**
 *
 * header组件
 *
 * goback的Icon默认是go.back(),如果需要跳转到固定链接则使用goBackRouteName参数
 *
 */

export default {
    name: 'c_HeaderBar',
    props: {
        text: {
            type: String,
            require: true
        },
        goBackRouteName: {
            type: String
        },
        rightText: {
            type: String
        },
        rightTextRouteName: {
            type: String,
            default: 'home'
        },
        padding: {
            type: String,
            default: '3.467vw 4.667vw'
        }
    },
    data() {
        return {};
    },
    created() {
        if (this.rightText) {
            if (this.rightTextRouteName === 'home') {
                console.warn(
                    `please pass a vaule to rightTextRouteName field or it will jump to home. If you just want to jump to home, please igrone this`
                );
            }
        }
    },
    methods: {
        goBack() {
            if (this.goBackRouteName) this.$router.push({ name: this.goBackRouteName });
            this.$router.back();
        }
    }
};
</script>

<style scoped lang="scss">
.headerBar {
    height: 85px;
    font-size: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    .text {
        display: inline-block;
        width: calc(100% - 30px);
        text-align: center;
    }
    .rightText {
        position: absolute;
        font-size: 24px;
        color: #f63146;
        bottom: 26px;
        right: 35px;
    }
}
</style>
