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
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        color: #4d4d4d;
        @include flex-center;
        flex-direction: column;
        i {
            font-size: 40px;
        }
    }
    .active {
        color: #688cac;
        i {
            @include text-image;
        }
    }
}
</style>
