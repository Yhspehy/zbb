<template>
    <div>
        <div class="cover">
            <image class="coverImg" src="https://fakeimg.pl/750x422/"></image>
            <!-- <image class="btn-play" src=""></image> -->
        </div>
        <div class="videoInfo">
            <div class="flex-row">
                <text class="title">{{video.title}}</text>
            </div>
            <div class="flex-row flex-between">
                <div class="flex-row">
                    <text class="text">播放量:</text>
                    <text class="text">{{video.playCount}}</text>
                    <text class="text time">{{createTime}}</text>
                </div>
                <div class="flex-row">
                    <div class="flex-row">
                        <text class="text icon">&#xf086;</text>
                        <text class="text">{{video.comment}}</text>
                    </div>
                    <div class="flex-row" @click="vote(video)">
                        <text class="text icon" :style="{'color': video.isVote ? '#f5303d' : '#b3b3b3'}">&#xf004;</text>
                        <text class="text" :style="{'color': video.isVote ? '#f5303d' : '#b3b3b3'}">{{video.vote}}</text>
                    </div>
                    <text class="text icon">&#xf064;</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

export default {
    props: {
        video: {
            require: true
        }
    },
    computed: {
        createTime () {
            return this.$moment(this.video.createTime).format('MM/DD HH:mm')
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    methods: {
        vote (item) {
            if (item.isVote) {
                item.vote_count--
                item.isVote = false
            } else {
                item.vote_count++
                item.isVote = true
            }
        }
    }
}

</script>

<style scoped>

.icon {
    font-family: fontAwesome;
    margin-left: 20px;
    font-size: 20px;
}

.coverImg {
    width: 750px;
    height: 422px;
}

.flex-row {
    flex-direction: row;
    align-items: center;
}

.flex-between {
    justify-content: space-between;
}

.videoInfo {
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.title {
    font-size: 28px;
    color: #4d4d4d;
    margin-bottom: 10px;
}

.text {
    font-size: 22px;
    color: #b3b3b3;
    line-height: 30px;
}

.time {
    margin-left: 20px;
}
</style>
