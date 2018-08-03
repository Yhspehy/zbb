<template>
    <div class="schedule">
        <div v-for="item in leagueList" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'schedule_match',
    data() {
        return {
            basketballList: [],
            footballList: []
        };
    },
    created() {},
    methods: {}
};
</script>

<style scoped lang="scss">
</style>
