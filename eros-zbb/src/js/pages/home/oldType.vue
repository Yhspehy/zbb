<template>
    <div class="home">
        <!-- Fit IphoneX -->
        <status-bar></status-bar>

        <!-- HeaderBar -->
        <home-header></home-header>

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

            <!-- homeMatch -->
            <cell>
                <home-match v-if="liveTrailList" :liveTrailList="liveTrailList"></home-match>
            </cell>

            <cell>
                <text class="title">Hello Eros</text>
                <text class="desc">一套 Vue 代码，两端原生应用。</text>
            </cell>
        </list>
    </div>
</template>

<script>
import statusBar from '../components/statusBar'
import homeHeader from './components/header'
import homeMatch from './components/homeMatch'

var modal = weex.requireModule('modal')
export default {
    components: {
        statusBar,
        homeHeader,
        homeMatch
    },
    data () {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/'],
            list: 1,
            liveTrailList: null
        }
    },
    mounted () {
        this.list = weex.config.eros.jsServer
        this.$fetch({
            method: 'GET',
            url: 'http://192.168.1.7:8889/dist/mock/test/homeMatch.json'
        }).then(
            res => {
                this.liveTrailList = res.data
            },
            error => {
                modal.alert({
                    message: error.errorMsg
                })
            }
        )
    },
    methods: {
        onrefresh () {
            setTimeout(() => {
                this.$refs['list'].refreshEnd()
            }, 2000)
        },
        loadMore () {
            setTimeout(() => {
                this.$refs['list'].loadMoreEnd()
            }, 2000)
        }
    }

}
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
    item-color: #0088ff;
    item-selected-color: rgb(223, 82, 164);
    item-size: 10px;
    position: absolute;
    top: 150px;
}
</style>
