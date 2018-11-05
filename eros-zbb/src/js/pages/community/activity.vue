<template>
    <list ref="list" class="container" :showRefresh="true" @refresh="onrefresh" :showLoadMore="true" loadingMoreTitle="显示更多信息" @loadMore="loadMore">
        <cell v-for="(zone, idx) in zoneList" :key="idx">
            <recommend-item :zone="zone"></recommend-item>
        </cell>
    </list>
</template>

<script>
import recommendItem from './components/recommentItem';

export default {
    components: { recommendItem },
    data() {
        return {
            zoneList: null
        };
    },
    created() {
        this.fetchNewList();
    },
    methods: {
        onrefresh() {
            setTimeout(() => {
                this.$refs['list'].refreshEnd();
            }, 2000);
        },
        loadMore() {
            setTimeout(() => {
                this.$refs['list'].loadMoreEnd();
            }, 2000);
        },
        fetchNewList() {
            this.$fetch({
                method: 'GET',
                url: 'https://www.easy-mock.com/mock/5bc9ab30feff9e7d8b0994c7/zbb/community/recommend/list'
            }).then(
                res => {
                    this.zoneList = res.data;
                }
            );
        }
    }
};
</script>

<style scoped>
</style>
