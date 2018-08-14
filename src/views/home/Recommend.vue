<template>
    <div class="recommend">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide d-flex justify-content-center align-items-center">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
                <div class="swiper-slide d-flex justify-content-center align-items-center">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
                <div class="swiper-slide d-flex justify-content-center align-items-center">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="page-detail"></div>
        </div>
        <div class="match-avi">
            <div class="avi-detail">
                <div class="swiper-wrapper">
                    <div class="swiper-slide avi-item d-flex flex-column justify-content-center align-items-center" v-for="(val, key) in todayObj" :key="key">
                        <div class="title">{{val.source}}</div>
                        <div class="result d-flex justify-content-between align-items-center">
                            <img src="../../../public/image/pics/球队&球员/湖人.png" alt="">
                            <div>
                                <span v-bind:class="{ 'win': val.home_score > val.away_score }">{{val.home_score}}</span> :
                                <span v-bind:class="{ 'win': val.home_score < val.away_score }">{{val.away_score}}</span>
                            </div>
                            <img src="../../../public/image/pics/球队&球员/勇士.png" alt="">
                        </div>
                        <div class="name d-flex justify-content-between align-items-center">
                            <span class="team">{{val.hometeam}}
                                <span>(主)</span>
                            </span>
                            <div class="state">{{val.end_description_word}}</div>
                            <span class="team">{{val.awayteam}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="avi-tips">
                <span class="tip-time">{{$moment().format('MM月DD号')}}</span>
                <span class="line">|</span>
                <span class="user-name">Mavis</span>&nbsp;
                <span class="tip-slot" id="local-time"></span>
                <span class="tip-content">今天还有
                    <span class="match-count">{{todayObj.length}}</span>场赛事直播</span>
            </div>
        </div>
        <div class="report">
            <div class="avi-report d-flex justify-content-between">
                <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                <div class="content d-flex flex-column justify-content-between">
                    <p class="title">五大关键词解读自由市场72小时 谁说冠军已经定了？</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="report-time">07/04 18:00</span>
                        <span class="report-time">
                            <img src="http://temp.im/23x10" alt="">
                            <span>Mavis</span>报道
                        </span>
                    </div>
                </div>
            </div>
            <group-pic
                v-for="(val, key) in imgObj"
                :key="key"
                :picData="val">
            </group-pic>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import groupPic from './_components/GroupPic';
export default {
    name: 'recommend',
    components: { groupPic },
    data() {
        return {
            todayObj: {},
            imgObj: {}
        };
    },
    created() {
        console.log('created');
        this.$moment.locale('zh-cn');
        this.getPopularList();
        this.getGroupPic();
    },
    activated() {
        console.log('activated');
    },
    methods: {
        async getPopularList() {
            let res = await this.$store.dispatch('schedule/GetPopularList');
            for (let key in res.data.data) {
                if (this.$moment(key).format('MM月DD号') === this.$moment('2018-08-06').format('MM月DD号')) {
                    console.log('today');
                    this.todayObj = res.data.data[key];
                    console.log(this.todayObj);
                }
            }
            this.popularObj = res.data.data;
            console.log(this.popularObj);
        },
        async getGroupPic() {
            let res = await this.$store.dispatch('schedule/GetGroupPic');
            // for (let key in res.data.data) {
            //     if (this.$moment(key).format('MM月DD号') === this.$moment().format('MM月DD号')) {
            //         console.log('today');
            //     }
            // }
            this.imgObj = res.data.data;
            console.log(this.imgObj);
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            },
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.page-detail',
                type: 'custom',
                renderCustom: function(swiper, current, total) {
                    var _html = '';
                    for (var i = 1; i <= total; i++) {
                        if (current == i) {
                            _html +=
                                '<span>玫瑰将再次开放！曾经的王者即将归来！</span><span>' + i + '/' + total + '</span>';
                        }
                    }
                    return _html; //返回所有的页码html
                }
            }
        });
        setTimeout(function() {
            new Swiper('.avi-detail', {
                centeredSlides: true,
                spaceBetween: 10,
                slidesPerView: 2,
                initialSlide: 2,
                watchActiveIndex: true
            });
        }, 50);
        var now = new Date();
        var hour = now.getHours();
        if (hour < 6) {
            document.getElementById('local-time').innerHTML = '凌晨好, ';
        } else if (hour < 9) {
            document.getElementById('local-time').innerHTML = '早上好, ';
        } else if (hour < 12) {
            document.getElementById('local-time').innerHTML = '上午好, ';
        } else if (hour < 14) {
            document.getElementById('local-time').innerHTML = '中午好, ';
        } else if (hour < 17) {
            document.getElementById('local-time').innerHTML = '下午好, ';
        } else if (hour < 19) {
            document.getElementById('local-time').innerHTML = '傍晚好, ';
        } else if (hour < 22) {
            document.getElementById('local-time').innerHTML = '晚上好, ';
        } else {
            document.getElementById('local-time').innerHTML = '夜里好, ';
        }
    }
};
</script>

<style scoped lang="scss">
.recommend {
    background: #f3f7f9;
    .swiper-container {
        width: 100%;
        height: 360px;
        margin-left: auto;
        margin-right: auto;
        .page-detail {
            background: rgba(0, 0, 0, 0.5);
            position: relative;
            z-index: 3;
            font-size: 28px;
            top: -60px;
            height: 60px;
            width: 100%;
            color: #fff;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
            padding: 0 36px;
        }
    }
    .match-avi {
        width: 100%;
        height: 276px;
        background: #fff;
        padding-top: 20px;
        .avi-detail {
            position: relative;
            width: 100%;
            height: 192px;
            .avi-item {
                margin: 0 auto;
                width: 460px;
                height: 192px;
                font-size: 24px;
                background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#f2f2f2, #f2f2f2);
                background-blend-mode: normal, normal;
                box-shadow: 0px 0px 11px 0px rgba(0, 51, 109, 0.25);
                border-radius: 6px;
                color: #808080;
                .time {
                }
                .result {
                    width: 100%;
                    text-align: center;
                    img {
                        width: 109px;
                        height: 68px;
                        flex: 0 1 33%;
                    }
                    .win {
                        color: #f3091a;
                    }
                }
                .name {
                    width: 100%;
                    color: #4d4d4d;
                    .team {
                        flex: 0 1 33%;
                        text-align: center;
                    }
                    .state {
                        width: 120px;
                        height: 36px;
                        text-align: center;
                        color: #fff;
                        background-image: linear-gradient(
                                -90deg,
                                #0080ff 0%,
                                #0077ff 0%,
                                #006eff 0%,
                                #0073ff 0%,
                                #0077ff 0%,
                                #0089ff 50%,
                                #0091ff 79%,
                                #0099ff 100%
                            ),
                            linear-gradient(#808080, #808080);
                        border-radius: 18px;
                    }
                }
            }
        }
        .avi-tips {
            position: relative;
            bottom: 0;
            height: 64px;
            padding-left: 36px;
            line-height: 64px;
            font-size: 24px;
            color: #0088ff;
            .line {
                color: #808080;
                padding: 0 20px;
            }
        }
    }
    .report {
        width: 100%;
        margin-top: 20px;
        padding: 14px 26px 0 26px;
        background: #fff;
        .avi-report {
            width: 100%;
            padding: 6px 10px 20px 10px;
            @include border-bottom-1px;
            .avi-img {
                width: 212px;
                height: 144px;
            }
            .content {
                padding-left: 20px;
                .title {
                    font-size: 28px;
                    color: #4d4d4d;
                }
                .report-time {
                    font-size: 24px;
                    color: #808080;
                }
            }
        }
    }
}
</style>
