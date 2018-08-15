<template>
    <div class="hotComments">
        <div class="commentTitle">精彩热评</div>

        <comment-list :commentlist="hot"></comment-list>

        <div class="commentTitle">全部评论</div>

        <comment-list :commentlist="list"></comment-list>

    </div>
</template>

<script>
import { getHotComments } from '@/Api/live';
import commentList from '@/components/CommentList';
export default {
    name: 'live_hotComments',
    components: { commentList },
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
.hotComments {
    padding: 0 35px;
    .commentTitle {
        margin-top: 30px;
    }
}
</style>
