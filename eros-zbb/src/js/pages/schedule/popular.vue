<template>
    <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <cell v-for="(val, key) in matchList" :key="key">
            <time-bar :currentDate="key"></time-bar>
            <match-item v-for="(el, elIdx) in val" :key="elIdx" :matchData="el"></match-item>
        </cell>
    </list>
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
            keys: [],
            matchList: {}
        }
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
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/schedule/popularList'
            }).then(
                res => {
                    this.keys = Object.keys(res.data)
                    this.keys.sort((a, b) => {
                        return Date.parse(a) > Date.parse(b)
                    })
                    this.keys.forEach(key => {
                        this.$set(this.matchList, key, res.data[key])
                    })
                    this.$notice.loading.hide()
                    // this.matchList = res.data
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
