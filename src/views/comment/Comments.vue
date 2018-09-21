<template>
    <div class="comments">

        <header-bar text="全部评论" :share="true"></header-bar>

        <div class="commentContainer">
            <div class="commentTitle">精彩热评</div>

            <comment-list :commentlist="hot"></comment-list>

            <div class="commentTitle">全部评论</div>

            <comment-list :commentlist="list"></comment-list>
        </div>

    </div>
</template>

<script>
import { getHotComments } from '@/Api/live';
import commentList from '@/components/CommentList';
import HeaderBar from '@/components/HeaderBar';

export default {
    name: 'news_comments',
    components: { HeaderBar, commentList },
    data() {
        return {
            hot: [],
            list: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            let res = await getHotComments(1);
            this.hot = res.data.data.hot;
            this.list = res.data.data.list;
        }
    }
};
</script>

<style scoped lang="scss">
.comments {
    min-height: 100vh;
    overflow: hidden;
    .commentContainer {
        margin-top: 86px;
        min-height: calc(100vh - 86px);
        padding: 20px 30px;
        .commentTitle {
            margin-top: 30px;
        }
    }
}
</style>
