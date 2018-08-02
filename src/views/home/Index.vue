<template>
    <div class="home">
        <div class="header">
            <ul class="nav d-flex justify-content-between align-items-center">
                <li>
                    <router-link :to="{name:'recommend'}">推荐</router-link>
                </li>
                <li>
                    <router-link :to="{name:'highLights'}">集锦</router-link>
                </li>
                <li v-for="item in subLeagueList" :key="item.league_id">
                    <router-link :to="{name: 'league', params:{league_id:item.league_id}}">{{item.league_name}}</router-link>
                </li>
            </ul>
            <div class="subscribe d-flex justify-content-between align-items-center">
                <div class="dialog"></div>
                <div class="add" @click="editSubLeagueList">+</div>
                <!-- <router-link :to="{name:'subEdit'}">+</router-link> -->
            </div>
        </div>
        <div class="content">
            <!-- <button class="click" v-on:click="addSub">click</button> -->
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import TheFooter from '@/components/TheFooter';
// import { saveToLocal, loadFromLocal } from '@/assets/js/localstore';
export default {
    name: 'home',
    components: {
        'v-footer': TheFooter
    },
    data() {
        return {
            test: 1
        };
    },
    created() {
        this.$store.dispatch('league/GetSubLeagueList');
    },
    computed: {
        subLeagueList() {
            return this.$store.state.league.subLeagueList;
        }
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
.header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 96px;
    .nav {
        position: fixed;
        width: 100%;
        height: 96px;
        padding: 0 36px;
        font-size: 30px;
        background: #fff;
        z-index: 1;
        a {
            color: #808080;
        }
        .router-link-active {
            position: relative;
            display: flex;
            justify-content: center;
            font-size: 36px;
            font-weight: bold;
            @include text-image;
        }
        .router-link-active::after {
            content: '';
            position: absolute;
            display: block;
            top: 56px;
            width: 36px;
            height: 4px;
            @include background-image;
        }
    }
    .subscribe {
        position: fixed;
        height: 96px;
        right: 0;
        z-index: 2;
        .dialog {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4), #ffffff);
            width: 116px;
            height: 40px;
            @include border-right-1px(#b3b3b3);
        }
        .add {
            height: 96px;
            color: #b3b3b3;
            font-size: 64px;
            padding-left: 30px;
            padding-right: 36px;
            line-height: 90px;
            background: #fff;
        }
    }
}
.content {
    position: absolute;
    top: 96px;
    bottom: 90px;
    left: 0;
    right: 0;
    background: #f3f7f9;
    overflow-y: auto;
}
</style>
