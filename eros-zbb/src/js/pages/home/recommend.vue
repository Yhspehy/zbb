<template>
    <div class="home">
        <status-bar></status-bar>

        <home-header></home-header>

        <div class="container">
            <!-- slide -->
            <slider class="slider" interval="3000" auto-play="true" :index="0" show-indicators="true">
                <div class="frame" v-for="(img, idx) in imgList" :key="idx">
                    <image class="image" :src="img"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>

            <text class="title">Hello Eros121</text>
            <text class="desc">一套 Vue 代码，两端原生应用。</text>
            <text>{{res}}</text>
        </div>
    </div>
</template>

<script>
import statusBar from '../components/statusBar';
import homeHeader from './components/header';

var modal = weex.requireModule('modal')
export default {
    components: {
        statusBar,
        homeHeader
    },
    data() {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/'],
            list: 1,
            res: null
        };
    },
    mounted() {
        this.list = weex.config.eros.jsServer;
        this.$fetch({
            method: 'POST',
            name: 'COMMON.getInfo',
            data: {
                count: 1
            }
        }).then(
            res => {
                this.$notice.toast({
                    message: res
                });
                this.res = res;
            },
            error => {
                modal.alert({
                    message: error.errorMsg
                });
            }
        );
    }
};
</script>

<style scoped>
.title {
    font-size: 100px;
}

.desc {
    font-size: 30px;
}

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
    item-color: rgb(204, 226, 122);
    item-selected-color: rgb(223, 82, 164);
    item-size: 10px;
    position: absolute;
    top: 150px;
}
</style>
