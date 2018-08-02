<template>
    <footer class="footer">
        <ul class="main-nav d-flex justify-content-between align-items-center">
            <li class="item-li">
                <router-link to="/">
                    <i class="fa fa-home"></i>首页
                </router-link>
            </li>
            <li class="item-li">
                <router-link to="/news">
                    <i class="fa fa-file"></i>新闻</router-link>
            </li>
            <li class="item-li">
                <router-link to="/schedule">
                    <i class="fa fa-calendar"></i>赛程</router-link>
            </li>
            <li class="item-li">
                <router-link to="/community">
                    <i class="fa fa-comments"></i>社区</router-link>
            </li>
            <li class="item-li">
                <router-link to="/profile">
                    <i class="fa fa-user-circle"></i>我的</router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
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
    ul {
        width: 100%;
        height: 100%;
        padding: 0 80px;
        .item-li {
            a {
                color: #4d4d4d;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                i {
                    font-size: 40px;
                }
            }

            .router-link-active {
                color: #0088ff;
                i {
                    @include text-image;
                }
            }
        }
    }
}
</style>
