<template>
    <div class="setting-join">
        <div class="header">
            <i @click="goBack" class="fa fa-angle-left"></i>
            <span>意见反馈</span>
            <router-link :to="{'name':'profile_setting_problem'}"><span class="problem">常见问题</span></router-link>
        </div>
        <div class="mar-top padding-36 d-flex justify-content-between align-items-center item ">
            <span>建议优化</span>
            <i class="fa fa-angle-down"
                :class="{'rotate': expandObj.select}"
                @click="emitClick('select')"></i>
        </div>
        <collapse :active="expandObj.select">
            <div class="padding-36 select">
                <div class="option">直播</div>
                <div class="option">等级</div>
                <div class="option">社区</div>
                <div class="option">其他</div>
                <div class="option">优化建议</div>
            </div>
        </collapse>
        <div class="mar-top suggestion-content">
            <textarea id="content" @keyup="checkLen()" cols="30" rows="10"></textarea>
            <div class="word-count" id="word_count"><span id="count">0</span>/200</div>
        </div>
        <div class="submit">提交</div>
    </div>
</template>

<script>
import collapse from '@/Utils/collapse';
export default {
    name: 'setting_join',
    components: { collapse },
    data() {
        return {
            expandObj: {
                select: false
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
        emitClick(key) {
            this.expandObj[key] = !this.expandObj[key];
        },
        checkLen() {
            let obj = document.getElementById('content');
            var maxChars = 200; //最多字符数
            if (obj.value.length > maxChars) {
                document.getElementById('word_count').style.color = '$red';
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
    .mar-top {
        margin-top: 20px;
    }
    .border-bottom {
        @include border-bottom-1px;
    }
    .padding-36 {
        padding: 0 36px;
        .fa-angle-down {
            font-size: 30px;
            cursor: pointer;
            transition: transform 0.5s;
        }
        .rotate {
            transform: rotate(180deg);
        }
    }
    .wid-50 {
        display: inline-block;
        width: 50px;
    }
    .value {
        color: $grey;
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
            color: $grey;
        }
        span {
            font-size: 30px;
            color: $grey-dark;
        }
        .problem {
            position: absolute;
            right: 35px;
            line-height: 90px;
            font-size: 24px;
            color: $blue;
        }
    }
    .item {
        position: relative;
        width: 100%;
        height: 90px;
        background: #ffffff;
        color: $grey-dark;
        font-size: 28px;
        .fa-angle-down {
            transition: transform 0.5s;
        }
        .rotate {
            transform: rotate(180deg);
        }
    }
    .select {
        width: 100%;
        height: 400px;
        background: #ffffff;
        z-index: 99;
        @include border-bottom-1px(#cccccc);
        @include border-top-1px(#cccccc);
        .option {
            width: 100%;
            height: 80px;
            color: $grey;
            line-height: 80px;
            &:not(:last-child) {
                @include border-bottom-1px;
            }
        }
    }
    .suggestion-content {
        position: fixed;
        top: 200px;
        width: 100%;
        min-height: 296px;
        background: #ffffff;
        padding: 20px 36px;
        textarea {
            width: 100%;
            outline: none;
            resize: none;
            border: 0;
            overflow-y: hidden;
        }
        .word-count {
            text-align: right;
            color: $grey-light;
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
