<template>
    <div class="highlights">
        <div class="vedio-item">
            <div class="cover">
                <img class="cover-img" src="../../../public/image/pics/封面配图/img00022.jpg">
                <img class="btn-play" src="../../../public/image/icon_play.png">
            </div>
            <div class="detail  d-flex flex-column justify-content-between">
                <div class="title d-flex align-items-center">
                    <img src="http://temp.im/23x10" alt="">
                    <div class="describe">詹姆斯科比对决！1.0版詹姆斯惜败科比时代的湖人</div>
                </div>
                <div class="play-detail d-flex justify-content-between align-items-center">
                    <div>
                        <span class="play">播放量:<span class="count">999</span></span>&nbsp;&nbsp;
                        <span class="time">07/04 18:00</span>  
                    </div>
                    <div>
                        <span class="comments">
                            <i class="fa fa-comments"></i>
                            <span>268</span>&nbsp;&nbsp;
                        </span>
                        <span class="like light">
                            <i class="fa fa-heart"></i>
                            <span>269</span>&nbsp;&nbsp;
                        </span>
                        <i class="fa fa-share-square"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="vedio-item">
            <div class="cover">
                <img class="cover-img" src="../../../public/image/pics/封面配图/img00022.jpg">
                <img class="btn-play" src="../../../public/image/icon_play.png">
            </div>
            <div class="detail  d-flex flex-column justify-content-between">
                <div class="title d-flex align-items-center">
                    <img src="http://temp.im/23x10" alt="">
                    <div class="describe">詹姆斯科比对决！1.0版詹姆斯惜败科比时代的湖人</div>
                </div>
                <div class="play-detail d-flex justify-content-between align-items-center">
                    <div>
                        <span class="play">播放量:<span class="count">999</span></span>&nbsp;&nbsp;
                        <span class="time">07/04 18:00</span>  
                    </div>
                    <div>
                        <span class="comments">
                            <i class="fa fa-comments"></i>
                            <span>268</span>&nbsp;&nbsp;
                        </span>
                        <span class="like light">
                            <i class="fa fa-heart"></i>
                            <span>269</span>&nbsp;&nbsp;
                        </span>
                        <i class="fa fa-share-square"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="vedio-item">
            <div class="cover">
                <img class="cover-img" src="../../../public/image/pics/封面配图/img00022.jpg">
                <img class="btn-play" src="../../../public/image/icon_play.png">
            </div>
            <div class="detail  d-flex flex-column justify-content-between">
                <div class="title d-flex align-items-center">
                    <img src="http://temp.im/23x10" alt="">
                    <div class="describe">詹姆斯科比对决！1.0版詹姆斯惜败科比时代的湖人</div>
                </div>
                <div class="play-detail d-flex justify-content-between align-items-center">
                    <div>
                        <span class="play">播放量:<span class="count">999</span></span>&nbsp;&nbsp;
                        <span class="time">07/04 18:00</span>  
                    </div>
                    <div>
                        <span class="comments">
                            <i class="fa fa-comments"></i>
                            <span>268</span>&nbsp;&nbsp;
                        </span>
                        <span class="like light">
                            <i class="fa fa-heart"></i>
                            <span>269</span>&nbsp;&nbsp;
                        </span>
                        <i class="fa fa-share-square"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'highlights',
    data() {
        return {};
    }
};
</script>

<style scoped lang="scss">
.highlights {
    .vedio-item {
        background: #ffffff;
        .light {
            color: #f5303d;
        }
        .cover {
            position: relative;
            width: 100%;
            height: 422px;
            .cover-img {
                width: 100%;
                height: 422px;
            }
            .btn-play {
                position: absolute;
                z-index: 2;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 90px;
                height: 90px;
            }
        }
        .detail {
            height: 130px;
            width: 100%;
            padding: 20px 35px;
            .title {
                .describe {
                    font-size: 28px;
                    color: #4d4d4d;
                    padding-left: 10px;
                }
            }
            .play-detail {
                padding-bottom: 20px;
                color: #b3b3b3;
                font-size: 22px;
            }
        }
    }
}
</style>
