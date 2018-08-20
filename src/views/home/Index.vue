<template>
    <div class="home">
        <div class="nav">
            <div class="nav-wrapper">
                <h-scroll>
                    <li class="nav-item">
                        <router-link :to="{'name':'home_recommend'}">推荐</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{'name':'home_highLights'}">集锦</router-link>
                    </li>
                    <li class="nav-item" v-for="item in subLeagueList" :key="item.league_id">
                        <router-link :to="{'name': 'home_league', 'params':{'league_id':item.league_id}}">{{item.league_name}}</router-link>
                    </li>
                </h-scroll>
            </div>
            <div class="subscribe d-flex justify-content-between align-items-center">
                <div class="add">+</div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import HScroll from '@/components/HScroll';
import vFooter from '@/components/TheFooter';
import BScroll from 'better-scroll';
export default {
    name: 'home',
    components: {
        vFooter,
        HScroll
    },
    data() {
        return {
            test: 1
        };
    },
    computed: {
        subLeagueList() {
            return this.$store.state.league.subLeagueList;
        }
    },
    created() {
        this.$store.dispatch('league/GetSubLeagueList');
    },
    activated() {
        console.log('home activated');
    },
    methods: {
        editSubLeagueList() {
            let subList = [
                {
                    league_id: 11,
                    league_name: 'NBA'
                }
            ];
            let unSubList = [
                {
                    league_id: 12,
                    league_name: 'CBA'
                },
                {
                    league_id: 13,
                    league_name: '英超'
                }
            ];
            this.$store.dispatch('league/EditSubLeagueList', { subList: subList, unSubList: unSubList });
        }
    }
};
</script>

<style scoped lang="scss">
.nav {
    position: relative;
    display: block;
    width: 100%;
    height: 96px;
    .nav-wrapper {
        width: 640px;
        overflow: hidden;
        -webkit-mask-image: linear-gradient(to right, #fff 0%, #fff 80%, transparent 100%);
        .nav-item {
            width: 130px;
            height: 96px;
            flex: 0 0 130px;
            line-height: 96px;
            text-align: center;
            a {
                color: #808080;
                font-size: 30px;
            }
            .router-link-active {
                position: relative;
                display: flex;
                justify-content: center;
                text-align: center;
                font-size: 36px;
                font-weight: bold;
                color: #0099ff;
            }
            .router-link-active::after {
                content: '';
                position: absolute;
                display: block;
                bottom: 10px;
                width: 36px;
                height: 4px;
                right: 48px;
                @include background-image;
            }
        }
    }
    .subscribe {
        position: fixed;
        height: 96px;
        width: 108px;
        top: 0;
        right: 0;
        z-index: 2;
        text-align: center;
        .add {
            width: 100%;
            height: 42px;
            color: #b3b3b3;
            font-size: 64px;
            line-height: 42px;
            background: #fff;
            @include border-left-1px;
        }
    }
}
.content {
    position: absolute;
    top: 96px;
    bottom: 90px;
    left: 0;
    right: 0;
    overflow-y: auto;
}
</style>
