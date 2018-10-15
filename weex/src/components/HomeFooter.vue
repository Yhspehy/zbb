<template>
    <div class="home-footer">
        <text class="nav-item" v-for="nav in navList" :key="nav.name">{{nav.name}}</text>
    </div>
</template>

<script>
export default {
    name: 'home_footer',
    data () {
        return {
            navList: [
                {
                    name: '首页',
                    url: 'home'
                },
                {
                    name: '赛程',
                    url: 'schedule'
                },
                {
                    name: '社区',
                    url: 'community'
                },
                {
                    name: '我的',
                    url: 'profile'
                }
            ]
        }
    }
}
</script>

<style scoped>
.home-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    background-color: #ffffff;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top-color: #808080;
    border-top-width: 1px;
    border-top-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: transparent;
    border-bottom-style: solid;
}

.nav-item {
    color: #ffc0cb;
}

</style>
