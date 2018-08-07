<template>
    <div class="schedule">
        <top-nav :navList="navList" :chosenNav="chosenNav" @chosenNav="chooseNav"></top-nav>

        <div class="scheduleContent">
            <router-view></router-view>
        </div>

        <v-footer></v-footer>
    </div>
</template>

<script>
import find from 'lodash/find';
import topNav from '@/components/TopNav.vue';
import vFooter from '@/components/TheFooter';

export default {
    name: 'schedule',
    components: {
        topNav,
        vFooter
    },
    data() {
        return {
            chosenNav: '',
            navList: [
                {
                    name: '赛事',
                    routeName: 'schedule_match'
                },
                {
                    name: '热门',
                    routeName: 'schedule_popular'
                },
                {
                    name: '关注',
                    routeName: 'schedule_follow'
                }
            ]
        };
    },
    created() {
        console.log('created');
    },
    activated() {
        console.log('activated');
        this.chosenNav = this.$store.state.schedule.chosenNav;
    },
    mounted() {},
    methods: {
        chooseNav(name) {
            this.chosenNav = name;
            this.$store.commit('schedule/SET_CHOSENNAV', name);
        }
    },
    watch: {
        '$route.name': {
            immediate: true,
            handler: function(val) {
                let fit = find(this.navList, function(e) {
                    return val === e.routeName;
                });
                if (fit && fit.name) {
                    this.chosenNav = fit.name;
                    this.$store.commit('schedule/SET_CHOSENNAV', fit.name);
                }
            }
        }
    }
};
</script>

<style scoped lang="scss">
.scheduleContent {
    margin-top: 92px;
}
</style>
