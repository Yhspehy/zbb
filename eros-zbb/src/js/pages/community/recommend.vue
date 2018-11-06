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

        <cell>
            <text class="circle">我的圈子</text>
        </cell>

        <cell v-for="(zone, idx) in newsList" :key="idx">
            <recommend-item :zone="zone"></recommend-item>
        </cell>

        <cell>
            <div class="postTitle">
                <text class="pen">&#xf304;</text>
                <text class="postTitleText">我要发帖</text>
            </div>
        </cell>
    </list>
</template>

<script>
import recommendItem from './components/recommentItem'

const domModule = weex.requireModule('dom')
const modal = weex.requireModule('modal')

export default {
    components: { recommendItem },
    data () {
        return {
            imgList: ['https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/', 'https://fakeimg.pl/750x360/'],
            newsList: null
        }
    },
    beforeCreate () {
        domModule.addRule('fontFace', {
            fontFamily: 'fontAwesome',
            src: "url('bmlocal://iconfont/fa-solid-900.ttf')"
        })
    },
    created () {
        this.$notice.loading.show()
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
        fetchNewList () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/community/recommend/list'
            }).then(
                res => {
                    this.newsList = res.data
                    this.$notice.loading.hide()
                },
                error => {
                    modal.alert({
                        message: error.errorMsg
                    })
                }
            )
        }
    }
}
</script>

<style scoped>
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

/* content */
.circle {
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 36px;
    padding-right: 36px;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    color: pink;
}

.postTitle {
    position: fixed;
    left: 240px;
    bottom: 80px;
    width: 260px;
    height: 90px;
    background-color: #ffffff;
    box-shadow: 0px 0px 11.9px 0.1px rgba(0, 51, 109, 0.3);
    border-radius: 45px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.postTitleText {
    font-size: 28px;
    letter-spacing: 2px;
    color: #808080;
}

.pen {
    font-family: fontAwesome;
    color: #0088ff;
    margin-right: 10px;
}

</style>
