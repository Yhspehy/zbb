<template>
    <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <!-- Slide -->
        <cell>
            <slider class="slider" interval="3000" auto-play="true" :index="0" show-indicators="true">
                <div class="frame" v-for="(img, idx) in imgList" :key="idx">
                    <image class="image" :src="img"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
        </cell>

        <cell>
            <text class="circle">我的圈子</text>
        </cell>

        <cell class="zone" v-for="(zone, idx) in newsList" :key="idx">
            <div class="zoneHeader">
                <text class="zoneName">{{zone.name}}专区</text>
                <text class="zonePoster"> | {{zone.poster}}</text>
            </div>

            <text class="zoneTitle">{{zone.title}}</text>

            <image class="zoneImg" v-if="zone.img.length" :src="zone.img[0]"></image>

            <text class="zoneComment">{{zone.comment}}</text>

            <div class="zoneFooter">
                <text class="zoneUpdateTime">{{zone.update_time}}</text>
                <div class="zoneVoteComment">
                    <div class="zoneVoteCount" :style="{'color': zone.isVote ? '#f5303d' : '#b3b3b3'}" @click="vote(zone)">
                        <text class="icon">&#xf164;</text>
                        <text class="voteCount">{{zone.vote_count}}</text>
                    </div>
                </div>
            </div>
        </cell>
    </list>
</template>

<script>
// import recommendItem from './components/recommentItem';
const modal = weex.requireModule('modal');
const domModule = weex.requireModule('dom');

export default {
    // components: { recommendItem },
    data() {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/'],
            newsList: null
        };
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        });
    },
    created() {
        this.fetchNewList();
    },
    methods: {
        onrefresh() {
            setTimeout(() => {
                this.$refs['list'].refreshEnd();
            }, 2000);
        },
        loadMore() {
            setTimeout(() => {
                this.$refs['list'].loadMoreEnd();
            }, 2000);
        },
        fetchNewList() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/community/recommend/list'
            }).then(
                res => {
                    this.newsList = res.data;
                },
                error => {
                    modal.alert({
                        message: error.errorMsg
                    });
                }
            );
        },
        vote(item) {
            if (item.isVote) {
                item.vote_count--;
                item.isVote = false;
            } else {
                item.vote_count++;
                item.isVote = true;
            }
        }
    }
};
</script>

<style scoped>
/*----------  slide  ----------*/
.slider {
    width: 750px;
    height: 360px;
}
.image {
    width: 750px;
    height: 360px;
}
.frame {
    width: 750px;
    height: 360px;
}

.indicator {
    width: 750px;
    height: 360px;
    item-color: #0088ff;
    item-selected-color: rgb(223, 82, 164);
    item-size: 10px;
    position: absolute;
    top: 150px;
}

/* content */
.circle {
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #fff;
    margin-top: 20px;
    color: pink;
}

/* zone */
.icon {
    font-family: fontAwesome;
    color: rgb(179, 179, 179);
    margin-right: 30px;
    font-size: 26px;
}

.zone {
    margin-top: 20px;
    background-color: #fff;
    padding-top: 25px;
    padding-left: 36px;
    padding-right: 36px;
}

.zoneHeader {
    line-height: 36px;
    flex-direction: row;
}

.zoneTitle {
    font-size: 24px;
    line-height: 40px;
    color: #4d4d4d;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
}

.zoneComment {
    background-color: #f3f7f9;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 24px;
    line-height: 36px;
    color: #808080;
}

.zoneImg {
    margin-bottom: 10px;
    width: 750px;
}

.zoneFooter {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 68px;
}

.zoneUpdateTime {
    font-size: 22px;
    color: #b3b3b3;
}
.zoneVoteComment,
.zoneVoteCount {
    flex-direction: row;
    align-items: center;
}
.voteCount {
    margin-right: 14px;
    margin-left: 2px;
    font-size: 22px;
    color: rgb(179, 179, 179);
}
.zoneName {
    font-size: 28px;
    color: #4d4d4d;
}
.zonePoster {
    font-size: 24px;
    color: #b3b3b3;
}
</style>
