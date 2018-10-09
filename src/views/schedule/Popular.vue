<template>
    <div class="popular">
        <index-list
            :data="popularObj"
            :isNoMoreData="isNoMoreData"
            @onPullingUp="onPullingUp"
            @onPullingDown="onPullingDown">
        </index-list>
    </div>
</template> 

<script>
/**
 *
 * 注意修改mock里的数据，一定要有当前日期的数据
 *
 *
 */
'use strict';
import IndexList from './_components/IndexList';
export default {
    name: 'schedule_popular',
    components: { IndexList },
    data() {
        return {
            popularObj: {},
            pageIndex: 1,
            isNoMoreData: false
        };
    },
    created() {
        if (Object.keys(this.$store.state.schedule.popularList).length) {
            this.popularObj = this.$store.state.schedule.popularList;
        } else {
            this.getPopularList();
        }
    },
    activated() {
        console.log('popular');
    },
    methods: {
        async getPopularList(time = this.$moment(), type = 'now') {
            let res = await this.$store.dispatch('schedule/GetPopularList', { time, type });
            this.popularObj = res;
            this.pageIndex++;
        },
        onPullingUp(date) {
            let lastDate = date;
            if (this.pageIndex < 3) {
                this.getPopularList(lastDate, 'after');
            } else {
                this.isNoMoreData = true;
            }
        },
        onPullingDown(date) {
            let firstDate = date;
            this.getPopularList(firstDate, 'before');
        }
    }
};
</script>

<style scoped lang="scss">
.popular {
    position: relative;
    height: 100%;
    flex: 1;
}
</style>
