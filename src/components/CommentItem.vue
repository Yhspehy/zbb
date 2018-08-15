<template>
    <div v-if="item.comment_id" class="commentItem border-bottom-1px">
        <!-- avatar -->
        <div class="avatar">
            <img src="/image/team/湖人.png" alt="头像">
        </div>
        <div class="commentMain">
            <div class="commentInfo clearfix">
                <span class="userName text-ellipsis">{{item.author.user_name}}</span>
                <span class="time">
                    <span>{{item.index}}楼 </span>
                    <span>{{item.create_time}}</span>
                </span>
                <span class="vote fr" :style="{'color': item.isVote ? '#f5303d' : '#b3b3b3'}">
                    <i class="far fa-thumbs-up"></i>
                    <span class="voteCount">{{item.vote_count}}</span>
                </span>
            </div>

            <!-- 评论内容 -->
            <div class="commentContent">{{item.content}}</div>

            <!-- 评论的回复 -->
            <div v-if="item.commentlist_count" class="commentAnswer">
                <div class="commentAnswerItem" v-for="(com, comIdx) in item.commentlist" :key="com.comment_id" v-show="item.isExpand || (!item.isExpand && comIdx < 2)">
                    {{com.user_name}}：{{com.content}}
                </div>
                <div class="commentExpand" v-if="item.commentlist_count > 2" @click="item.isExpand = !item.isExpand">
                    {{item.isExpand ? '收起' : `查看全部${item.commentlist_count}条回复&gt;`}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'c_comment',
    props: {
        item: {
            type: Object,
            require: true
        },
        isTranTime: {
            type: Boolean,
            default: true
        }
    },
    computed: {},
    data() {
        return {};
    },
    created() {},
    methods: {}
};
</script>

<style scoped lang="scss">
.commentItem {
    display: flex;
    font-size: 28px;
    color: $font-color-deep-grey;
    padding: 20px 0;
    @include border-bottom-1px;
    img {
        border-radius: 50%;
        width: 78px;
        height: 78px;
        margin-right: 22px;
    }
    .commentMain {
        flex: 1;
        .commentInfo {
            color: $font-color-grey;
            margin-bottom: 25px;
            .userName {
                max-width: 200px;
            }
            .time {
                color: #b3b3b3;
                font-size: 22px;
                margin-left: 22px;
            }
            .voteCount {
                font-size: 22px;
            }
        }
        .commentAnswer {
            background: #f3f7f9;
            font-size: 24px;
            padding: 20px;
            margin-top: 20px;
            .commentAnswerItem {
                margin-bottom: 5px;
            }
            .commentExpand {
                color: #0088ff;
                margin-top: 15px;
            }
        }
    }
}
</style>
