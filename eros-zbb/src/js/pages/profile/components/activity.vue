<template>
    <div class="active">
        <text class="title">热门活动</text>

        <!-- <scroller class="scroller" scroll-direction='horizontal' :show-scrollbar="false">
            <image v-for="(img, idx) in hotActivity" :key="idx" class="image" :src="img.img"></image>
        </scroller> -->

         <wxc-ep-slider :slider-id="sliderId"
                   :card-length='cardLength'
                   :card-s="cardSize"
                   :container-s="containerSize"
                   :select-index="1"
                   @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
            <image
                v-for="(img, index) in hotActivity"
                :src="img.img"
                :key="index"
                :slot="`card${index}_${sliderId}`"
                class="image">
            </image>
        </wxc-ep-slider>
    </div>
</template>

<script>
import { WxcEpSlider } from 'weex-ui'

export default {
    components: { WxcEpSlider },
    data () {
        return {
            hotActivity: [
                {
                    img: 'http://temp.im/500x280',
                    to: ''
                },
                {
                    img: 'http://temp.im/500x280',
                    to: ''
                },
                {
                    img: 'http://temp.im/500x280',
                    to: ''
                },
                {
                    img: 'http://temp.im/500x280',
                    to: ''
                }
            ],
            sliderId: 1,
            cardLength: 4,
            containerSize: {
                width: 698
            },
            cardSize: {
                width: 500,
                height: 280,
                spacing: 0,
                scale: 0.8
            }
        }
    },
    methods: {
        wxcEpSliderCurrentIndexSelected (e) {
            const index = e.currentIndex
        }
    }
}
</script>

<style scoped>
.active {
    padding-left: 26px;
    padding-right: 26px;
    padding-bottom: 20px;
    background-color: #ffffff;
}

.scroller {
    height: 140px;
    flex-direction: row;
}

.title {
    font-size: 28px;
    color: #4d4d4d;
    line-height: 66px;
}

.image {
    width: 500px;
    height: 280px;
}
</style>
