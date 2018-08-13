<template>
    <div class="setting-join">
        <div class="header">
            <i @click="goBack" class="fa fa-angle-left"></i>
            <span>意见反馈</span>
            <router-link :to="{'name':'profile_setting_problem'}"><span class="problem">常见问题</span></router-link>
        </div>
        <div class="mar-top item-90">
            <div class="item padding-36" @click="select_state = !select_state">
                <span>优化建议</span>
                <i class="fa fa-angle-down"></i>
            </div>
            <ul class="select padding-36" id="select_ul" v-if="select_state">
                <li class="option">直播</li>
                <li class="option">等级</li>
                <li class="option">社区</li>
                <li class="option">其他</li>
                <li class="option">优化建议</li>
            </ul>
        </div>
        <div class="mar-top suggestion-content">
            <textarea class="textarea" id="content" @keyup="checkLen()" cols="30" rows="10"></textarea>
            <div class="word-count" id="word_count"><span id="count">0</span>/200</div>
        </div>
        <div class="submit">提交</div>
    </div>
</template>

<script>
export default {
    name: 'setting_join',
    data() {
        return {
            select_state: false
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
    },
    methods: {
        checkLen() {
            let obj = document.getElementById('content');
            var maxChars = 200; //最多字符数
            if (obj.value.length > maxChars) {
                document.getElementById('word_count').style.color = '#f5303d';
                //obj.value = obj.value.substring(0,maxChars);
            }
            let curr = obj.value.length;
            document.getElementById('count').innerHTML = curr.toString();
        },
        onCopy(id) {
            let url = document.getElementById(id);
            url.select(); // 选择对象
            document.execCommand('Copy');
            this.$toast({ duration: 500, message: '复制成功' });
        },
        goBack() {
            if (this.goBackRouteName) this.$router.push({ name: this.goBackRouteName });
            this.$router.back();
        }
    }
};
</script>

<style scoped lang="scss">
.setting-join {
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
    .wid-50 {
        display: inline-block;
        width: 50px;
    }
    .value {
        color: #808080;
        border: 0;
        outline: none;
    }
    .header {
        width: 100%;
        height: 90px;
        padding: 0 35px;
        background: #ffffff;
        text-align: center;
        line-height: 90px;
        .fa-angle-left {
            position: absolute;
            left: 35px;
            line-height: 90px;
            font-size: 50px;
            color: #808080;
        }
        span {
            font-size: 30px;
            color: #4d4d4d;
        }
        .problem {
            position: absolute;
            right: 35px;
            line-height: 90px;
            font-size: 24px;
            color: #0088ff;
        }
    }
    .item-90 {
        position: relative;
        width: 100%;
        height: 90px;
        background: #ffffff;
        .item {
            height: 90px;
            color: #4d4d4d;
            font-size: 28px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .select {
        position: absolute !important;
        top: 90px;
        width: 100%;
        height: auto;
        overflow: hidden;
        background: #ffffff;
        transition: height 1.4s;
        @include border-bottom-1px(#cccccc);
        @include border-top-1px(#cccccc);
        .option {
            width: 100%;
            height: 60px;
            color: #808080;
            line-height: 60px;
            &:not(:last-child) {
                @include border-bottom-1px;
            }
        }
    }
    .suggestion-content {
        width: 100%;
        min-height: 296px;
        background: #ffffff;
        padding: 20px 36px;
        .textarea {
            width: 100%;
            outline: none;
        }
        .word-count {
            text-align: right;
            color: #b3b3b3;
        }
    }
    .submit {
        position: fixed;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        width: 678px;
        height: 90px;
        color: #ffffff;
        text-align: center;
        font-size: 30px;
        line-height: 90px;
        background-image: linear-gradient(
                -90deg,
                #1d75f2 0%,
                #0f6ef9 0%,
                #0066ff 0%,
                #0073ff 0%,
                #0080ff 0%,
                #009aff 50%,
                #04a7ff 79%,
                #07b5ff 100%
            ),
            linear-gradient(#eff0f3, #eff0f3);
        background-blend-mode: normal, normal;
        border-radius: 10px;
    }
}
</style>
