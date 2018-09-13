<template>
    <div class="setting-push">
        <ul class="item-fixed">
            <li class="item border-bottom-1px" v-for="(item, idx) in list" :key="idx">
                <div class="header-img">
                    <img class="avatar" src="http://temp.im/39x39" alt="">
                    <i class="unread"></i>
                </div>
                <div class="message">
                    <span class="title">{{item.title}}</span>
                    <p class="time">{{item.time}}</p>
                    <p class="content">
                        <span>{{item.text}}</span>
                        <a href="#" class="detail-link">点击查看详情 ></a>
                    </p>
                </div>
            </li>
        </ul>
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
        };
    }
};
</script>

<style scoped lang="scss">
.setting-push {
    .item-fixed {
        background: #ffffff;
        margin-top: 20px;
        .item {
            padding: 20px 0;
            display: flex;
            margin: 0 36px;
            @include border-bottom-1px;
            .header-img {
                position: relative;
                width: 78px;
                height: 78px;
                margin-right: 20px;
                .avatar {
                    border-radius: 50%;
                }
                .unread {
                    position: absolute;
                    top: 0;
                    right: 8px;
                    display: block;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: #ff512f;
                }
            }
            .message {
                flex: 1;
                color: $grey-dark;
                .title {
                    color: $grey;
                }
                .time {
                    color: $grey-light;
                    font-size: 22px;
                    line-height: 50px;
                }
                .content {
                    font-size: 24px;
                    line-height: 32px;
                    .detail-link {
                        color: $blue;
                    }
                }
            }
        }
    }
}
</style>
