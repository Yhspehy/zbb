<template>
    <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <!-- Slide -->
        <cell>
            <wxc-pan-item @wxcPanItemPan="wxcPanItemPan">
                 <video-item
                    v-for="video in videoList"
                    :key="video.highlights_id"
                    :video="video">
                </video-item>
            </wxc-pan-item>
        </cell>
    </list>
</template>

<script>
import { WxcPanItem, BindEnv } from 'weex-ui'

import videoItem from './components/videoItem'
export default {
    components: {
        videoItem,
        WxcPanItem
    },
    props: ['ref'],
    data () {
        return {
            videoList: null
        }
    },
    created () {
        this.$notice.loading.show()
    },
    mounted () {
        this.$fetch({
            method: 'GET',
            url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/home/highLights/list'
        }).then(
            res => {
                this.videoList = res.data
                this.$notice.loading.hide()
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
