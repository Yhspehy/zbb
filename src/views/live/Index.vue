<template>
    <div class="live">
        <!-- <video-js id="live" class="vjs-default-skin" controls preload="auto" :width="width" height="268">
            <source src="http://secure-streams.akamaized.net/rt-fr/index2500.m3u8 " type="application/x-mpegURL">
        </video-js> -->

        <div class="liveNavContent">
            <top-nav
                :navList="navList[status]"
                :chosenNav="chosenNav"
                :positionFixed="false"
                normalFontSize="3.73vw"
                activeFontSize="4vw"
                padding="2vw 5.2vw 3.5vw"
                @chosenNav="chooseNav">
            </top-nav>


            <router-view></router-view>
        </div>

    </div>
</template>

<script>
// import videojs from 'video.js';
// import '@videojs/http-streaming';
import topNav from '@/components/TopNav.vue';
import find from 'lodash/find';

export default {
    name: 'live',
    components: { topNav },
    data() {
        return {
            width: window.screen.width,
            // status <0:未开始 1:进行中 2:已结束>
            status: 1,
            chosenNav: '',
            firstNavType: [
                {
                    name: '直播室',
                    routeName: 'live_liveRoom'
                },
                {
                    name: '聊天室',
                    routeName: 'live_chatRoom'
                },
                {
                    name: '资讯',
                    routeName: 'live_news'
                },
                {
                    name: '数据',
                    routeName: 'live_stats'
                },
                {
                    name: '竞猜',
                    routeName: 'live_quiz'
                }
            ],
            secondNavType: [
                {
                    name: '回顾',
                    routeName: 'live_review'
                },
                {
                    name: '赛况',
                    routeName: 'live_liveRoom'
                },
                {
                    name: '热议',
                    routeName: 'live_hotComments'
                },
                {
                    name: '数据',
                    routeName: 'live_stats'
                },
                {
                    name: '竞猜',
                    routeName: 'live_quiz'
                }
            ]
        };
    },
    computed: {
        navList() {
            return {
                0: this.firstNavType,
                1: this.firstNavType,
                2: this.secondNavType
            };
        }
    },
    created() {
        var self = this;
        if (this.status < 2) {
            if (this.$route.name === 'live') {
                this.$router.replace({ name: 'live_liveRoom' });
                this.chosenNav = 'live_liveRoom';
            } else {
                this.chosenNav = find(this.firstNavType, function(e) {
                    return e.routeName === self.$route.name;
                }).routeName;
            }
        } else {
            if (this.$route.name === 'live') {
                this.$router.replace({ name: 'live_review' });
                this.chosenNav = 'live_review';
            } else {
                this.chosenNav = find(this.secondNavType, function(e) {
                    return e.routeName === self.$route.name;
                }).routeName;
            }
        }
    },
    mounted() {
        // videojs('live');
    },
    methods: {
        chooseNav(name) {
            this.chosenNav = name;
        }
    },
    watch: {
        '$route.name': {
            immediate: true,
            handler: function(val) {
                let fit = find(this.navList[this.status], function(e) {
                    return val === e.routeName;
                });
                if (fit && fit.name) {
                    this.chosenNav = fit.routeName;
                }
            }
        }
    }
};</script>

<style scoped lang="scss">
@import '../../../public/style/video.css';
</style>
