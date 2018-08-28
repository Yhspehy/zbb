<template>
    <footer class="footer">
        <router-link
            v-for="el in navList"
            :key="el.name"
            :to="el.routePath"
            @click.native="$store.commit('home/SET_HOMEFOOTER', el.routePath)"
            :class="{'active': el.routePath === $store.state.home.homeFooter}">
            <i class="fa" :class="el.icon"></i>
            <span>{{el.name}}</span>
        </router-link>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            navList: [
                {
                    name: '首页',
                    routePath: '/home',
                    icon: 'fa-home'
                },
                {
                    name: '新闻',
                    routePath: '/news',
                    icon: 'fa-file'
                },
                {
                    name: '赛程',
                    routePath: '/schedule',
                    icon: 'fa-calendar'
                },
                {
                    name: '社区',
                    routePath: '/community',
                    icon: 'fa-comments'
                },
                {
                    name: '我的',
                    routePath: '/profile',
                    icon: 'fa-user-circle'
                }
            ]
        };
    },
    created() {
        if (!this.$store.state.home.homeFooter) {
            this.setHomeFooter();
        }
    },
    activated() {
        console.log('footer active');
        this.setHomeFooter();
    },
    methods: {
        setHomeFooter() {
            this.$store.commit(
                'home/SET_HOMEFOOTER',
                this.$route.matched[0].path === '/schedule/league/:league_id'
                    ? '/schedule'
                    : this.$route.matched[0].path
            );
        }
    }
};
</script>

<style scoped lang="scss">
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 90px;
    font-size: 20px;
    background: #fff;
    box-shadow: 0px 0px 1px 0px #bfbfbf;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 99;
    a {
        color: $grey-dark;
        @include flex-center;
        flex-direction: column;
        i {
            font-size: 40px;
        }
    }
    .active {
        color: #688cac;
        i {
            color: $blue;
        }
    }
}
</style>
