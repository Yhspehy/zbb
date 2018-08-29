<template>
    <div class="setting-push">
        <ul class="mar-top item-fixed">
            <li class="item">
                <div class="header-img">
                    <img src="http://temp.im/39x39" alt="">
                    <i class="unread"></i>
                </div>
                <div class="message">
                    <span class="title">系统消息</span>
                    <p class="time"><span>7月31日</span> <span>17:53</span></p>
                    <p class="content">
                        <span>这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >> </span>
                        <a href="#" class="detail-link">点击查看详情 ></a>
                    </p>
                </div>
            </li>
            <li class="item">
                <div class="header-img">
                    <img src="http://temp.im/39x39" alt="">
                </div>
                <div class="message">
                    <span class="title">系统消息</span>
                    <p class="time"><span>7月31日</span> <span>17:53</span></p>
                    <p class="content">
                        <span>这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >> </span>
                        <a href="#" class="detail-link">点击查看详情 ></a>
                    </p>
                </div>
            </li>
            <li class="item">
                <div class="header-img">
                    <img src="http://temp.im/39x39" alt="">
                </div>
                <div class="message">
                    <span class="title">系统消息</span>
                    <p class="time"><span>7月31日</span> <span>17:53</span></p>
                    <p class="content">
                        <span>这里是系统消息喂啊喂啊喂，这里是系统消息喂啊喂啊喂啊喂啊喂，点击查看更多就可以跳转到官方活动页面拉是不是很开心喂 >> </span>
                        <a href="#" class="detail-link">点击查看详情 ></a>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'profile_setting_message'
};
</script>

<style scoped lang="scss">
.setting-push {
    position: relative;
    .mar-top {
        margin-top: 20px;
    }
    .border-bottom {
        @include border-bottom-1px;
    }
    .item-fixed {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 90px;
        background: #ffffff;
        overflow-y: scroll;
        .item {
            padding: 20px 0;
            display: flex;
            justify-content: center;
            margin: 0 36px;
            @include border-bottom-1px;
            .header-img {
                position: relative;
                width: 78px;
                height: 78px;
                border-radius: 50%;
                margin-right: 20px;
                img {
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
                width: 580px;
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
    /*----------  fn-collapse  ----------*/
    .fn-collapse {
        height: 0;
        overflow: hidden;
        transition-duration: 0.5s;
        transition-property: height, visibility;
    }

    .fn-collapse-hide {
        height: 0;
        display: none;
    }

    .fn-collapse-prev-show {
        i {
            transform: rotate(180deg);
        }
    }
}
</style>
