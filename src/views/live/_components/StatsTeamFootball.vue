<template>
    <div>
        <div v-for="item in data" :key="item.text">
             <stats-team-item
                v-if="item.text === '控球率'"
                :title="item.text"
                :home="item.home"
                :away="item.away"
                :lineHome="Number(item.home.match(/^(.*)%/)[1])"
                :lineAway="Number(item.away.match(/^(.*)%/)[1])">
            </stats-team-item>
            <stats-team-item
                v-else
                :title="item.text"
                :home="item.home"
                :away="item.away">
            </stats-team-item>
        </div>
    </div>
</template>

<script>
import statsTeamItem from './StatsTeamItem';

export default {
    name: 'live_statsTeamFootball',
    components: { statsTeamItem },
    props: {
        data: {
            type: Array,
            require: true
        }
    }
};
</script>

<style scoped lang="scss">
</style>
