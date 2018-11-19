<template>
    <div class="zone">
        <div class="zoneHeader">
            <text class="zoneName">{{zone.name}}专区</text>
            <text class="zonePoster"> | {{zone.poster}}</text>
        </div>

        <text class="zoneTitle">{{zone.title}}</text>

        <image class="zoneImg" v-if="zone.img.length" :src="zone.img[0]"></image>

        <text class="zoneComment">{{zone.comment}}</text>

        <div class="zoneFooter">
            <text class="zoneUpdateTime">{{updateTime}}</text>
            <div class="zoneVoteComment">
                <div class="zoneVoteCount" @click="vote(zone)">
                    <text class="icon" :style="{'color': zone.isVote ? '#f5303d' : '#b3b3b3'}">&#xf164;</text>
                    <text class="voteCount" :style="{'color': zone.isVote ? '#f5303d' : '#b3b3b3'}">{{zone.vote_count}}</text>
                </div>
                <text class="icon" style="font-size: 28px; top:1px;">&#xf086;</text>
            </div>
        </div>
    </div>
</template>

<script>
const domModule = weex.requireModule('dom')

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
        })
    },
    computed: {
        updateTime() {
            return this.$moment(this.zone.update_time)
                .locale('zh-cn')
                .fromNow()
        }
    },
    methods: {
        vote(item) {
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
/* zone */
.icon {
    font-family: fontAwesome;
    color: rgb(179, 179, 179);
    font-size: 26px;
}

.zone {
    margin-bottom: 20px;
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
    margin-right: 20px;
    margin-left: 4px;
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
