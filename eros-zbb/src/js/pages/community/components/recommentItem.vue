<template>
    <div class="zone">
        <div class="zoneHeader">
            <text class="zoneName">{{zone.name}}专区</text>
            <text class="zonePoster"> | {{zone.poster}}</text>
        </div>

        <text class="zoneTitle">{{zone.title}}</text>

        <img class="zoneImg" v-if="zone.img.length" :src="zone.img[0]">

        <text class="zoneComment">{{zone.comment}}</text>

        <div class="zoneFooter">
            <text class="zoneUpdateTime">{{zone.update_time}}</text>
            <text class="zoneVoteComment">
                <text class="zoneVoteCount" :style="{'color': zone.isVote ? '#f5303d' : '#b3b3b3'}" @click="vote(zone)">
                    <i class="far fa-thumbs-up"></i>
                    <text class="voteCount">{{zone.vote_count}}</text>
                </text>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline">
                    <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" class=""></path>
                </svg>
            </text>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom');

export default {
    props: {
        zone: {
            require: true
        }
    },
    beforeCreate() {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fontawesome-webfont.ttf')"
        });
    }
};
</script>

<style scoped>
.icon {
    font-family: fontAwesome;
    color: #ffffff;
    margin-right: 30px;
    font-size: 40px;
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

.zoneFooter {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.zoneImg {
    margin-bottom: 10px;
}
.zoneUpdateTime {
    font-size: 22px;
    line-height: 70px;
    color: #b3b3b3;
}
.zoneVoteComment {
    font-size: 22px;
    color: #b3b3b3;
}
.voteCount {
    margin-right: 14px;
    margin-left: 2px;
    vertical-align: middle;
}
.svg-inline {
    font-size: 24px;
    vertical-align: middle;
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
