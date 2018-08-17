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
        </div>  
    </div>
</template>

<script>
import { getReview } from '@/Api/live';
import cutOffLine from '@/components/CutOffLine';
import matchInfo from './_components/MatchInfo';
export default {
    name: 'live_review',
    components: { cutOffLine, matchInfo },
    data() {
        return {
            data: {}
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let res = await getReview(1);
            this.data = res.data.data;
        }
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
