<template>
    <div class="news-list">
        <div class="news-item d-flex flex-column justify-content-between" v-for="(item, index) in newsList" :key="index">
            <div class="news-one d-flex justify-content-between" v-if="item.img_count < 3">
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
            <div v-else>
                <div class="title">{{item.title}}</div>
                <div class="img-group d-flex justify-content-between">
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
            default: []
        }
    }
};
</script>
<style lang="scss">
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
</style>