<template>
    <div>
        <home-header></home-header>

        <scroller class="home-content" @loadmore="fetch">
            <!-- 下拉刷新 -->
            <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
                <text class="indicator-text">Refreshing ...</text>
                <loading-indicator class="indicator"></loading-i>
            </refresh>

            <!-- slide -->
            <slider class="slider" ref="item" interval="3000" auto-play="false" :index="2">
                <div class="frame" v-for="(img, idx) in imgList" :key="idx">
                    <image class="image" :src="img"></image>
                </div>
            </slider>

            <div class="list-content">
                <!-- 列表内容 -->
                <div v-for="(item, i) in lists" :key="i">
                    <news-item :item="item" ></news-item>
                </div>
            </div>

        </scroller>

        <!-- <recycle-list for="(item, i) in lists" @loadmore="fetch">
            <cell-slot>
                <news-item :item="item" :key="i"></news-item>
            </cell-slot>
        </recycle-list> -->

        <text @click="goto(0)" class="button">Go to 0</text>

        <home-footer></home-footer>

    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeFooter from './components/HomeFooter'
import newsItem from './components/newsItem'
import newsListData from './mock/newsList.json'
import cloneDeep from 'lodash/cloneDeep'
const dom = weex.requireModule('dom')
const modal = weex.requireModule('modal')

export default {
    components: { HomeHeader, newsItem, HomeFooter },
    data () {
        return {
            refreshing: false,
            refreshHeight: '180px',
            headerBar: ['推荐', '集锦', '直播', '11', '22', '33', '44', '5', '6'],
            lists: [],
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/']
        }
    },
    created () {
        this.lists = cloneDeep(newsListData.data.news_list)
    },
    methods: {
        onrefresh (event) {
            modal.toast({ message: 'Refreshing', duration: 1 })
            this.refreshing = true
            setTimeout(() => {
                this.lists.pop()
                this.refreshing = false
            }, 2000)
        },
        onpullingdown (event) {
            console.log('dy: ' + event.dy)
            console.log('pullingDistance: ' + event.pullingDistance)
            console.log('viewHeight: ' + event.viewHeight)
            console.log('type: ' + event.type)
        },
        scroll (e) {
            console.log(e)
        },
        fetch () {
            const newData = cloneDeep(newsListData.data.news_list)
            modal.toast({ message: `loadmore (${this.lists.length + newData.length})`, duration: 0.5 })
            setTimeout(() => {
                this.lists.push(...newData)
            }, 0)
        },
        goto (index) {
            dom.scrollToElement(this.$refs.item, {})
        }
    }
}
</script>

<style scoped>
.home-content {
    background-color: #f3f7f9;
    flex: 1;
}

/*----------  下拉刷新  ----------*/
.refresh {
    width: 750px;
    height: 180px;
    background-color: #333333;
    align-items: center;
}

.indicator-text {
    color: rgb(170, 15, 15);
    font-size: 42px;
    text-align: center;
}
.indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: #0000ff;
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

.aa {
    width: 750px;
    height: 400px;
    margin-bottom: 40px;
    background-color: rgb(230, 219, 184);
}
</style>
