<template>
    <list class="live_review">
        <cell>
            <match-info :data="review"></match-info>
        </cell>

        <cell v-if="newsList.length">
            <text class="header">相关新闻</text>
        </cell>

        <cell v-for="(item, idx) in newsList" :key="idx">
            <new-item :item="item" :hasBorder="idx>0"></new-item>
        </cell>
    </list>
</template>

<script>
import matchInfo from './components/matchInfo'
import newItem from '../home/components/newItem'

export default {
    components: {
        matchInfo,
        newItem
    },
    data () {
        return {
            review: {},
            newsList: []
        }
    },
    created () {
        this.$notice.loading.show()
        Promise.all([this.getData(), this.fetchNewList()]).then(([review, news]) => {
            this.review = review.data
            this.newsList = news.data.news_list
            this.$notice.loading.hide()
        })
    },
    methods: {
        getData () {
            return this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/live/review/1'
            })
        },
        fetchNewList () {
            return this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/news/newsList'
            })
        }
    }
}
</script>

<style scoped>
.live_review {
    background-color: #fafafa;
}

.header {
    font-size: 28px;
    line-height: 36px;
    color: #4d4d4d;
    padding-left: 36px;
    padding-top: 20px;
    font-weight: bold;
    background-color: #ffffff;
    margin-top: 20px;
}
</style>
