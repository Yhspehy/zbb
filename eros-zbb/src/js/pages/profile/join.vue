<template>
    <div class="setting-join">
        <div class="item" v-for="item in list" :key="item.name">
            <div class="flex-row">
                <text class="icon" v-if="item.name === 'QQ群'">&#xf1d6;</text>
                <text class="icon" v-else>&#xf1d7;</text>
                <div class="flex-row">
                    <text class="name">{{item.name}}：</text>
                    <text class="greyValue">{{item.value}}</text>
                </div>
            </div>
            <text class="copyBtn" @click="onCopy(item.value)">复制</text>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    name: 'profile_setting_join',
    data() {
        return {
            list: [
                {
                    avatar: '&#xf1d6;',
                    name: 'QQ群',
                    value: '123456789'
                },
                {
                    avatar: '&#xf1d7;',
                    name: '微信公众号',
                    value: '43256676'
                }
            ],
            start: -1
        }
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        })
    },
    methods: {
        onCopy(el) {
            this.$tools.copyString(el).then(
                resData => {
                    this.$notice.toast({
                        message: '复制成功'
                    })
                },
                err =>
                    resData => {
                        this.$notice.toast({
                            message: err
                        })
                    }

            )
        }
    }
}
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
    margin-right: 20px;
}

.flex-row {
    flex-direction: row;
    align-items: center;
}

.setting-join {
    background-color: #f3f7f9;
}

.item {
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
}

.name {
    font-size: 28px;
    color: #4d4d4d;
}

.greyValue {
    font-size: 28px;
    color: #808080;
}

.copyBtn {
    font-size: 28px;
    color: #0088ff;
}
</style>
