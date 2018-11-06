<template>
    <div class="setting-join">
        <div class="suggestType" @click="emitClick()">
            <text class="type">{{type}}</text>
            <text :class="['icon', isSelectExist?'expandIconCss':'']">&#xf078;</text>
        </div>

        <div class="suggestion-content">
            <textarea class="content" placeholder="请输入您的建议" v-model="content"></textarea>
            <text class="count">{{wordCount}}/{{wordCountLimit}}</text>
        </div>
        <text class="submit">提交</text>

        <div v-if="isExpand"
             :class="['select', isSelectExist?'expandSelectCss':'']">
            <text  v-for="item in typeList"
                  :key="item"
                  @click="choosenType(item)"
                  class="option">{{ item }}</text>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    name: 'profile_setting_suggestion',
    data () {
        return {
            type: '建议优化',
            isExpand: false,
            isSelectExist: false,
            typeList: ['直播', '等级', '社区', '其他', '优化建议'],
            wordCountLimit: 200,
            wordCount: 0,
            content: ''
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        })
        this.$navigator.setRightItem({
            text: '常见问题',
            fontSize: '24px',
            textColor: '#808080'
        }, () => {
            this.$router.open({
                name: 'profile.problem'
            })
        })
    },
    methods: {
        emitClick () {
            if (this.isExpand) {
                this.isSelectExist = false
                setTimeout(() => {
                    this.isExpand = false
                }, 300)
            } else {
                this.isExpand = true
                this.$nextTick(() => {
                    this.isSelectExist = true
                })
            }
        },
        choosenType (item) {
            this.isSelectExist = false
            this.type = item
            setTimeout(() => {
                this.isExpand = false
            }, 300)
        }
    },
    watch: {
        content (val, old) {
            if (val.length > this.wordCountLimit) {
                this.content = old
                return
            }
            this.wordCount = val.length
        }
    }
}
</script>

<style scoped>
.suggestType {
    height: 92px;
    margin-top: 20px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.type {
    font-size: 28px;
    color: #4d4d4d;
}

.select {
    position: absolute;
    top: 82px;
    padding-left: 36px;
    padding-right: 36px;
    width: 750px;
    background-color: #ffffff;
    opacity: 0;
    transition-property: opacity,top;
    transition-duration: 0.3s;
}

.option {
    color: #808080;
    line-height: 80px;
    height: 80px;
    font-size: 28px;
    border-bottom-style: solid;
    border-bottom-color: #f2f2f2;
    border-bottom-width: 1px;
}

.icon {
    font-family: fontAwesome;
    color: #4d4d4d;
    transform: rotate(0);
    transition-property: transform;
    transition-duration: 0.3s;
}

.expandIconCss {
    transform: rotate(180deg);
}

.expandSelectCss {
    opacity: 1;
    top: 112px;
}

/* 文本输入框 */
.suggestion-content {
    height: 360px;
    background-color: #ffffff;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 36px;
    padding-bottom: 36px;
    position: relative;
}

.content {
    height: 260px;
    font-size: 28px;
}

.count {
    position: absolute;
    bottom: 10px;
    right: 30px;
    color: #b3b3b3;
    font-size: 28px;
}

/* 提交 */
.submit {
    position: absolute;
    bottom: 60px;
    left: 36px;
    width: 678px;
    height: 90px;
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    line-height: 90px;
    background-color: #1d75f2;
    border-radius: 10px;
}
</style>
