<template>
    <div class="active">
        <text class="title">热门活动</text>

        <scroller class="scroller" scroll-direction='horizontal' :show-scrollbar="false">
            <image v-for="(img, idx) in hotActivity" :key="idx" class="image" :src="img.img"></image>
        </scroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotActivity: [
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                },
                {
                    img: 'http://temp.im/125x70',
                    to: ''
                }
            ]
        };
    }
};
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
    width: 250px;
    height: 140px;
    margin-right: 20px;
}
</style>
