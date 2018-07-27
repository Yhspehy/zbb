<template>
    <footer class="footer">
        <ul class="main-nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/news">新闻</router-link></li>
            <li><router-link to="/schedule">赛程</router-link></li>
            <li><router-link to="/community">社区</router-link></li>
            <li><router-link to="/profile">我的</router-link></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped lang="scss">
</style>
