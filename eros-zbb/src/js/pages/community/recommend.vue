<template>
    <div class="community">
        <status-bar></status-bar>

        <div class="container">
            <!-- slide -->
            <slider class="slider" ref="item" interval="3000" auto-play="false" :index="2">
                <div class="frame" v-for="(img, idx) in imgList" :key="idx">
                    <image class="image" :src="img"></image>
                </div>
            </slider>

            <text class="title">Hello Eros1</text>
            <text class="desc">一套 Vue 代码，两端原生应用。</text>
        </div>
    </div>
</template>

<script>
import statusBar from '../components/statusBar'

export default {
    components: { statusBar },
    data () {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/']
        }
    }
};
</script>

<style scoped>
.container {
    /* display: flex; */
    /* flex: 1; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
}
.title {
    font-size: 100px;
}
.desc {
    font-size: 30px;
}
</style>
