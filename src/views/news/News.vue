<template>
    <div class="newInfoScoped">
        <header-bar :share="true"></header-bar>

        <div class="newsContainer border-top-1px">
            <div class="title">{{info.title}}</div>

            <div class="otherInfo border-bottom-1px">
                <span>{{info.source}}</span>
                <span>{{time}}</span>
            </div>

            <div class="content border-bottom-1px" v-html="info.content"></div>



            <!-- 评论 -->
            <div class="commentTitle">精彩热评</div>
            <comment-list :commentlist="info.hot"></comment-list>
            <div class="commentTitle">全部评论</div>
            <comment-list :commentlist="info.comments"></comment-list>
            <!-- 查看更多评论 -->
            <div class="moreComments" @click="gotoMoreComments">更多评论</div> 

        </div>

    </div>
</template>

<script>
import { getNewInfo } from '@/Api/news';
import HeaderBar from '@/components/HeaderBar';
import commentList from '@/components/CommentList';

export default {
    name: 'news',
    components: { HeaderBar, commentList },
    data() {
        return {
            info: {}
        };
    },
    computed: {
        time() {
            return this.$moment(this.info.create_time).format('MM/DD HH:MM');
        }
    },
    created() {
        this.getNews();
    },
    methods: {
        async getNews(id) {
            let data = await getNewInfo(id);
            this.info = data.data.data;
        },
        gotoMoreComments() {
            this.$router.push({
                name: 'comments',
                query: {
                    id: this.info.news_id
                }
            });
        }
    }
};
</script>

<style lang="scss">
.newInfoScoped {
    min-height: 100vh;
    overflow: hidden;
    .newsContainer {
        @include border-top-1px;
        margin-top: 86px;
        min-height: calc(100vh - 86px);
        padding: 20px 30px;

        .title {
            font-size: 30px;
            line-height: 70px;
            color: $grey-dark;
        }

        .otherInfo {
            font-size: 24px;
            color: $grey;
            padding-bottom: 20px;
            @include border-bottom-1px;

            span {
                margin-right: 30px;
            }
        }

        .content {
            padding: 20px 0;
            color: $grey-dark;
            font-size: 24px;
            line-height: 36px;
            @include border-bottom-1px;
            img {
                width: 100%;
                margin: 10px 0 20px;
            }

            p {
                margin-bottom: 10px;
            }
        }
        .commentTitle {
            margin-top: 30px;
        }

        .moreComments {
            width: 220px;
            text-align: center;
            color: $red;
            border: 1px solid $red;
            border-radius: 30px;
            padding: 14px 0;
            margin: 30px auto;
        }
    }
}
</style>
