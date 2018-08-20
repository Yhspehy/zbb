<template>
    <div class="liveQuiz">
        <header>
            <div v-for="item in headerList" :key="item">
                {{ item }}
            </div>
        </header>

        <cut-off-line></cut-off-line>


        <section>
            <div class="quizItem" v-for="item in list" :key="item.quiz_id">
                <div class="quizTitle">
                    <span class="quizStatus" :style="{'background': item.status === '已封盘' ? '#b3b3b3' : '#fdc72f'}">{{item.status}}</span>
                    <span>{{item.title}}</span>
                </div>
                <div class="quizInfo">
                    <span class="quizTotal">当前投注总额：{{item.quiz_total}} </span>
                    <span class="quizRestTime">剩余时间：{{item.rest_time}}</span>
                </div>
                <div class="quizOption border-1px" v-for="o in item.options" :key="o.option_id">
                    <div class="fl">{{o.text}}</div>
                    <div class="fr quizOdds">{{o.quiz_odds}}倍</div>
                    <div class="fr quizPercent">{{o.quiz_percent}}%投注</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getQuizList } from '@/Api/live';

import cutOffLine from '@/components/CutOffLine';
export default {
    name: 'live_quiz',
    components: { cutOffLine },
    data() {
        return {
            headerList: ['我的竞猜', 'G币抽奖', 'G币兑换', '获取G币'],
            list: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let res = await getQuizList(1);
            this.list = res.data.data;
        }
    }
};
</script>

<style scoped lang="scss">
.liveQuiz {
    & > header {
        padding: 20px 36px;
        @include flex-center-between;
    }

    & > section {
        padding: 0 36px;
        font-size: 24px;
        color: $font-color-deep-grey;
        .quizItem {
            padding: 20px 0;
            & > div {
                margin: 10px 0;
            }
            .quizTitle {
                font-size: 28px;
                .quizStatus {
                    width: 120px;
                    height: 44px;
                    color: #fff;
                    border-radius: 10px;
                    font-size: 24px;
                    display: inline-block;
                    text-align: center;
                    line-height: 44px;
                    margin-right: 10px;
                }
            }
            .quizInfo {
                @include flex-center-between;
                .quizTotal {
                    color: #b3b3b3;
                }
            }
            .quizOption {
                height: 40px;
                line-height: 40px;
                padding-left: 10px;
                @include border-1px(#e6e6e6);
                .quizOdds {
                    width: 200px;
                    height: 40px;
                    position: relative;
                    text-align: right;
                    color: #fff;
                    font-weight: bold;
                    padding-right: 10px;
                    background: rgba(0, 153, 255, 0.8);
                    &:after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 0;
                        border-color: transparent;
                        border-style: solid;
                        z-index: 10;
                        top: 0;
                        left: -30px;
                        border-width: 0 0 40px 30px;
                        border-bottom-color: rgba(0, 153, 255, 0.8);
                    }
                }
                .quizPercent {
                    margin-right: 40px;
                }
            }
        }
    }
}
</style>
