<template>
        <footer class="footer">
            <router-link
                v-for="el in navList"
                :key="el.name"
                :to="el.routePath"
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
                // {
                //     name: '新闻',
                //     routePath: '/news',
                //     icon: 'fa-file'
                // },
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
    mounted() {
        this.$el.addEventListener('touchmove', e => e.preventDefault());
    },
    beforeDestroy() {
        this.$el.removeEventListener('touchmove', e => e.preventDefault());
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
    background: #fff;
    z-index: 99;
    box-shadow: 0px 0px 1px 0px #bfbfbf;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
        --safe-area-inset-bottom: env(safe-area-inset-bottom);
        padding-bottom: calc(var(--safe-area-inset-bottom) + 10px);
    }
    a {
        color: $grey-dark;
        @include flex-center;
        flex-direction: column;
        i {
            font-size: 40px;
            margin-bottom: 5px;
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
