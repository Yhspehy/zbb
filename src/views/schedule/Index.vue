<template>
    <div class="schedule">
        <top-nav :navList="navList" :chosenNav="chosenNav" @chosenNav="chooseNav"></top-nav>

        <div class="scheduleContent">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
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
        console.log('schedule created');
    },
    activated() {
        console.log('schedule activated');
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
                if (val === 'schedule') {
                    this.chosenNav = this.$store.state.schedule.chosenNav;
                    this.$router.replace({
                        name: this.chosenNav
                    });
                } else {
                    let fit = find(this.navList, function(e) {
                        return val === e.routeName;
                    });
                    if (fit && fit.routeName && fit.routeName !== this.chosenNav) {
                        this.chooseNav(fit.routeName);
                    }
                }
            }
        }
    }
};
</script>

<style scoped lang="scss">
.schedule {
    overflow: hidden;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

.scheduleContent {
    height: calc(100% - 182px);
    margin-top: 92px;
    background-color: $bg-body;
}
</style>
