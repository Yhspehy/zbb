<template>
    <div class="liveRoom">
        <text v-if="chatObj.online_person" class="header">在线人数：{{chatObj.online_person}}</text>

        <list class="list">
            <cell v-for="(item, idx) in chatObj.data" :key="idx">
                <div :class="['contentItem']">
                    <image class="avatar" :src="item.avatar"></image>
                    <text class="user">{{item.user}}</text>
                    <text class="content">{{item.content}}</text>
                </div>
            </cell>
            <cell class="inputSpace"></cell>
        </list>

        <div v-if="showInput" class="inputCell" :style="{'height': (90 + touchBarHeight) + 'px'}">
            <input class="input" type="text" return-key-type="send" :hideDoneButton="true">
            <text class="send">发送</text>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            chatObj: {},
            showInput: true,
            touchBarHeight: weex.config.eros.touchBarHeight
        }
    },
    created () {
        this.$notice.loading.show()
        this.fetchChatData()
    },
    mounted () {
        this.$event.on('liveTabChange', params => {
            this.showInput = params === '聊天室'
        })
    },
    beforeDestroy () {
        this.$notice.loading.hide()
    },
    methods: {
        fetchChatData () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/chatRoom/1'
            }).then(res => {
                this.chatObj = res
                this.$notice.loading.hide()
            })
        }
    },
    watch: {

    }
}
</script>

<style scoped>

.liveRoom {
    background-color: #f3f7f9;
    flex: 1;
}

.header {
	font-size: 28px;
	line-height: 36px;
	color: #4d4d4d;
    padding-left: 36px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #ffffff;
    border-bottom-width: 1px;
    border-bottom-color: #e7e1e1;
    border-bottom-style: solid;
}

.list {
    flex: 1;
}

.contentItem {
    margin-left: 36px;
    margin-right: 36px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}

.user {
    font-size: 24px;
	line-height: 70px;
	color: #808080;
    margin-left: 10px;
    max-width: 100px;
    lines: 1;
    text-overflow: ellipsis;
}

.content {
    /* flex: 1; */
    max-width: 500px;
    font-size: 24px;
	line-height: 30px;
	color: #808080;
    background-color: #ffffff;
    border-radius: 10px;
    margin-left: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
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
