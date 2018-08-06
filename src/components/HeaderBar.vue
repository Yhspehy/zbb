<template>
    <div class="headerBar">
        <i @click="$router.back()" class="fas fa-chevron-left"></i>
        <span class="text">{{text}}</span>
        <router-link v-if="rightText" class="rightText" :to="{'name': rightTextRouteName}">{{rightText}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'c_HeaderBar',
    props: {
        text: {
            type: String,
            require: true
        },
        rightText: {
            type: String
        },
        rightTextRouteName: {
            type: String,
            default: 'home'
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
    }
};
</script>

<style scoped lang="scss">
.headerBar {
    height: 85px;
    font-size: 30px;
    padding: 26px 35px;
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
