<template>
    <div class="liveQuizDialog">
        <div class="dialog">
            <div class="infoItem">
                <span class="infoItemLeft">我的G币：<span class="red">{{myG}}</span></span>
                <span class="infoItemRight">竞猜：<span class="blue">{{option.text}}</span></span>
            </div>
            <div class="infoItem">
                <span class="infoItemLeft">赔率：{{option.quiz_percent}}倍</span>
                <span class="infoItemRight">预计获得：<span class="red">{{earnExpected}}</span></span>
            </div>

            <!-- 输入value -->
            <input
                :style="{
                    'padding-left': inputValue ? '' : '25vw',
                    'text-align': inputValue ? 'center' : ''
                }"
                class="inputValue"
                type="number"
                placeholder="请输入G币数量"
                v-model.number="inputValue">

            <!-- valueList -->
            <div class="valueList">
                <div
                    class="valueItem border-1px"
                    @click="chooseValue(item)"
                    v-for="item in valueList"
                    :key="item">
                    {{ item }}
                </div>
            </div>

            <button class="submit" @click="submit">投注</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'live_quizDialog',
    props: {
        quiz_id: {
            type: [String, Number],
            require: true
        },
        option: {
            type: Object,
            require: true
        }
    },
    data() {
        return {
            myG: 8320,
            inputValue: '',
            value: 0,
            valueList: [10, 100, 1000, 10000, '全部']
        };
    },
    computed: {
        earnExpected() {
            return this.inputValue
                ? this.inputValue * this.option.quiz_percent
                : this.value
                    ? this.value * this.option.quiz_percent
                    : 0;
        }
    },
    created() {},
    methods: {
        chooseValue(item) {
            this.value = item == '全部' ? this.myG : item;
        },
        submit() {
            if (!this.earnExpected) {
                alert('请选择竞猜金额');
                return false;
            }
            this.$emit('close');
        }
    },
    watch: {
        inputValue(val) {
            if (val >= this.myG) this.inputValue = this.myG;
        }
    }
};
</script>

<style scoped lang="scss">
.liveQuizDialog {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    .dialog {
        width: 600px;
        margin: 200px 75px;
        background-color: #ffffff;
        border-radius: 10px;
        font-size: 28px;
        color: #b3b3b3;
        padding-top: 40px;
        .infoItem {
            display: flex;
            padding-left: 20px;
            margin-bottom: 20px;
            .infoItemLeft {
                flex: 5;
            }
            .infoItemRight {
                flex: 4;
            }
        }
        .inputValue {
            width: 560px;
            height: 80px;
            border-radius: 10px;
            background: #f2f2f2;
            margin: 0 20px;
        }
        .valueList {
            margin: 30px 20px 35px;
            @include flex-center-between;
            .valueItem {
                width: 104px;
                height: 66px;
                line-height: 66px;
                text-align: center;
                @include border-1px(#cccccc, 20px);
            }
        }
        .submit {
            width: 100%;
            height: 80px;
            border-radius: 0 0 10px 10px;
            background-image: linear-gradient(
                -90deg,
                #0080ff 0%,
                #0077ff 0%,
                #006eff 0%,
                #0073ff 0%,
                #0077ff 0%,
                #0089ff 50%,
                #0091ff 79%,
                #0099ff 100%
            );
            color: #fff;
            font-size: 36px;
        }
    }

    .blue {
        color: #0099ff;
    }
    .red {
        color: #f5303d;
    }
}
</style>
