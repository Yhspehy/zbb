<template>
    <list class="hotComments">
        <cell>
            <text class="commentTitle">精彩热评</text>
        </cell>

        <cell v-for="item in hot" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell>
            <text class="commentTitle">全部评论</text>
        </cell>

        <cell v-for="item in list" :key="item.comment_id">
            <comment-item :item="item"></comment-item>
        </cell>

        <cell class="inputSpace"></cell>

        <div v-if="showInput" class="inputCell" :style="{'height': (90 + touchBarHeight) + 'px'}">
            <input class="input" type="text" return-key-type="send" :hideDoneButton="true">
            <text class="send" @click="closeKeyBoard">发送</text>
        </div>

    </list>
</template>

<script>
import commentItem from '../components/commentItem';

export default {
    name: 'live_hotComments',
    components: { commentItem },
    data() {
        return {
            nowDate: Date.parse(new Date()) / 1000,
            showInput: true,
            touchBarHeight: weex.config.eros.touchBarHeight,
            data: []
        };
    },
    computed: {
        hot() {
            const self = this;
            if (!this.data.hot) return [];
            return this.data.hot.map(e => {
                e.create_time = self.tranTime(e.create_time);
                return e;
            });
        },
        list() {
            const self = this;
            if (!this.data.list) return [];
            return this.data.list.map(e => {
                e.create_time = self.tranTime(e.create_time);
                return e;
            });
        }
    },
    created() {
        this.$notice.loading.show();
        this.getData();
    },
    mounted() {
        this.$event.on('liveTabChange', params => {
            this.showInput = params === '热议';
        });
    },
    methods: {
        getData() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/hotComments/1'
            }).then(res => {
                this.data = res.data;
                this.$notice.loading.hide();
            });
        },
        tranTime(timestamp) {
            if (this.nowDate - this.$moment(timestamp).format('X') > 60 * 60 * 24) {
                return this.$moment(timestamp).format('MM月MM日 HH:mm');
            } else {
                return this.$moment(timestamp).fromNow();
            }
        },
        closeKeyBoard() {
            this.$tools.resignKeyboard()
        }
    }
};
</script>

<style scoped>
.hotComments {
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
