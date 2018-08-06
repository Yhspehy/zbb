<template>
    <div class="scheduleLeague">
        <header-bar :text="type"></header-bar>

        <top-nav
            :navList="navList"
            :chosenNav.sync="chosenNav"
            :replace="true"
            top="10vw"
            padding="4.267vw 4.8vw 2.667vw">
        </top-nav>

        <div class="scheduleLeagueContent">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar';
import TopNav from '@/components/TopNav';

export default {
    name: 'schedule_league',
    components: { HeaderBar, TopNav },
    data() {
        return {
            type: '',
            chosenNav: '赛程',
            navList: [
                {
                    name: '赛程',
                    routeName: 'schedule_league_match'
                },
                {
                    name: '季后赛',
                    routeName: 'schedule_league_playoff'
                },
                {
                    name: '排行',
                    routeName: 'schedule_league_teamRank'
                },
                {
                    name: '球员榜',
                    routeName: 'schedule_league_playerRank'
                }
            ]
        };
    },
    created() {
        this.type = this.$store.state.schedule.matchLeagueName;
    },
    methods: {}
};
</script>

<style scoped lang="scss">
.scheduleLeagueContent {
    margin-top: 167px;
}
</style>
