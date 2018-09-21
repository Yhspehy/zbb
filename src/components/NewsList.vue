<template>
    <div class="news-list">
        <div class="news-item  border-bottom-1px"
             v-for="(item, index) in newsList"
             :key="index"
             @click="goNewInfo(item)">
            <div class="news-one" v-if="item.img_count < 3">
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
            <div v-else class="news-three">
                <div class="title">{{item.title}}</div>
                <div class="img-group">
                    <img :src=item.img_list[0]>
                    <img :src=item.img_list[1]>
                    <img :src=item.img_list[2]>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="date">{{item.create_time | moment('MM/DD HH:mm')}}</div>
                    <div class="source">
                        <i class="far"></i>Mavis报道
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newsList',
    props: {
        newsList: {
            type: Array,
            require: true
        }
    },
    methods: {
        goNewInfo(item) {
            this.$router.push({
                name: 'news',
                query: {
                    id: item.news_id
                }
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.news-list {
    width: 100%;
    padding: 0 26px;
    background: #fff;
    .news-item {
        padding: 16px 10px;
        @include border-bottom-1px;
        flex-flow: column nowrap;
        overflow: hidden;
        img {
            width: 212px;
            height: 144px;
        }
        .title {
            font-size: 28px;
            color: $grey-dark;
        }
        .date,
        .source {
            font-size: 24px;
            color: $grey;
        }
        .news-one {
            @include flex-center-between;
            align-items: initial;
            .content {
                margin-left: 20px;
                .title {
                    line-height: 36px;
                }
            }
        }

        .news-three {
            width: 100%;
            .img-group {
                @include flex-center-between;
                margin: 20px 0;
            }
        }
    }
}
</style>
