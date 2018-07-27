<template>
    <div class="home">
        <div class="header">
            <ul class="nav">
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
            <div class="subscribe">
                <button @click="editSubLeagueList">+</button>
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
export default {
    data() {
        return {};
    },
    created() {
        this.$store.dispatch('league/GetSubLeagueList');
    },
    computed: {
        subLeagueList() {
            console.log(this);
            return this.$store.getters.subLeagueList;
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
    },
    components: {
        'v-footer': TheFooter
    }
};
</script>

<style scoped lang="scss">
</style>
