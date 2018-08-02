<template>
    <div class="recommend">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
                <div class="swiper-slide">
                    <img src="../../../public/image/lunbo1.jpeg">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="page-detail"></div>
        </div>
        <div class="match-avi">
            <div class="avi-detail">
                <div class="avi-item"></div>
            </div>
            <div class="avi-tips">
                <span class="tip-time">07月04号</span>
                <span class="line">|</span>
                <span class="user-name">Mavis</span>&nbsp;
                <span class="tip-slot">中午好，</span>
                <span class="tip-content">今天还有
                    <span class="match-count">5</span>场赛事直播</span>
            </div>
        </div>
        <div class="report">
            <div class="avi-report d-flex justify-content-between">
                <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                <div class="content">
                    <p class="title">五大关键词解读自由市场72小时 谁说冠军已经定了？</p>
                    <div>
                        <span class="report-time">07/04 18:00</span>
                    </div>
                </div>
            </div>
            <div class="img-report d-flex flex-column justify-content-between">
                <p class="title">组图：圆桌会议詹皇&考神决定的“湖”蝶效应</p>
                <div class="imgs d-flex justify-content-between">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                </div>
                <p class="time">
                    <span class="report-time">07/04 18:00</span>
                </p>
            </div>
            <div class="img-report d-flex flex-column justify-content-between">
                <p class="title">组图：圆桌会议詹皇&考神决定的“湖”蝶效应</p>
                <div class="imgs d-flex justify-content-between">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                </div>
                <p class="time">
                    <span class="report-time">07/04 18:00</span>
                </p>
            </div>
            <div class="img-report d-flex flex-column justify-content-between">
                <p class="title">组图：圆桌会议詹皇&考神决定的“湖”蝶效应</p>
                <div class="imgs d-flex justify-content-between">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                </div>
                <p class="time">
                    <span class="report-time">07/04 18:00</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'recommend',
    mounted() {
        new Swiper('.swiper-container', {
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
    }
};
</script>

<style scoped lang="scss">
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.recommend {
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
                background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#f2f2f2, #f2f2f2);
                background-blend-mode: normal, normal;
                box-shadow: 0px 0px 11px 0px rgba(0, 51, 109, 0.25);
                border-radius: 6px;
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
            height: 170px;
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
        .img-report {
            width: 100%;
            height: 255px;
            padding: 20px 10px 20px 10px;
            .title {
                font-size: 28px;
                color: #4d4d4d;
            }
            .imgs {
                width: 100%;
                height: 144px;
                img {
                    width: 212px;
                    height: 144px;
                }
            }
            .time {
                font-size: 24px;
                .report-time {
                    color: #808080;
                }
            }
        }
    }
}
</style>
