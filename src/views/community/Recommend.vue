<template>
    <div id="recommend">
        <div class="refresh">
            <div class="refreshText">{{refreshText}}</div>
        </div>

        <div class="recommend" :class="{'refreshOver': isRefreshOver}">

            <!-- swiper -->
            <slide class="swiper" :length="swiperList.length" eventPassthrough="vertical">
                <div class="swiperItem" v-for="(item, index) in swiperList" :key="index">
                    <div class="item-link">
                        <img :src=item.imgUrl>
                        <div class="tip">
                            <span class="title">{{item.title}}</span>
                            <span class="page">{{index+1}} / {{swiperList.length}}</span>
                        </div>
                    </div>
                </div>
            </slide>

            <!-- circle -->
            <div class="circle">
                <div>我的圈子</div>
                <div></div>
            </div>

            <div class="zone" v-for="zone in zones" :key="zone.id">
                <div class="zoneHeader">
                    <span class="zoneName">{{zone.name}}专区</span>
                    <span class="zonePoster"> | {{zone.poster}}</span>
                </div>

                <div class="zoneTitle">{{zone.title}}</div>

                <img class="zoneImg" v-if="zone.img.length" :src="zone.img[0]">

                <div class="zoneComment">{{zone.comment}}</div>

                <div class="zoneFooter">
                    <span class="zoneUpdateTime">{{zone.update_time}}</span>
                    <span class="zoneVoteComment">
                        <span class="zoneVoteCount" :style="{'color': zone.isVote ? '#f5303d' : '#b3b3b3'}" @click="vote(zone)">
                            <i class="far fa-thumbs-up"></i>
                            <span class="voteCount">{{zone.vote_count}}</span>
                        </span>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline">
                            <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" class=""></path>
                        </svg>
                    </span>
                </div>
            </div>

            <!-- postBtn -->
            <button class="postTitle" @click="postTitle">
                <i class="fas fa-pen"></i>
                <span>我要发帖</span>
            </button>

        </div>
    </div>

</template>

<script>
import slide from '@/components/Slide';

import { getSwiper, getRecommendList } from '@/Api/community';

import { slideRefresh } from '@/utils/index';

let slideRefreshFn = null;
export default {
    name: 'community_recommend',
    components: {
        slide
    },
    data() {
        return {
            swiperList: [],
            zones: [],
            status: { value: 0 },
            refreshText: 'pull to refresh',
            isRefreshOver: true
        };
    },
    created() {
        this.getFocus();
        this.getList();
    },
    mounted() {
        this.refresh();
    },
    beforeDestroy() {
        slideRefreshFn.destroy();
    },
    methods: {
        refresh() {
            slideRefreshFn = slideRefresh({
                parent: '#recommend',
                el: '.recommend',
                re: '.refresh',
                status: this.status
            });
            slideRefreshFn.init();
            this.isScroll = slideRefreshFn.isScroll;
        },
        getData() {
            setTimeout(() => {
                const container = document.querySelector('.recommend');
                const re = document.querySelector('.refresh');
                container.style['transition'] = 'transform 0.6s ease';
                container.style['transform'] = 'translate(0, 0px)';
                re.style.opacity = 0;
                re.style.height = '3vw';
            }, 1000);
        },
        /* 获取首页焦点图 */
        getFocus() {
            getSwiper().then(res => {
                this.swiperList = res.data.data;
            });
        },
        getList() {
            getRecommendList().then(res => {
                let d = res.data.data;
                d.forEach(e => {
                    e.update_time = this.$moment(e.update_time).fromNow();
                });
                this.zones = d;
            });
        },
        vote(item) {
            if (item.isVote) {
                item.vote_count--;
                item.isVote = false;
            } else {
                item.vote_count++;
                item.isVote = true;
            }
        },
        postTitle() {}
    },
    watch: {
        'status.value': function(val) {
            switch (val) {
                case 0:
                    this.refreshText = 'pull to refresh';
                    return;
                case 1:
                    this.refreshText = 'release to refresh';
                    return;
                case 2:
                    this.refreshText = 'refreshing';
                    this.getData();
                    return;
            }
        }
    }
};
</script>

<style scoped lang="scss">
#recommend {
    position: relative;
}

.recommend {
    .swiper {
        width: 750px;
        height: 360px;
        .swiperItem {
            width: 750px;
            display: inline-block;
        }
        .tip {
            position: absolute;
            display: flex;
            justify-content: space-between;
            bottom: 0;
            padding: 0 36px;
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 28px;
            color: #000;
            background-color: #ffffff;
            opacity: 0.3;
        }
    }

    .circle {
        padding: 25px 36px;
        background: #fff;
        margin-top: 20px;
    }

    .zone {
        margin-top: 20px;
        background: #fff;
        padding: 25px 36px 0;
        .zoneHeader {
            line-height: 36px;
            .zoneName {
                font-size: 28px;
                color: #4d4d4d;
            }
            .zonePoster {
                font-size: 24px;
                color: #b3b3b3;
            }
        }

        .zoneTitle {
            font-size: 24px;
            line-height: 40px;
            color: #4d4d4d;
            font-weight: 600;
            margin: 10px 0;
        }

        .zoneComment {
            background-color: #f3f7f9;
            padding: 20px 30px;
            font-size: 24px;
            line-height: 36px;
            color: #808080;
        }

        .zoneFooter {
            @include flex-center-between;
            .zoneUpdateTime {
                font-size: 22px;
                line-height: 70px;
                color: #b3b3b3;
            }
            .zoneVoteComment {
                font-size: 22px;
                color: #b3b3b3;
                .voteCount {
                    margin: 0 14px 0 2px;
                    vertical-align: middle;
                }
                .svg-inline {
                    font-size: 24px;
                    vertical-align: middle;
                }
            }
        }

        .zoneImg {
            width: 100%;
            margin-bottom: 10px;
        }
    }

    .postTitle {
        position: fixed;
        bottom: 120px;
        left: calc(50vw - 130px);
        width: 260px;
        height: 90px;
        background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(#000000, #000000);
        background-blend-mode: normal, normal;
        box-shadow: 0px 0px 11.9px 0.1px rgba(0, 51, 109, 0.3);
        border-radius: 45px;
        font-size: 28px;
        letter-spacing: 2px;
        color: #808080;

        .fa-pen {
            color: #0088ff;
            margin-right: 10px;
        }
    }
}
</style>
