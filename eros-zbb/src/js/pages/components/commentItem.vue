<template>
    <div class="commentItem">
        <!-- avatar -->
        <image class="img" src="http://temp.im/50x50" alt="头像"></image>

        <div class="commentMain">
            <div class="commentInfo">
                <div class="flex-row-center">
                    <text class="userName">{{item.author.user_name}}</text>
                    <text class="time">{{item.index}}楼 </text>
                    <text class="time">{{time}}</text>
                </div>
                <div class="vote flex-row-center" @click="vote(item)">
                    <text class="icon" :style="{'color': item.isVote ? '#f5303d' : '#b3b3b3'}" >&#xf164;</text>
                    <text class="voteCount" :style="{'color': item.isVote ? '#f5303d' : '#b3b3b3'}" >{{item.vote_count}}</text>
                </div>
            </div>

            <!-- 评论内容 -->
            <text class="commentContent">{{item.content}}</text>

            <!-- 评论的回复 -->
            <div v-if="item.commentlist_count" class="commentAnswer">
                <text class="commentAnswerItem" v-for="(com, comIdx) in item.commentlist" :key="com.comment_id" v-if="item.isExpand || (!item.isExpand && comIdx < 2)">{{com.user_name}}：{{com.content}}</text>
                <text class="commentExpand" v-if="item.commentlist_count > 2" @click="item.isExpand = !item.isExpand">{{item.isExpand ? '收起' : `查看全部${item.commentlist_count}条回复&gt;`}}</text>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    name: 'c_comment',
    props: {
        item: {
            type: Object,
            require: true
        }
    },
    data () {
        return {
            nowDate: Date.parse(new Date()) / 1000
        }
    },
    computed: {
        time () {
            return this.tranTime(this.item.create_time)
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    methods: {
        vote (item) {
            if (item.isVote) {
                item.vote_count--
                item.isVote = false
            } else {
                item.vote_count++
                item.isVote = true
            }
        },
        tranTime (timestamp) {
            if (this.nowDate - this.$moment(timestamp).format('X') > 60 * 60 * 24) {
                return this.$moment(timestamp).format('MM月MM日 HH:mm')
            } else {
                return this.$moment(timestamp).fromNow()
            }
        }
    }
}
</script>

<style scoped>
.commentItem {
    font-size: 28px;
    color: #4d4d4d;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: row;
    padding-left: 35px;
    padding-right: 35px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #f2f2f2;
}

.img {
    border-radius: 50%;
    width: 78px;
    height: 78px;
    margin-right: 22px;
}

.commentMain {
    flex: 1;
}

.commentInfo {
    margin-bottom: 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.flex-row-center {
    flex-direction: row;
    align-items: center;
}

.userName {
    max-width: 200px;
    color: #808080;
    text-overflow: ellipsis;
}
.time {
    color: #b3b3b3;
    font-size: 22px;
    margin-left: 22px;
}

.icon {
    font-family: fontAwesome;
    margin-right: 10px;
    font-size: 26px;
}

.voteCount {
    font-size: 22px;
}

.commentContent {
    font-size: 28px;
    color: #4d4d4d;
}

.commentAnswer {
    background-color: #f3f7f9;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    margin-top: 20px;
}
.commentAnswerItem {
    color: #4d4d4d;
    font-size: 24px;
    margin-bottom: 5px;
}
.commentExpand {
    font-size: 24px;
    color: #0088ff;
    margin-top: 15px;
}
</style>
