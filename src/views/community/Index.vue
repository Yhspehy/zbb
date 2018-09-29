<template>
    <div class="community">
         <top-nav :navList="navList" :chosenNav="chosenNav" @chosenNav="chooseNav"></top-nav>

         <div class="communityContent">
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
    name: 'community',
    components: {
        topNav,
        vFooter
    },
    data() {
        return {
            chosenNav: '',
            navList: [
                {
                    name: '推荐',
                    routeName: 'community_recommend'
                },
                {
                    name: '圈子',
                    routeName: 'community_circle'
                },
                {
                    name: '活动',
                    routeName: 'community_activity'
                }
            ]
        };
    },
    created() {
        console.log('community created');
    },
    mounted() {},
    methods: {
        chooseNav(name) {
            this.chosenNav = name;
            this.$store.commit('community/SET_CHOSENNAV', name);
        }
    },
    watch: {
        '$route.name': {
            immediate: true,
            handler: function(val) {
                if (val === 'community') {
                    this.chosenNav = this.$store.state.community.chosenNav;
                    this.$router.push({
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
.community {
    overflow: hidden;
}
.communityContent {
    height: 100%;
    margin: 92px 0 90px;
    background-color: $bg-body;
    min-height: calc(100vh - 182px);
    overflow: hidden;
}
</style>
