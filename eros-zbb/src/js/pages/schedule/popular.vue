<template>
    <!-- <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <cell v-for="(val, key) in matchList" :key="key">
            <time-bar :currentDate="key"></time-bar>
            <match-item v-for="(el, elIdx) in val" :key="elIdx" :matchData="el"></match-item>
        </cell>
    </list> -->

    <scroller ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <div v-for="(val, key) in matchList" :key="key">
            <div style="position: sticky;">
                <time-bar :currentDate="key"></time-bar>
            </div>
            <match-item v-for="(el, elIdx) in val" :key="elIdx" :matchData="el"></match-item>
        </div>
    </scroller>
</template>

<script>
import timeBar from './components/timeBar'
import matchItem from './components/matchItem'

var modal = weex.requireModule('modal')
export default {
    components: {
        timeBar,
        matchItem
    },
    data () {
        return {
            currentDate: '',
            keys: [],
            matchList: {}
        }
    },
    created () {
        this.$notice.loading.show()
        this.fetchPopularList()
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
        fetchPopularList () {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/popularList'
            }).then(
                res => {
                    this.keys = Object.keys(res.data)
                    this.keys.sort((a, b) => Date.parse(a) - Date.parse(b))
                    this.keys.forEach(key => {
                        this.$set(this.matchList, key, res.data[key])
                    })
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
</style>
