<template>
    <div class="profile">
        <div class="task">
            <div class="operation d-flex justify-content-between">
                <div class="return"><i class="fa fa-angle-left"></i></div>
                <div class="operate">
                    <router-link :to="{'name':'profile_setting'}"><i class="fa fa-cog"></i></router-link>
                    <i class="fa fa-envelope"></i>
                    <span class="infos-count">3</span>
                </div>
            </div> 
            <div class="user-info d-flex justify-content-start align-items-center">
                <div class="header">
                    <img src="http://temp.im/60x60" alt="">
                </div>
                <div class="infos">
                    <div class="status"><a href="#">登录</a>/<a href="#">注册</a></div>
                    <div class="d-flex justify-content-between">
                        <span>登录可享受更多服务</span>
                        <span class="d-none">G币：<span class="highlight">9999999</span></span>
                    </div>
                </div>
            </div>
            <div class="daily d-flex justify-content-between align-items-center">
                <div class="daily-task d-flex justify-content-start align-items-center">
                    <i class="fa fa-book"></i>
                    <div>
                        <p>每日任务</p>
                        <p>做任务送<span class="highlight">海量G币</span></p>
                    </div>
                </div>
                <div class="daily-sign d-flex justify-content-start align-items-center">
                    <i class="fa fa-edit"></i>
                    <div>
                        <p>每日签到</p>
                        <p>签到<span class="highlight">+100G币</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="circle d-flex flex-wrap">
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">我的关注</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">我的收藏</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">我的圈子</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">我的竞猜</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">浏览记录</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">我的帖子</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">G币抽奖</a>
            </div>
            <div class="item d-flex flex-column align-items-center">
                <img src="http://temp.im/22x22" alt="">
                <a href="#">G币商城</a>
            </div>
        </div>
        <div class="active">
            <div class="title">热门活动</div>
            <div class="actives">
                <ul class="active-item">
                    <li class="item"><img src="http://temp.im/125x70" alt=""></li>
                    <li class="item"><img src="http://temp.im/125x70" alt=""></li>
                    <li class="item"><img src="http://temp.im/125x70" alt=""></li>
                    <li class="item"><img src="http://temp.im/125x70" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="game">
            <div class="title">热门游戏</div>
            <div class="actives">
                <ul class="active-item">
                    <li class="item">
                        <img src="http://temp.im/30x30" alt="">
                        <p>血战到底</p>
                    </li>
                    <li class="item">
                        <img src="http://temp.im/30x30" alt="">
                        <p>吉吉游戏</p>
                    </li>
                    <li class="item">
                        <img src="http://temp.im/30x30" alt="">
                        <p>休闲游戏</p>
                    </li>
                    <li class="item">
                        <img src="http://temp.im/30x30" alt="">
                        <p>足球游戏</p>
                    </li>
                </ul>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/TheFooter';
// import { saveToLocal, loadFromLocal } from '@/assets/js/localstore';
export default {
    name: 'profile',
    components: {
        vFooter
    }
};
</script>

<style scoped lang="scss">
.profile {
    position: absolute;
    top: 0;
    bottom: 90px;
    left: 0;
    right: 0;
    background: #f3f7f9;
    .task {
        position: relative;
        width: 100%;
        height: 416px;
        background-color: #000000;
        opacity: 0.8;
        .operation {
            padding-top: 30px;
            color: #ffffff;
            font-size: 40px;
            font-weight: 200;
            padding: 30px 36px;
            .operate {
                .fa-cog {
                    padding-right: 36px;
                    color: #ffffff;
                }
                .infos-count {
                    position: absolute;
                    background: red;
                    display: block;
                    width: 24px;
                    height: 24px;
                    font-size: 10px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 24px;
                    right: 26px;
                    top: 26px;
                }
            }
        }
        .user-info {
            padding: 0 36px 50px 36px;
            .header {
                padding-right: 30px;
                img {
                    border-radius: 50%;
                }
            }
            .infos {
                width: 530px;
                color: #ffffff;
                line-height: 60px;
                .status {
                    a {
                        color: #ffffff;
                    }
                    font-size: 36px;
                }
            }
        }
        .daily {
            position: absolute;
            width: 100%;
            height: 120px;
            bottom: 0;
            padding: 10px 0;
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            .daily-task {
                width: 50.13%;
                height: 100%;
                padding-left: 36px;
                line-height: 40px;
                @include border-right-1px(#b3b3b3);
            }
            .daily-sign {
                width: 49.73%;
                height: 100%;
                padding-left: 62px;
                line-height: 40px;
            }
            i {
                font-size: 48px;
                padding-right: 20px;
            }
        }
        .highlight {
            color: #ffbb00;
        }
    }
    .circle {
        width: 100%;
        height: 263px;
        margin-top: 20px;
        background: #ffffff;
        .item {
            flex: 0 0 25%;
            height: 88px;
            padding-top: 28px;
            a {
                color: #808080;
            }
        }
    }
    .active {
        width: 100%;
        height: 247px;
        margin-top: 20px;
        background: #ffffff;
        .title {
            color: #4d4d4d;
            height: 66px;
            line-height: 66px;
            margin: 0 26px;
            padding-left: 10px;
            @include border-bottom-1px;
        }
        .actives {
            padding: 20px 0 20px 36px;
            position: relative;
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            .active-item {
                width: 100%;
                height: 140px;
                white-space: nowrap;
                .item {
                    display: inline-block;
                    margin-right: 20px;
                }
            }
        }
    }
    .game {
        width: 100%;
        height: 210px;
        margin-top: 20px;
        background: #ffffff;
        .title {
            color: #4d4d4d;
            height: 66px;
            line-height: 66px;
            margin: 0 26px;
            padding-left: 10px;
            @include border-bottom-1px;
        }
        .actives {
            padding: 20px 36px;
            position: relative;
            overflow-x: scroll;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            .active-item {
                width: 100%;
                height: 104px;
                white-space: nowrap;
                .item {
                    width: 25%;
                    text-align: center;
                    display: inline-block;
                }
            }
        }
    }
}
</style>
