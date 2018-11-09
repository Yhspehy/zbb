<template>
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

        <cell style="margin-top: 20px" v-for="(item, idx) in newsList" :key="idx">
             <wxc-pan-item @wxcPanItemPan="wxcPanItemPan">
                <new-item :item="item" :hasBorder="idx>0"></new-item>
             </wxc-pan-item>
        </cell>
    </list>
</template>

<script>
import homeMatch from './components/homeMatch'
import newItem from './components/newItem'
import { WxcPanItem, BindEnv } from 'weex-ui'
var modal = weex.requireModule('modal')
export default {
    components: {
        homeMatch,
        newItem,
        WxcPanItem
    },
    props: ['ref'],
    data () {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/'],
            liveTrailList: null,
            newsList: null
        }
    },
    created () {
        this.$notice.loading.show()
        this.fetchHomeMatch()
        this.fetchNewList()
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
        },
        fetchHomeMatch () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/home/recommend/liveTrail'
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
        fetchNewList () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/news/newsList'
            }).then(
                res => {
                    this.newsList = res.data.news_list
                    this.$notice.loading.hide()
                },
                error => {
                    modal.alert({
                        message: error.errorMsg
                    })
                }
            )
        },
        wxcPanItemPan (e) {
            if (BindEnv.supportsEBForAndroid()) {
                this.ref.bindExp(e.element)
            }
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
