<template>
    <div class="recommend">
        <div class="recommend-wrapper">
            <scroll ref="scroll" :scrollOptions="scrollOptions" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
                <div class="focus-slide">
                    <slide>
                        <div v-for="(item, index) in focusList" :key="index">
                            <a href="#" class="item-link">
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
                            <li v-for="(item, index) in liveTrailList" :key="index">
                                <div class="schedule-item d-flex flex-column justify-content-between align-items-center">
                                    <div class="title">{{item.source}}</div>
                                    <div class="result d-flex justify-content-around align-items-center">
                                        <img :src=item.hometeam_img alt="">
                                        <div v-if="item.status !== '未开始'">
                                            <span v-bind:class="{ 'win': item.home_score > item.away_score }">{{item.home_score}}</span> :
                                            <span v-bind:class="{ 'win': item.home_score < item.away_score }">{{item.away_score}}</span>
                                        </div>
                                        <div v-else>
                                            <i class="far fa-clock" :class="{is_trail: item.is_trail}"></i>
                                            <span>{{item.start_time | moment('HH:mm')}}</span>
                                        </div>
                                        <img :src=item.awayteam_img alt="">
                                    </div>
                                    <div class="name d-flex justify-content-between align-items-center">
                                        <span class="team">{{item.hometeam}}(主)</span>
                                        <span class="state" :class="{'is-not-trail': !item.is_trail && item.status === '未开始', 'is-online': item.status === '已开始'}">{{item.end_description_word}}</span>
                                        <span class="team">{{item.awayteam}}</span>
                                    </div>
                                </div>
                            </li>
                        </h-scroll>
                    </div>
                </div>
                <div class="notice">
                    <span class="tip-time">{{$moment().format('MM月DD号')}}</span>
                    <span class="line">|</span>
                    <span>Mavis {{hello}} 今天有 {{hotGameCount}}场赛事直播</span>
                </div>
                <div class="news">
                    <div class="news-wrapper">
                        <news-list :newsList="newsList"></news-list>
                    </div>
                </div>
            </scroll>
        </div>
    </div>
</template>

<script>
import Slide from '@/components/Slide';
import HScroll from '@/components/HScroll';
import Scroll from '@/components/Scroll';
import NewsList from '@/components/NewsList';
import { hello } from '@/assets/js/utils';
let pageIndex = 1;
export default {
    name: 'recommend',
    components: { Slide, HScroll, Scroll, NewsList },
    data() {
        return {
            hello: '',
            focusList: [],
            liveTrailList: [],
            focusListLength: 0,
            hotGameCount: 0,
            newsList: [],
            updateCount: 0,
            // scroll 配置项
            scrollOptions: {},
            scrollToX: 0,
            scrollToY: 0,
            scrollToTime: 700
        };
    },

    created() {
        this.$moment.locale('zh-cn');
        this.getLiveTrail();
        this.getFocus();
        this.getNewsList();
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
        },

        /* 获取新闻列表 */
        getNewsList() {
            this.$store.dispatch('home/GetNewsList', { type_id: 1, page_index: pageIndex++ }).then(res => {
                this.newsList = res.newsList;
                this.updateCount = res.updateCount;
            });
        },
        // 滚动到页面顶部
        scrollTo() {
            this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime);
        },
        async onPullingUp() {
            if (pageIndex < 5) {
                await this.getNewsList();
                this.$refs.scroll.forceUpdate(true);
            } else {
                this.$refs.scroll.forceUpdate(false);
            }
        },
        async onPullingDown() {
            pageIndex = 1;
            await Promise.all([this.getLiveTrail(), this.getFocus(), this.getNewsList(), this.getHotGameCount()]);
            this.$refs.scroll.forceUpdate(true);
        }
    },
    mounted() {
        this.hello = hello();
        this.onPullingDown();
    }
};
</script>

<style scoped lang="scss">
.recommend {
    height: 100%;
    background: #f3f7f9;
    .recommend-wrapper {
        height: 100%;
    }
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
        .schedule-wrapper {
            position: relative;
            width: 100%;
            background: #fff;
            padding-top: 20px;
            height: 192px;
            .schedule-item {
                margin: 0 10px;
                padding: 20px 0;
                flex: 0 0 460px;
                width: 460px;
                height: 100%;
                font-size: 24px;
                background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#f2f2f2, #f2f2f2);
                background-blend-mode: normal, normal;
                box-shadow: 0px 0px 11.9px rgba(0, 51, 109, 0.25);
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
                        color: #ffffff;
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
    }
    .notice {
        height: 64px;
        padding-left: 36px;
        line-height: 64px;
        font-size: 24px;
        color: $prime-blue;
        background-color: #fff;
        .line {
            color: #808080;
            padding: 0 20px;
        }
    }
    .news {
        margin-top: 20px;
        width: 750px;
        .news-wrapper {
            padding: 0 26px;
            background: #fff;
            .news-list {
                .news-item {
                    padding: 16px 10px;
                    @include border-bottom-1px;
                    overflow: hidden;
                    img {
                        width: 212px;
                        height: 144px;
                    }
                    .title {
                        font-size: 28px;
                        color: #4d4d4d;
                    }
                    .date,
                    .source {
                        font-size: 24px;
                        color: #808080;
                    }
                    .news-one {
                        .content {
                            margin-left: 20px;
                            .title {
                                line-height: 36px;
                            }
                        }
                    }

                    .img-group {
                        margin: 20px 0;
                    }
                }
            }
        }
    }
}
</style>
