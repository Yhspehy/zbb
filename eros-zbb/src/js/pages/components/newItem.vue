<template>
    <div :class="['news-item', hasBorder?'new-item-border':'']" @click="goNewInfo(item)">
        <div class="news-one" v-if="item.img_count < 3">
            <image class="img" :src="item.img_list[0]"></image>
            <div class="content">
                <text class="title">{{item.title}}</text>
                <div class="info">
                    <text class="date">{{time}}</text>
                    <text class="source">Mavis报道</text>
                </div>
            </div>
        </div>

        <div v-else class="news-three">
            <text class="title">{{item.title}}</text>
            <div class="img-group">
                <image class="img" :src="item.img_list[0]"></image>
                <image class="img" :src="item.img_list[1]"></image>
                <image class="img" :src="item.img_list[2]"></image>
            </div>
            <div class="info">
                <text class="date">{{time}}</text>
                <text class="source">Mavis报道</text>
            </div>
        </div>
    </div>
</template>

<script>
// 新闻列表的item
export default {
    name: 'newsList',
    props: {
        item: {
            type: Object,
            require: true
        },
        hasBorder: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        time() {
            return this.$moment(this.item.create_time).format('MM-DD HH:mm')
        }
    },
    methods: {
        goNewInfo(item) {
            this.$router.open({
                name: 'news',
                params: {
                    id: item.news_id
                }
            })
        }
    }
}
</script>
<style scoped>
.news-item {
    width: 750px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #ffffff;
}

/*----------  new border  ----------*/
.new-item-border {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #f2f2f2;
}

/*----------  公共  ----------*/

.title {
    font-size: 28px;
    color: #4d4d4d;
    line-height: 36px;
}
.date,
.source {
    font-size: 24px;
    color: #808080;
}

.img {
    margin-right: 10px;
    width: 212px;
    height: 144px;
    background-color: #ffc0cb;
}

.info {
    flex-direction: row;
    justify-content: space-between;
}

/* 一张图片 */
.news-one {
    flex-direction: row;
}

.content {
    width: 450px;
    height: 144px;
    margin-left: 20px;
    justify-content: space-between;
}

/* 三张图片 */
.img-group {
    margin: 20px 0;
    flex-direction: row;
}
</style>
