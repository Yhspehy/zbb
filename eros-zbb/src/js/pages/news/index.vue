<template>
    <list class="newInfoScoped" v-if="info.title">
        <!-- 标题和文字信息 -->
        <cell class="cell">
            <text class="title">{{info.title}}</text>
            <div class="flex-row-center">
                <text class="infoText">{{info.source}}</text>
                <text class="infoText">{{time}}</text>
            </div>
        </cell>

        <!-- 文章内容 -->
        <cell class="cell" v-for="(item, idx) in info.content" :key="idx">
            <text v-if="!/^img/.test(item)" class="content">{{item}}</text>
            <image v-else class="img" :src="item.match(/^img=(.*)/)[1]"></image>
        </cell>

        <!-- 评论 -->

        <cell class="cell">
            <text class="commentTitle">精彩热评</text>
        </cell>

        <cell class="cell" v-for="item in info.hot" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell class="cell">
            <text class="commentTitle">全部评论</text>
        </cell>

        <cell class="cell" v-for="item in info.comments" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell class="cell flex-center">
            <text class="moreComments" @click="gotoMoreComments">更多评论</text>
        </cell>

        <cell class="inputSpace cell"></cell>

        <!-- 输入框 -->
        <div class="inputCell" :style="{'height': (90 + touchBarHeight) + 'px'}">
            <input class="input" type="text" return-key-type="send" :hideDoneButton="true">
            <text class="send" @click="closeKeyBoard">发送</text>
        </div>
    </list>
</template>

<script>
import commentItem from '../components/commentItem'

export default {
    name: 'news',
    components: { commentItem },
    data() {
        return {
            info: {},
            touchBarHeight: weex.config.eros.touchBarHeight
        }
    },
    computed: {
        time() {
            return this.$moment(this.info.create_time).format('MM/DD HH:MM')
        }
    },
    created() {
        this.$notice.loading.show()
        this.getData()
    },
    methods: {
        getData() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/news/newInfo/1'
            }).then(res => {
                this.info = res.data
                this.$notice.loading.hide()
            })
        },
        closeKeyBoard() {
            this.$tools.resignKeyboard()
        },
        gotoMoreComments() {
            this.$router.open({
                name: 'comments',
                params: {
                    id: this.info.news_id
                }
            })
        }
    }
}
</script>

<style scoped>
.flex-row-center {
    flex-direction: row;
    align-items: center;
}

.flex-center {
    align-items: center;
}

.newInfoScoped {
    background-color: #ffffff;
    border-top-width: 1px;
    border-top-color: #a59c9c;
    border-top-style: solid;
}

.cell {
    padding-left: 30px;
    padding-right: 30px;
}

.title {
    font-size: 30px;
    line-height: 70px;
    color: #4d4d4d;
}

.infoText {
    font-size: 24px;
    color: #808080;
    padding-bottom: 20px;
    margin-right: 30px;
}

.content {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #4d4d4d;
    font-size: 24px;
    line-height: 36px;
    /* border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #f2f2f2; */
}

.img {
    width: 680px;
    height: 440px;
}

.commentTitle {
    font-size: 28px;
    color: #4d4d4d;
    margin-top: 20px;
}

.moreComments {
    width: 220px;
    text-align: center;
    color: #f5303d;
    border-style: solid;
    border-width: 1px;
    border-color: #f5303d;
    border-radius: 30px;
    padding-top: 14px;
    padding-bottom: 14px;
    margin-top: 30px;
    margin-bottom: 10px;
}

/* input bottom */
.inputSpace {
    height: 90px;
}

.inputCell {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 36px;
    padding-right: 36px;
    border-top-width: 1px;
    border-top-color: #e7e1e1;
    border-top-style: solid;
}

.input {
    width: 568px;
    height: 66px;
    background-color: #f2f2f2;
    border-radius: 33px;
    margin-top: 12px;
    padding-left: 40px;
}

.send {
    font-size: 28px;
    color: #808080;
    margin-top: 30px;
}
</style>
