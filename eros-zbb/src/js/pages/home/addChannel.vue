<template>
    <list class="list">
        <cell class="header">
            <text class="channelText">我的频道</text>
            <text class="status" @click="edit">{{status}}</text>
        </cell>

        <cell class="channelList">
            <div
                :class="['channelItem', myShowIdx === idx ? 'hide' : '']"
                @click="removeChannel(idx)"
                v-for="(item, idx) in myChannels"
                :key="item.league_id">
                <image class="img" :src="item.avatar_img"></image>
                <text class="name">{{item.league_name}}</text>
                <div class="subtractIconDiv" v-if="status === '完成'">
                    <wxc-icon name="subtract" class="subtractIcon"></wxc-icon>
                </div>
            </div>
        </cell>

        <cell class="header" ref="box">
            <text class="channelText">点击添加频道</text>
        </cell>

        <cell class="channelList">
            <div
                :class="['channelItem', otherShowIdx === idx ? 'hide' : '']"
                @click="addChannel(idx)"
                v-for="(item, idx) in otherChannels"
                :key="item.league_id">
                <image class="img" :src="item.avatar_img"></image>
                <text class="name">{{item.league_name}}</text>
            </div>
        </cell>
    </list>
</template>

<script>
import { WxcIcon } from 'weex-ui'
// const dom = weex.requireModule('dom')
export default {
    name: 'home_addChannel',
    components: { WxcIcon },
    data() {
        return {
            status: '编辑',
            size: null,
            myShowIdx: null,
            otherShowIdx: null,
            myChannels: [],
            otherChannels: [],
            myChannelsLength: 0,
            otherChannelsLength: 0
        }
    },
    created() {
        this.$notice.loading.show()
        this.getChannel()
    },
    methods: {
        getChannel() {
            const res = {
                'status': true,
                'msg': '获取订阅联赛列表成功!',
                'data': {
                    'myLeague': [{
                        'league_id': 1,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 2,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 3,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 4,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 5,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 6,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 7,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }],
                    'otherLeague': [{
                        'league_id': 1,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 2,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 3,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 4,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 5,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 6,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }, {
                        'league_id': 7,
                        'league_name': 'NBA',
                        'league_type': 'basketball',
                        'avatar_img': 'http://temp.im/150x150'
                    }]
                }
            }
            // this.$fetch({
            //     method: 'GET',
            //     url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/subPage/league'
            // }).then(
            //     res => {
            //         this.myChannels = res.data.myLeague
            //         this.otherChannels = res.data.otherLeague
            //         this.myChannelsLength = res.data.myLeague.length
            //         this.otherChannelsLength = res.data.otherLeague.length
            //         this.$notice.loading.hide()
            //     }
            // )
            this.myChannels = res.data.myLeague
            this.otherChannels = res.data.otherLeague
            this.myChannelsLength = res.data.myLeague.length
            this.otherChannelsLength = res.data.otherLeague.length
            this.$notice.loading.hide()
        },
        edit() {
            this.status = this.status === '编辑' ? '完成' : '编辑'
        },
        removeChannel(idx) {
            if (this.status === '完成') {
                this.otherShowIdx = this.otherChannelsLength
                this.otherChannels.push(this.myChannels.splice(idx, 1)[0])
                this.otherChannelsLength += 1
                this.myChannelsLength -= 1
                this.$nextTick(() => {
                    this.otherShowIdx = null
                })
            }
        },
        addChannel(idx) {
            // this.hideIdx = idx
            this.myShowIdx = this.myChannelsLength
            this.myChannels.push(this.otherChannels.splice(idx, 1)[0])
            this.myChannelsLength += 1
            this.otherChannelsLength -= 1
            this.$nextTick(() => {
                this.myShowIdx = null
            })
            this.$event.emit('aa')
            // setTimeout(() => {
            //     this.hideIdx = null
            //     this.otherChannels.splice(idx, 1)
            // }, 300)
            // dom.getComponentRect(this.$refs.box, option => {
            //     this.size = option.size
            // })
        }
    }
}
</script>

<style scoped>
.list {
    background-color: #ffffff;
}

.header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 45px;
    padding-right: 45px;
}

.channelText {
    font-size: 28px;
    color: #4d4d4d;
    margin-top: 20px;
    margin-bottom: 30px;
}

.status {
    font-size: 24px;
    color: #0088ff;
    padding-top: 20px;
    margin-bottom: 30px;
}

.channelList {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 45px;
    padding-right: 25px;
}

.channelItem {
    width: 150px;
    margin-right: 20px;
    align-items: center;
    margin-bottom: 20px;
    transition-property: opacity;
    transition-duration: 0.5s;
    opacity: 1;
}

.img {
    background-color: #f2f2f2;
    border-radius: 75px;
    width: 150px;
    height: 150px;
}

.name {
    color: #808080;
    font-size: 24px;
    margin-top: 10px;
}

.subtractIconDiv {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #b3b3b3;
    justify-content: center;
    align-items: center;
}

.subtractIcon {
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
    top: 1px;
}

.hide {
    opacity: 0;
}

.show {
    opacity: 1;
}
</style>
