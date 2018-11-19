<template>
    <list class="comments">
        <cell>
            <text class="commentTitle">精彩热评</text>
        </cell>

        <cell v-for="item in data.hot" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell>
            <text class="commentTitle">全部评论</text>
        </cell>

        <cell v-for="item in data.list" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell class="inputSpace"></cell>

        <div class="inputCell" :style="{'height': (90 + touchBarHeight) + 'px'}">
            <input class="input" type="text" return-key-type="send" :hideDoneButton="true">
            <text class="send" @click="closeKeyBoard">发送</text>
        </div>

    </list>
</template>

<script>
import commentItem from '../components/commentItem'

export default {
    name: 'comments',
    components: { commentItem },
    data() {
        return {
            touchBarHeight: weex.config.eros.touchBarHeight,
            data: null
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
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/hotComments/1'
            }).then(res => {
                this.data = res.data
                this.$notice.loading.hide()
            })
        },
        closeKeyBoard() {
            this.$tools.resignKeyboard()
        }
    }
}
</script>

<style scoped>
.comments {
    background-color: #ffffff;
}

.commentTitle {
    font-size: 28px;
    color: #4d4d4d;
    margin-top: 30px;
    padding-left: 35px;
    padding-right: 35px;
}

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
