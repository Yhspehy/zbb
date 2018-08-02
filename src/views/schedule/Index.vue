<template>
    <div class="schedule">
        <div class="topNav">
            <router-link class="navItem"
                 :class="{'navActive': chosenNav === item.name}"
                 @click.native="clickNav(item.name)"
                 :to="{'name': item.routeName}"
                 v-for="item in navList" :key="item.name">
                {{ item.name }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import find from 'lodash/find';
export default {
    name: 'schedule',
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
        let routeName = this.$route.name;
        let fit = find(this.navList, function(e) {
            return routeName === e.routeName;
        });
        this.clickNav(fit.name);
    },
    activated() {
        console.log('activated');
        this.chosenNav = this.$store.state.schedule.chosenNav;
    },
    methods: {
        clickNav(name) {
            this.chosenNav = name;
            this.$store.commit('schedule/SET_CHOSENNAV', name);
        }
    }
};
</script>

<style scoped lang="scss">
.schedule {
    .topNav {
        display: flex;
        padding: 32px 204px 20px;
        justify-content: space-around;
        .navItem {
            font-size: 30px;
            color: $font-color-grey;
        }
        .navActive {
            font-size: 36px;
            color: #0099ff;
            position: relative;
            &:after {
                content: '';
                position: absolute;
                height: 4px;
                width: 30px;
                background: #0099ff;
                bottom: -10px;
                left: 21px;
            }
        }
    }
}
</style>
