<template>
    <div class="popular">
        <index-list ref="list" :data="popularObj" :startY="y" @onPullingUp="onPullingUp" @onPullingDown="onPullingDown"></index-list>
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
            pageIndex: 0,
            y: null
        };
    },
    created() {
        this.y = this.$route.meta.scrollHeight || null;
        if (Object.keys(this.$store.state.schedule.popularList).length) {
            this.popularObj = this.$store.state.schedule.popularList;
        } else {
            this.getPopularList();
        }
    },
    methods: {
        async getPopularList(time = this.$moment(), type = 'now') {
            let res = await this.$store.dispatch('schedule/GetPopularList', { time, type });
            this.popularObj = res;
            this.pageIndex++;
        },
        onPullingUp(date) {
            let lastDate = date;
            if (this.pageIndex < 5) {
                this.getPopularList(lastDate, 'after');
            } else {
                this.$refs.list.$refs.scroll.forceUpdate(false);
            }
        },
        onPullingDown(date) {
            let firstDate = date;
            this.getPopularList(firstDate, 'before');
        }
    },
    beforeRouteUpdate(to, from, next) {
        let height = this.$refs.list.$refs.scroll.scroll.y;
        from.meta.scrollHeight = height;
        next();
    },
    beforeRouteLeave(to, from, next) {
        let height = this.$refs.list.$refs.scroll.scroll.y;
        from.meta.scrollHeight = height;
        next();
    }
};
</script>

<style scoped lang="scss">
.popular {
    position: relative;
    height: calc(100vh - 182px);
}
</style>
