<template>
    <div class="league">
        <!-- <div class="league-wrapper"> -->
            <scroll ref="scroll" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
                <div class="point">
                    <div class="point-wrapper">
                        <h-scroll>
                            <li class="point-item d-flex flex-column justify-content-between align-items-center" v-for="(item, index) in pointNewsList" :key="index">
                                <img :src=item.imgUrl alt="">
                                <div class="pagination">{{item.title}}</div>
                            </li>
                        </h-scroll>
                    </div>
                </div>
                <div class="news">
                    <div class="news-wrapper">
                        <div class="news-first d-flex justify-content-between">
                            <img :src=newsGroup.first.img_list[0]>
                            <div class="content d-flex flex-column justify-content-between">
                                <div class="title">{{newsGroup.first.title}}</div>
                                <div class="d-flex justify-content-between">
                                    <div class="date">{{newsGroup.first.create_time | moment('MM/DD HH:mm')}}</div>
                                    <div class="source">
                                        <i class="far"></i>Mavis报道
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="news-list">
                            <div class="news-item d-flex flex-column justify-content-between">
                                <div class="title">{{newsGroup.second.title}}</div>
                                <div class="img-group d-flex justify-content-between">
                                    <img :src=newsGroup.second.img_list[0]>
                                    <img :src=newsGroup.second.img_list[1]>
                                    <img :src=newsGroup.second.img_list[2]>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div class="date">{{newsGroup.second.create_time | moment('MM/DD HH:mm')}}</div>
                                    <div class="source">
                                        <i class="far"></i>Mavis报道
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="(item, index) in newsGroup.rest" :key="index">
                            <div class="news-first d-flex justify-content-between">
                                <img :src=item.img_list[0]>
                                <div class="content d-flex flex-column justify-content-between">
                                    <div class="title">{{item.title}}</div>
                                    <div class="d-flex justify-content-between">
                                        <div class="date">{{item.create_time | moment('MM/DD HH:mm')}}</div>
                                        <div class="source">
                                            <i class="far"></i>Mavis报道
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <template slot="pullup"></template>
            </scroll>
        <!-- </div> -->
    </div>
</template>

<script>
import HScroll from '@/components/HScroll';
import Scroll from '@/components/Scroll';
import BScroll from 'better-scroll';
let pageIndex = 1;
export default {
    name: 'league',
    components: { HScroll, Scroll },
    data() {
        return {
            pointNewsList: [],
            newsList: [],
            // secondGroup: [],
            newsGroup: {
                first: {
                    news_id: 0,
                    title: '',
                    img_list: [],
                    img_count: 0,
                    create_time: 0,
                    source: '',
                    league: '',
                    type: ''
                },
                second: {
                    news_id: 0,
                    title: '',
                    img_list: [],
                    img_count: 0,
                    create_time: 0,
                    source: '',
                    league: '',
                    type: ''
                }
            },
            updateCount: 0,
            // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
            scrollbarObj: {
                fade: true
            },
            // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            pullDownRefreshObj: {
                threshold: 90,
                stop: 40
            },
            // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
            pullUpLoadObj: {
                threshold: 0,
                txt: {
                    more: '加载更多',
                    noMore: '没有更多数据了'
                }
            },
            startY: 0, // 纵轴方向初始化位置
            scrollToX: 0,
            scrollToY: 0,
            scrollToTime: 700
        };
    },
    created() {
        this.$moment.locale('zh-cn');
        this.getPointNews();
        this.getNewsList();
    },
    methods: {
        /* 获取图片新闻 */
        getPointNews() {
            this.$store.dispatch('home/GetPointNews').then(res => {
                this.pointNewsList = res;
            });
        },
        /* 获取新闻列表 */
        getNewsList() {
            this.$store.dispatch('home/GetNewsList', { type_id: 1, page_index: pageIndex++ }).then(res => {
                this.newsList = res.newsList;
                this.updateCount = res.updateCount;
                const [first, second, ...rest] = this.newsList;
                this.newsGroup = { first, second, rest };
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
            let [pointNews, newsList] = await Promise.all([this.getPointNews(), this.getNewsList()]);
            this.$refs.scroll.forceUpdate(true);
        }
    },
    mounted() {
        this.onPullingDown();
    }
};
</script>

<style scoped lang="scss">
.league {
    height: 100%;
    background: #f3f7f9;
    .point {
        position: relative;
        display: block;
        width: 100%;
        height: 270px;
        background: #fff;
        .point-wrapper {
            padding-top: 6px;
            padding-left: 30px;
            padding-right: 30px;
            box-sizing: border-box;
            overflow: hidden;
            .point-item {
                margin: 0 10px;
                width: 500px;
                height: 250px;
                flex: 0 0 500px;
                border-radius: 6px;
                .pagination {
                    position: absolute;
                    background: rgba(0, 0, 0, 0.6);
                    bottom: 0;
                    width: 500px;
                    height: 60px;
                    padding-left: 10px;
                    color: #ffffff;
                    line-height: 60px;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
    .news {
        width: 750px;
        .news-wrapper {
            padding: 0 26px;
            background: #fff;
            .news-first {
                padding: 20px 0;
                @include border-bottom-1px;
                img {
                    margin-left: 10px;
                    width: 212px;
                    height: 144px;
                }
                .content {
                    margin-left: 20px;
                    .title {
                        font-size: 28px;
                        line-height: 36px;
                        color: #4d4d4d;
                    }
                }
            }
            .news-list {
                .news-item {
                    padding: 16px 10px;
                    @include border-bottom-1px;
                    overflow: hidden;
                    .title {
                        font-size: 28px;
                        color: #4d4d4d;
                    }
                    .img-group {
                        margin: 20px 0;
                        img {
                            width: 212px;
                            height: 144px;
                        }
                    }
                }
            }
            .date,
            .source {
                font-size: 24px;
                color: #808080;
            }
        }
    }
}
</style>
