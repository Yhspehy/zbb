<template>
    <div class="liveReview">
        <div class="mainInfo">
            <!-- 球队 比分 -->
            <div class="team">
                <div class="teamInfo">
                    <!-- cdn img -->
                    <img src="/image/team/湖人.png" alt="data.hometeam">
                    <div class="teamname">{{data.hometeam}}</div>
                </div>
                <div class="matchInfo">
                    <div class="greyColor">{{$moment(data.finish_time).format('MM月DD日 HH:mm')}} 已结束</div>
                    <div class="score">{{data.home_score}} : {{data.away_score}}</div>
                    <div class="greyColor">{{data.source}}</div>
                </div>
                <div class="teamInfo">
                    <!-- cdn img -->
                    <img src="/image/team/勇士.png" alt="data.awayteam">
                    <div class="teamname">{{data.awayteam}}</div>
                </div>
            </div>
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
export default {
    name: 'live_review',
    components: { cutOffLine },
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
        .team {
            @include flex-center-between;
            padding: 25px 50px;
            text-align: center;
            .teamInfo {
                img {
                    margin-bottom: 10px;
                    width: 90px;
                }
                .teamname {
                    color: $font-color-deep-grey;
                    font-size: 24px;
                }
            }
            .matchInfo {
                .score {
                    margin: 20px 0;
                    color: $font-color-deep-grey;
                    font-size: 36px;
                }
            }
        }
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
