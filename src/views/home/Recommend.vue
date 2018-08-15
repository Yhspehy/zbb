<template>
    <div class="recommend" ref="pageWrapper">
        <div class="recommend-wrapper">
            <div class="focus-slide">
                <slide>
                    <div v-for="(item, index) in focusList" :key="index">
                        <a class="item-link">
                            <img :src=item.imgUrl>
                            <div class="tip">
                                <span class="title">{{item.title}}</span>
                                <span class="page">{{index+1}} / {{focusListLength}}</span>
                            </div>
                        </a>
                    </div>
                </slide>
            </div>
            <div class="schedule">
                <div class="schedule-wrapper">
                    <h-scroll>
                        <li class="schedule-item d-flex flex-column justify-content-between align-items-center" v-for="(item, index) in liveTrailList" :key="index">
                            <div class="title">{{item.source}}</div>
                            <div class="result d-flex justify-content-around align-items-center">
                                <img :src=item.hometeam_img alt="">
                                <div v-if="item.status !== '未开始'">
                                    <span v-bind:class="{ 'win': item.home_score > item.away_score }">{{item.home_score}}</span> :
                                    <span v-bind:class="{ 'win': item.home_score < item.away_score }">{{item.away_score}}</span>
                                </div>
                                <div v-else>
                                    <i class="far fa-clock" :class="{is_trail: item.is_trail}"></i>
                                    <span>{{$moment(item.start_time).format('HH:mm')}}</span>
                                </div>
                                <img :src=item.awayteam_img alt="">
                            </div>
                            <div class="name d-flex justify-content-between align-items-center">
                                <span class="team">{{item.hometeam}}(主)</span>
                                <span class="state" :class="{'is-not-trail': !item.is_trail && item.status === '未开始', 'is-online': item.status === '已开始'}">{{item.end_description_word}}</span>
                                <span class="team">{{item.awayteam}}</span>
                            </div>
                        </li>
                    </h-scroll>
                </div>
                <div class="notice">
                    <span class="tip-time">{{$moment().format('MM月DD号')}}</span>
                    <span class="line">|</span>
                    <span>Mavis {{hello}}, 今天有 {{hotGameCount}}场赛事直播</span>
                </div>
            </div>
            <div class="news">
                <div class="news-wrapper">
                    <div class="news-top d-flex justify-content-between">
                        <img src="http://temp.im/750x360/">
                        <div class="content d-flex flex-column justify-content-between">
                            <div class="title">五大关键词解读自由市场72小时 谁说冠军已经定了？</div>
                            <div class="d-flex justify-content-between">
                                <div class="date">07/04 18:00</div>
                                <div class="source"><i class="far"></i>Mavis报道</div>
                            </div>                
                        </div>
                    </div>
                    <div class="news-list"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Slide from '@/components/Slide';
import HScroll from '@/components/HScroll';
import { hello } from '@/assets/js/utils';
import BScroll from 'better-scroll';
export default {
    name: 'recommend',
    components: { Slide, HScroll},
    data() {
        return {
            hello: '',
            focusList: [],
            liveTrailList: [],
            focusListLength: 0,
            hotGameCount: 0
        };
    },
    filters: {
        getTime: function(value) {
            let vm = this;
            if (!value) return '';
            return vm.$moment(value).format('hh:mm:ss');
        }
    },
    created() {
        this.$moment.locale('zh-cn');
        this.getLiveTrail();
        this.getFocus();
        this.getHotGameCount();
    },
    activated() {
        console.log('activated');
    },
    methods: {

        /* 获取当日直播比赛 */
        getLiveTrail() {
            this.$store.dispatch('home/GetLiveTrail').then(res => {
                this.liveTrailList = res;
            });
        },

        /* 获取首页焦点图 */
        getFocus() {
            this.$store.dispatch('home/GetFocusList').then(res => {
                this.focusList = res;
                this.focusListLength = res.length;
            });
        },

        /* 获取热门赛事直播 */
        getHotGameCount() {
            this.$store.dispatch('home/GetHotGameCount').then(res => {
                this.hotGameCount = res;
            });
        }
    },
    mounted() {
        this.hello = hello();
        // this.$nextTick(() => {
        //     this.pageScroll = new BScroll(this.$refs.pageWrapper, {
        //         pullDownRefresh: {
        //             threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
        //             stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置});
        //         }
        //     });
        //     this.pageScroll.on('pullingDown', () => {
        //         // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        //         console.log('refresh');
        //         // 在刷新数据完成之后，调用 finishPullDown 方法，回弹到顶部
        //         this.pageScroll.finishPullDown();
        //     });
        // });
    }
};
</script>

<style scoped lang="scss">
.recommend {
    height: 100%;
    background: #f3f7f9;
    .focus-slide {
        width: 750px;
        height: 360px;
        overflow: hidden;
        .tip {
            position: absolute;
            display: flex;
            justify-content: space-between;
            bottom: 0;
            padding: 0 36px;
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 28px;
            color: #000;
            background-color: #ffffff;
            opacity: 0.3;
        }
    }
    .schedule {
        position: relative;
        display: block;
        width: 100%;
        height: 276px;
        background: #fff;
        .schedule-wrapper {
            padding-top: 20px;
            overflow: hidden;
            .schedule-item {
                margin: 0 10px;
                @include border-top-1px;
                @include border-bottom-1px;
                padding: 20px 0;
                flex: 0 0 460px;
                width: 460px;
                height: 192px;
                font-size: 24px;
                background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#f2f2f2, #f2f2f2);
                background-blend-mode: normal, normal;
                box-shadow: 0px 0px 11.9px 0.1px rgba(0, 51, 109, 0.25);
                border-radius: 6px;
                color: #808080;
                .result {
                    width: 100%;
                    text-align: center;
                    img {
                        border-radius: 50%;
                        width: 68px;
                        height: 68px;
                    }
                    i {
                        margin-right: 9px;
                        &.is_trail {
                            color: #0099ff;
                        }
                    }
                    .win {
                        color: #f3091a;
                    }
                }
                .name {
                    width: 100%;
                    color: #4d4d4d;
                    .team {
                        flex: 0 1 33%;
                        text-align: center;
                    }
                    .state {
                        width: 120px;
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                        color: #fff;
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
                            ),
                            linear-gradient(#808080, #808080);
                        border-radius: 18px;
                        &.is-not-trail {
                            border: 1px solid #0099ff;
                            color: #0099ff;
                            background: #fff;
                        }
                        &.is-online {
                            color: #fff;
                            background-image: linear-gradient(
                                    270deg,
                                    #f3091a 0%,
                                    #f63146 50%,
                                    #fb413b 74%,
                                    #ff512f 100%
                                ),
                                linear-gradient(#4d4d4d, #4d4d4d);
                            background-blend-mode: normal, normal;
                        }
                    }
                }
            }
        }
        .notice {
            position: relative;
            bottom: 0;
            height: 64px;
            padding-left: 36px;
            line-height: 64px;
            font-size: 24px;
            color: #0088ff;
            .line {
                color: #808080;
                padding: 0 20px;
            }
        }
    }
    .news{
        width: 750px;
    }
    .news-wrapper{
        padding: 0 26px;
    }
    .news-top {
        padding: 20px 0;
        @include border-bottom-1px;
        img {
            padding-left: 10px;
            width: 212px;
            height: 144px;
        }
        .content {
            margin-left: 20px;
            .title{
                font-size: 28px;
                line-height: 36px;
                color: #4d4d4d;
            }
            .date{
                font-size: 24px;
                color: #808080;
            }
            .source {
                font-size: 24px;
                color: #808080;
            }
        }
    }
    .report {
        width: 100%;
        margin-top: 20px;
        padding: 14px 26px 0 26px;
        background: #fff;
        .avi-report {
            width: 100%;
            padding: 6px 10px 20px 10px;
            @include border-bottom-1px;
            .avi-img {
                width: 212px;
                height: 144px;
            }
            .content {
                padding-left: 20px;
                .title {
                    font-size: 28px;
                    color: #4d4d4d;
                }
                .report-time {
                    font-size: 24px;
                    color: #808080;
                }
            }
        }
    }
}
</style>
