<template>
    <div class="headerBar" :style="{'padding': padding}">
        <i @click="goBack" class="fas fa-chevron-left"></i>
        <span class="text">{{text}}</span>
        <router-link
            v-if="rightText"
            :style="{'color': rightTextColor}"
            class="rightText"
            :to="{'name': rightTextRouteName}">
            {{rightText}}
        </router-link>

        <span v-if="share" class="rightText share">
            <i class="fas fa-share-square"></i>
        </span>
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
            default: ''
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
        },
        rightTextColor: {
            type: String,
            default: '#f5303d'
        },
        // 是否可以分享
        share: {
            type: Boolean,
            default: false
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
    mounted() {
        this.$el.addEventListener('touchmove', this.scroll);
    },
    beforeDestroy() {
        this.$el.removeEventListener('touchmove', this.scroll);
    },
    methods: {
        goBack() {
            if (this.goBackRouteName) {
                this.$router.push({ name: this.goBackRouteName });
                return false;
            }
            this.$router.back();
        },
        scroll(e) {
            e.preventDefault();
        }
    }
};
</script>

<style scoped lang="scss">
.headerBar {
    font-size: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    border-bottom: 1px solid $bg-grey;
    .text {
        display: inline-block;
        width: calc(100% - 30px);
        text-align: center;
    }
    .rightText {
        position: absolute;
        font-size: 24px;
        bottom: 26px;
        right: 35px;
    }

    .share {
        color: $grey;
        font-weight: lighter;
        font-size: 30px;
    }
}
</style>
