<template>
    <div class="setting-push">
        <div class="item" v-for="(item, idx) in list" :key="idx">
            <div class="header-img">
                <image class="avatar" src="http://temp.im/39x39" alt=""></image>
                <div class="unread"></div>
            </div>
            <div class="message">
                <text class="title">{{item.title}}</text>
                <text class="time">{{item.time}}</text>
                <div class="content">
                    <text class="text">{{item.text}}</text>
                    <text class="detail-link">点击查看详情</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile_setting_message',
    data() {
        return {
            list: [
                {
                    avatar: '',
                    title: '系统消息',
                    time: '7月31日17:44',
                    text:
                        '这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >>'
                },
                {
                    avatar: '',
                    title: '系统消息',
                    time: '7月31日17:44',
                    text:
                        '这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >>'
                },
                {
                    avatar: '',
                    title: '系统消息',
                    time: '7月31日17:44',
                    text:
                        '这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >>'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.setting-push {
    background: #ffffff;
    margin-top: 20px;
}
.item {
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 36px;
    padding-right: 36px;
    flex-direction: row;
    width: 750px;
}
.header-img {
    width: 78px;
    height: 78px;
    margin-right: 20px;
}

.avatar {
    width: 78px;
    height: 78px;
    border-radius: 39px;
}
.unread {
    position: absolute;
    top: 0;
    right: 8px;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #ff512f;
}

.message {
    color: #4d4d4d;
    flex: 1;
}

.title {
    font-size: 28px;
    color: #808080;
}
.time {
    color: #b3b3b3;
    font-size: 22px;
    line-height: 50px;
}
.content {
    flex-flow: row wrap;
}
.text {
    color: #4d4d4d;
    font-size: 24px;
    line-height: 32px;
}

.detail-link {
    color: #0088ff;
    font-size: 24px;
    line-height: 32px;
}
</style>
