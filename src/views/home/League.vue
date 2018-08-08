<template>
    <div class="league">
        <div class="nav-news">
            <ul class="news-item">
                <li class="item">
                    <img src="../../../public/image/pics/封面配图/img00024.jpg" alt="">
                    <div class="pagination">点球决胜！俄罗斯5-4西班牙强势晋级八强</div>
                </li>
                <li class="item">
                    <img src="../../../public/image/pics/封面配图/img00027.jpg" alt="">
                    <div class="pagination">点球决胜！俄罗斯5-4西班牙强势晋级八强</div>
                </li>
                <li class="item">
                    <img src="../../../public/image/pics/封面配图/img00033.jpg" alt="">
                    <div class="pagination">点球决胜！俄罗斯5-4西班牙强势晋级八强</div>
                </li>
            </ul>
            
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
            <div class="img-report d-flex flex-column justify-content-between">
                <p class="title">组图：圆桌会议詹皇&考神决定的“湖”蝶效应</p>
                <div class="imgs d-flex justify-content-between">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                    <img class="avi-img" src="../../../public/image/avi-re1.jpeg">
                </div>
                <p class="time d-flex justify-content-between align-items-center">
                    <span class="report-time">07/04 18:00</span>
                    <span class="report-time">
                        <img src="http://temp.im/23x10" alt="">
                        <span>Mavis</span>报道
                    </span>
                </p>
            </div>
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
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.league {
    padding: 0 0 0 36px;
    .nav-news {
        background: #ffffff;
        width: 100%;
        height: 274px;
        padding: 6px 0 18px 0;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        .news-item {
            width: 100%;
            height: 250px;
            white-space: nowrap;
            .item {
                width: 500px;
                height: 250px;
                margin-right: 10px;
                display: inline-block;
                box-sizing: border-box;
                position: relative;
                img {
                    width: 500px;
                    height: 250px;
                }
                .pagination {
                    position: absolute;
                    background: rgba(0, 0, 0, 0.6);
                    bottom: 0;
                    width: 100%;
                    height: 60px;
                    color: #ffffff;
                    line-height: 60px;
                    padding-left: 10px;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            :last-child {
                margin-right: 35px;
            }
        }
    }
    .report {
        padding-right: 36px;
        width: 100%;
        .avi-report {
            width: 100%;
            padding: 20px 0;
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
            height: 280px;
            padding: 20px 0;
            @include border-bottom-1px;
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
