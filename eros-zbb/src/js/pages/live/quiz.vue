<template>
    <list class="liveQuiz">
        <cell class="header">
            <div class="headerItem" v-for="item in headerList" :key="item">
                <image src="http://temp.im/90x90" class="headerImg"></image>
                <text class="headerText">{{item}}</text>
            </div>
        </cell>

        <cell class="section">
            <div class="quizItem" v-for="item in list" :key="item.quiz_id">
                <div class="quizHeader">
                    <text class="quizStatus" :style="{'backgroundColor': item.status === '已封盘' ? '#b3b3b3' : '#fdc72f'}">{{item.status}}</text>
                    <text class="quizTitle">{{item.title}}</text>
                </div>
                <div class="quizInfo">
                    <text class="quizTotal">当前投注总额：{{item.quiz_total}} </text>
                    <text class="quizRestTime">剩余时间：{{item.rest_time}}</text>
                </div>
                <div class="quizOption" @click="quizClick(item.quiz_id, o)" v-for="o in item.options" :key="o.option_id">
                    <text class="quizOptionText">{{o.text}}</text>
                    <text class="quizPercent">{{o.quiz_percent}}%投注</text>
                    <text class="quizOdds">{{o.quiz_odds}}倍</text>
                </div>
            </div>
        </cell>

        <cell>
            <bmmask class="mask" animation="scale" position="center" :duration="400" ref="bmmask" :disableMaskEvent="true">
                <bmpop class="modal-top">
                    <div class="quizMask">
                        <div class="maskTextRow">
                            <text class="maskText">我的G币：{{myG}}</text>
                            <text class="maskText">竞猜：{{chosen.option.text}}</text>
                        </div>
                        <div class="maskTextRow">
                            <text class="maskText">赔率：{{chosen.option.quiz_odds}}</text>
                            <text class="maskText">预计获得：{{gainExpect}}</text>
                        </div>
                        <div class="maskTextRow">
                            <input class="quizInput" type="number" v-model="inputValue" placeholder="请输入G币数量">
                        </div>
                        <div>
                            <text class="valueItem"
                                  @click="chooseValue(item)"
                                  v-for="item in valueList"
                                  :key="item">{{item}}</text>
                        </div>
                        <text class="closeMask" @click="closeMask">投注</text>
                    </div>
                </bmpop>
            </bmmask>
        </cell>
    </list>
</template>

<script>
export default {
    name: 'live_quiz',
    data () {
        return {
            headerList: ['我的竞猜', 'G币抽奖', 'G币兑换', '获取G币'],
            list: [],
            chosen: {
                quiz_id: '',
                option: {}
            },
            valueList: [10, 100, 1000, 10000, '全部'],
            myG: 8320,
            inputValue: '',
            gainExpect: 0
        }
    },
    created () {
        this.$notice.loading.show()
        this.getData()
    },
    methods: {
        getData () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/quizList/1'
            }).then(res => {
                this.list = res.data
                this.$notice.loading.hide()
            })
        },
        quizClick (id, option) {
            this.chosen.quiz_id = id
            this.chosen.option = option
            this.$refs['bmmask'].show()
        },
        closeMask () {
            this.$refs['bmmask'].hide()
        }
    }
}
</script>

<style scoped>
.liveQuiz {
    background-color: #f3f7f9;
}

.header {
    font-size: 28px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 36px;
    padding-right: 36px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #ffffff;
}

.headerItem {
    align-items: center;
}

.headerImg {
    width: 60px;
    height: 60px;
}

.headerText {
    font-size: 24px;
    color: #808080;
    margin-top: 10px;
}

.section {
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
}

.quizHeader {
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
}

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

.quizTitle {
    font-size: 28px;
    color: #4d4d4d;
}

.quizInfo {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}

.quizTotal {
    font-size: 24px;
    color: #b3b3b3;
}

.quizRestTime {
    font-size: 24px;
    color: #4d4d4d;
}

.quizOption {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: #4d4d4d;
    border-style: solid;
    border-width: 1px;
    margin-top: 10px;
}

.quizOptionText {
    font-size: 24px;
}

.quizOdds {
    width: 200px;
    height: 38px;
    line-height: 38px;
    text-align: right;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    padding-right: 10px;
    background-color: rgba(0, 153, 255, 0.8);
}

.quizPercent {
    margin-right: 40px;
    color: #4d4d4d;
    font-size: 24px;
}

.mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.maskTextRow {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
}

.quizMask {
    width: 600px;
    margin-left: 75px;
    background-color: #ffffff;
    border-radius: 10px;
    padding-top: 10px;
}

.maskText {
    font-size: 28px;
    color: #b3b3b3;
}

.quizInput {
    flex: 1;
    height: 80px;
    border-radius: 10px;
    background-color: #f2f2f2;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: 28px;
    color: #b3b3b3;
    text-align: center;
}

.valueItem {
    width: 104px;
    height: 66px;
    line-height: 66px;
    text-align: center;
}

.closeMask {
    width: 600px;
    height: 90px;
    background-color: #ffffff;
    color: #808080;
    line-height: 90px;
    text-align: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
