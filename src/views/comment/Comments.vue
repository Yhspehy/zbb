<template>
    <div class="comments">

        <header-bar text="全部评论" :share="true"></header-bar>

        <div id="commentContainer">
            <div class="commentContainer">
                <div class="commentTitle">精彩热评</div>

                <comment-list :commentlist="hot"></comment-list>

                <div class="commentTitle">全部评论</div>

                <comment-list :commentlist="list"></comment-list>
            </div>
        </div>
       

        <comment-input></comment-input>


    </div>
</template>

<script>
import { getHotComments } from '@/Api/live';
import commentList from '@/components/CommentList';
import HeaderBar from '@/components/HeaderBar';
import commentInput from '@/components/CommentInput';

export default {
    name: 'comments',
    components: { HeaderBar, commentList, commentInput },
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    // min-height: 100vh;

    // flex and bscroll
    #commentContainer {
        margin-top: 86px;
        height: calc(100% - 176px);
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .commentContainer {
        // fixed
        // margin: 86px 0 90px;
        // min-height: calc(100vh - 176px);
        padding: 20px 30px;
        .commentTitle {
            margin-top: 30px;
        }
    }
}
</style>
