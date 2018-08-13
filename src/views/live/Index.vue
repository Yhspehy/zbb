<template>
    <div class="live">
        <video-js id="live" class="vjs-default-skin" controls preload="auto" :width="width" height="268">
            <source src="http://secure-streams.akamaized.net/rt-fr/index2500.m3u8 " type="application/x-mpegURL">
        </video-js>

        
        <div class="liveNavContent">
            <div></div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import videojs from 'video.js';
import '@videojs/http-streaming';
export default {
    name: 'live',
    data() {
        return {
            width: window.screen.width,
            navList: []
        };
    },
    created() {},
    mounted() {
        videojs('live');
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../../../public/style/video.css';
</style>
