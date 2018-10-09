<template>
    <div class="scheduleLeague">
        <header-bar :text="type"></header-bar>

        <top-nav
            :navList="navList"
            :chosenNav="chosenNav"
            @chooseNav="chooseNav"
            :replace="true"
            top="10vw"
            normalFontSize="3.73vw"
            activeFontSize="4vw"
            padding="4.267vw 4.8vw 2.667vw">
        </top-nav>

        <div class="scheduleLeagueContent theFooterPaddingBottom">
            <router-view></router-view>
        </div>

        <v-footer></v-footer>

    </div>
</template>

<script>
import vFooter from '@/components/TheFooter';
import HeaderBar from '@/components/HeaderBar';
import TopNav from '@/components/TopNav';
import find from 'lodash/find';

export default {
    name: 'schedule_league',
    components: { vFooter, HeaderBar, TopNav },
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
        const self = this;
        this.type = this.$store.state.schedule.matchLeagueName || 'NBA';
        this.chosenNav = find(this.navList, function(e) {
            return e.routeName === self.$route.matched[1].name;
        }).routeName;
    },
    methods: {
        chooseNav(name) {
            this.chosenNav = name;
        }
    }
};
</script>

<style scoped lang="scss">
.scheduleLeague {
    overflow: hidden;
    position: relative;
}

.scheduleLeagueContent {
    margin-top: 162px;
}
</style>
