<template>
    <div class="league">
        <!-- <div class="league-wrapper"> -->
        <scroll ref="scroll" :scrollOptions="scrollOptions" @pullingDown="onPullingDown" @pullingUp="onPullingUp" :updateCount="updateCount" :updateDate="updateDate">
            <div class="point">
                <div class="point-wrapper">
                    <h-scroll>
                        <li v-for="(item, index) in pointNewsList" :key="index">
                            <div class="point-item d-flex flex-column justify-content-between align-items-center">
                                <img :src=item.imgUrl alt="">
                                <div class="pagination">{{item.title}}</div>
                            </div>
                        </li>
                    </h-scroll>
                </div>
            </div>
            <div class="news">
                <div class="news-wrapper">
                    <news-list :newsList="newsList"></news-list>

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
import NewsList from '@/components/NewsList';
let pageIndex = 1;
export default {
    name: 'league',
    components: { HScroll, Scroll, NewsList },
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
            // scroll 配置项
            scrollOptions: {},
            scrollToX: 0,
            scrollToY: 0,
            scrollToTime: 700,
            updateCount: 0,
            updateDate: this.$moment().calendar()
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
            this.$store.dispatch('home/GetNewsList', { type_id: 2, page_index: pageIndex++ }).then(res => {
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
            await Promise.all([this.getPointNews(), this.getNewsList()]);
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
                    font-size: 24px;
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
        }
    }
}
</style>
