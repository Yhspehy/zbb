<template>
    <div class="liveReview">
        <div class="mainInfo">
            <!-- 球队 比分 -->
            <match-info :data="data"></match-info>
            
            <!-- 组图 -->
            <div class="matchImg">
                <div class="matchImgItem" v-for="item in data.imgList" :key="item.img">
                    <img :src="item.img" :alt="item.name">
                    <span class="greyColor">{{item.name}}</span>
                </div>
            </div>
        </div>
        <!-- 分割线 -->
        <cut-off-line></cut-off-line>

        <div>
            <div>相关新闻</div>
            <news-list :newsList="newsList"></news-list>
        </div>  
    </div>
</template>

<script>
import { getReview } from '@/Api/live';
import cutOffLine from '@/components/CutOffLine';
import NewsList from '@/components/NewsList';
import matchInfo from './_components/MatchInfo';
let pageIndex = 1;
export default {
    name: 'live_review',
    components: { cutOffLine, matchInfo, NewsList },
    data() {
        return {
            data: {},
            newsList: []
        };
    },
    created() {
        this.getData();
        this.getNewsList();
    },
    methods: {
        async getData() {
            let res = await getReview(1);
            this.data = res.data.data;
        },

        /* 获取新闻列表 */
        getNewsList() {
            this.$store.dispatch('home/GetNewsList', { type_id: 1, page_index: pageIndex++ }).then(res => {
                this.newsList = res.newsList;
                this.updateCount = res.updateCount;
            });
        },
    }
};
</script>

<style scoped lang="scss">
.liveReview {
    .greyColor {
        color: $font-color-grey;
        font-size: 24px;
    }
    .mainInfo {
        padding: 0 36px;
        .matchImg {
            @include flex-center;
            margin-bottom: 10px;
            .matchImgItem {
                img {
                    width: 212px;
                    height: 144px;
                }
            }
        }
    }
}
</style>
