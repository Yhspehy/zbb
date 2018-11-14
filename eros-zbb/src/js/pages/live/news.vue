<template>
    <list class="live_news" ref="list" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <cell v-if="newsList.length">
            <text class="header">相关新闻</text>
        </cell>

        <cell v-for="(item, idx) in newsList" :key="idx">
            <new-item :item="item" :hasBorder="idx>0"></new-item>
        </cell>
    </list>
</template>

<script>
import newItem from '../components/newItem'

export default {
    name: 'live_news',
    components: {
        newItem
    },
    data () {
        return {
            newsList: null
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
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/news/newsList'
            }).then(
                res => {
                    this.newsList = res.data.news_list
                    this.$notice.loading.hide()
                }
            )
        }
    }
}
</script>

<style scoped>
.live_news {
    background-color: #f3f7f9;
}

.header {
	font-size: 28px;
	line-height: 36px;
	color: #4d4d4d;
    padding-left: 36px;
    padding-top: 20px;
    font-weight: bold;
    background-color: #ffffff;
}
</style>
