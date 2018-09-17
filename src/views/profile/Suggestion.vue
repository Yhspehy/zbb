<template>
    <div class="setting-join">
        <div class="suggestType">
            <span>{{type}}</span>
            <i  class="fa fa-angle-down"
                :class="{'rotate': expandObj.select}"
                @click="emitClick('select')"></i>
        </div>
        <collapse :active="expandObj.select">
            <div class="select border-top-1px">
                <div class="option border-bottom-1px"
                     v-for="item in typeList"
                     @click="choosenType(item)"
                     :key="item">{{ item }}
                </div>
            </div>
        </collapse>
        <div class="suggestion-content">
            <textarea
                id="content"
                placeholder="请输入您的建议"
                v-model="content">
            </textarea>
            <div class="word-count" id="word_count">
                <span id="count">{{wordCount}}/{{wordCountLimit}}</span>
            </div>
        </div>
        <div class="submit">提交</div>
    </div>
</template>

<script>
import collapse from '@/utils/collapse';
export default {
    name: 'profile_setting_suggestion',
    components: { collapse },
    data() {
        return {
            aa: '',
            type: '建议优化',
            expandObj: {
                select: false
            },
            typeList: ['直播', '等级', '社区', '其他', '优化建议'],
            wordCountLimit: 200,
            wordCount: 0,
            content: ''
        };
    },
    methods: {
        emitClick(key) {
            this.expandObj[key] = !this.expandObj[key];
        },
        choosenType(item) {
            this.type = item;
            this.expandObj.select = false;
        }
    },
    watch: {
        content(val, old) {
            if (val.length > this.wordCountLimit) {
                this.content = old;
                return;
            }
            this.wordCount = val.length;
        }
    }
};
</script>

<style scoped lang="scss">
.setting-join {
    .suggestType {
        margin-top: 20px;
        padding: 30px 36px;
        background: #fff;
        color: $grey-dark;
        font-size: 28px;
        @include flex-center-between;
        .fa-angle-down {
            font-size: 30px;
            cursor: pointer;
            transition: transform 0.5s;
        }
        .rotate {
            transform: rotate(180deg);
        }
    }
    .select {
        padding: 0 36px;
        background: #ffffff;
        z-index: 99;
        @include border-top-1px(#cccccc);
        .option {
            color: $grey;
            line-height: 80px;
            &:not(:last-child) {
                @include border-bottom-1px;
            }
        }
    }
    .suggestion-content {
        position: fixed;
        top: 220px;
        width: 100%;
        height: 336px;
        background: #ffffff;
        padding: 20px 36px;
        textarea {
            width: 100%;
            height: 260px;
            outline: none;
            resize: none;
            border: 0;
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
        border-radius: 10px;
    }
}
</style>
