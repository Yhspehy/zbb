<template>
    <div class="profile">
        <div class="task">
            <div class="operation d-flex justify-content-between">
                <div class="return"><i @click="goBack" class="fa fa-angle-left"></i></div>
                <div class="operate">
                    <router-link :to="{'name':'profile_setting'}"><i class="fa fa-cog"></i></router-link>
                    <router-link :to="{'name':'profile_setting_message'}">
                        <i class="fa fa-envelope"></i>
                        <span class="infos-count">3</span>
                    </router-link>
                    
                </div>
            </div> 
            <div class="user-info d-flex justify-content-start align-items-center">
                <div class="header">
                    <img src="http://temp.im/60x60" alt="">
                </div>
                <div class="infos">
                    <div class="status"><router-link :to = "{'name': 'login'}">登录</router-link>/<router-link :to = "{'name': 'register'}">注册</router-link></div>
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


        <!-- 我的圈子 -->
        <div class="circle">
            <div class="cicleItem" v-for="item in myCicle" :key="item.name">
                <img src="http://temp.im/22x22" alt="">
                <router-link :to="item.to">{{item.name}}</router-link> 
            </div>
        </div>


        <!-- 热门活动 -->
        <div class="active">
            <div class="title border-bottom-1px">热门活动</div>
            <div id="actives-wrapper">
                <div id="wrapper">
                    <div class="activityItem" v-for="(item, idx) in hotActivity" :key="idx">
                        <img :src="item.img">
                    </div>
                </div>
            </div>
        </div>


        <!-- 热门游戏 -->
        <div class="game">
            <div class="title">热门游戏</div>
            <div class="gameContent">
                <div class="game-item" v-for="(item, idx) in games" :key="idx">
                    <img :src="item.img">
                    <p>{{item.name}}</p>
                </div>
            </div>
        </div>


        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from '@/components/TheFooter';
import BScroll from 'better-scroll';
export default {
    name: 'profile',
    components: {
        vFooter
    },
    data() {
        return {
            myCicle: [
                {
                    name: '我的关注',
                    to: ''
                },
                {
                    name: '我的收藏',
                    to: ''
                },
                {
                    name: '我的圈子',
                    to: ''
                },
                {
                    name: '我的竞猜',
                    to: ''
                },
                {
                    name: '浏览记录',
                    to: ''
                },
                {
                    name: '我的帖子',
                    to: ''
                },
                {
                    name: 'G币抽奖',
                    to: ''
                },
                {
                    name: 'G币商城',
                    to: ''
                }
            ],
            hotActivity: [
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                }
            ],
            games: [
                {
                    name: '血战到底',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '吉吉游戏',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '休闲游戏',
                    img: 'http://temp.im/30x30'
                },
                {
                    name: '足球游戏',
                    img: 'http://temp.im/30x30'
                }
            ]
        };
    },
    mounted() {
        this.$nextTick(() => {
            new BScroll('#actives-wrapper', {
                scrollX: true,
                eventPassthrough: 'vertical'
            });
        });
    },
    methods: {
        goBack() {
            if (this.goBackRouteName) {
                this.$router.push({ name: this.goBackRouteName });
            } else {
                this.$router.back();
            }
        }
    }
};
</script>

<style scoped lang="scss">
.profile {
    min-height: 100%;
    background: $bg-body;
    .task {
        position: relative;
        width: 100%;
        height: 416px;
        background-color: #000000;
        opacity: 0.8;
        .operation {
            color: #ffffff;
            font-size: 40px;
            font-weight: 200;
            padding: 30px 36px;
            .operate {
                .fa-cog {
                    padding-right: 36px;
                    color: #ffffff;
                }
                .fa-envelope {
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
                    color: #ffffff;
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
            color: $yellow;
        }
    }

    .circle {
        margin: 20px 0;
        background: #ffffff;
        flex-wrap: wrap;
        @include flex-center;
        .cicleItem {
            width: 25%;
            flex-direction: column;
            margin: 20px 0;
            @include flex-center;
            a {
                margin-top: 10px;
                color: $grey;
            }
        }
    }

    .active {
        background: #ffffff;
        padding: 0 26px;
        .title {
            color: $grey-dark;
            line-height: 66px;
            padding-left: 10px;
        }
        #actives-wrapper {
            padding: 20px 0;
            overflow: hidden;
            #wrapper {
                width: auto;
                white-space: nowrap;
                display: inline-block;
            }
            .activityItem {
                width: 250px;
                margin-right: 20px;
                display: inline-block;
            }
        }
    }

    .game {
        margin-top: 20px;
        background: #ffffff;
        .title {
            color: $grey-dark;
            height: 66px;
            line-height: 66px;
            margin: 0 26px;
            padding-left: 10px;
            @include border-bottom-1px;
        }
        .gameContent {
            padding: 20px 0;
            @include flex-center;

            .game-item {
                width: 25%;
                font-size: 24px;
                color: $grey;
                text-align: center;
                img {
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }
}
</style>
